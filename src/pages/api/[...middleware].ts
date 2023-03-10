import { SimpleResponse } from '../../types';
import { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from '../../utils/auth';
import logger from '../../utils/serverLogger';

const backendUrl = process.env.TILTAKSPENGER_VEDTAK_URL || '';

function getUrl(req: NextApiRequest): string {
    const path = req?.url?.replace('/api', '');
    return `${backendUrl}${path}`;
}

async function makeApiRequest(request: NextApiRequest, oboToken: string): Promise<Response> {
    const url = getUrl(request);
    logger.info(`Making request to ${url}`);
    return await fetch(url, {
        method: request.method,
        body: request.method === 'GET' ? undefined : request.body,
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${oboToken}`,
        },
    });
}

export async function middleware(request: NextApiRequest, response: NextApiResponse): Promise<void> {
    let oboToken = null;
    try {
        oboToken = await getToken(request);
    } catch (error: any) {
        const simpleResponse = error as SimpleResponse;
        logger.error('Bruker har ikke tilgang, kall mot Azure feilet', error);
        response.status(simpleResponse.status).json({ message: 'Bruker har ikke tilgang' });
    }
    if (oboToken) {
        try {
            const res = await makeApiRequest(request, oboToken as string);
            if (res.ok) {
                let body;
                const contentType = request.headers['content-type'];
                if (contentType === 'application/json') {
                    body = await res.json();
                    response.status(res.status).json(body);
                } else {
                    body = await res.text();
                    response.status(res.status).send(body);
                }
            } else {
                const error = await res.text();
                response.status(res.status).json({ error: !error ? res.statusText : error });
            }
        } catch (error) {
            logger.error('Fikk ikke kontakt med APIet, returnerer 502', error);
            response.status(502).json({ message: 'Bad Gateway' });
        }
    }
}

export default middleware;
