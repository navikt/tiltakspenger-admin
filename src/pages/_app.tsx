import '@navikt/ds-css';
import '@navikt/ds-css-internal';
import Header from '../components/Header';
import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import { extendTheme } from '@chakra-ui/react';
import Main from '../layouts/Main';

export const theme = extendTheme();

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Header />
            <Main>
                <Component {...pageProps} />
            </Main>
        </ChakraProvider>
    );
}

export default MyApp;
