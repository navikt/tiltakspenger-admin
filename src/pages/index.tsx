import { Button } from '@chakra-ui/react';
import Section, { SectionStat } from '../components/Section';
import useSWR from 'swr';
import fetcher from '../utils/http';
import { Innsendinger } from '../types';

function Home() {
    const { data, error, isLoading } = useSWR<Innsendinger>('/api/innsendinger/feiletogstoppet', fetcher);
    const handleResettInnsendinger = async () => {
        await fetch('/api/innsendinger/resett/feiletogstoppet', { method: 'POST' }).then((res) => console.log(res));
    };

    return (
        <Section label="Innsendinger" stats={data as SectionStat}>
            <Button onClick={handleResettInnsendinger} colorScheme="blue" size="lg">
                Resett
            </Button>
        </Section>
    );
}

export default Home;
