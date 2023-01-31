import { Button, useToast } from '@chakra-ui/react';
import Section, { SectionStat } from '../components/Section';
import useSWR from 'swr';
import fetcher from '../utils/http';
import { Innsendinger } from '../types';
import { useState } from 'react';

function Home() {
    const { data, isLoading } = useSWR<Innsendinger>('/api/innsendinger/feiletogstoppet', fetcher);
    const [resettLoading, setResettLoading] = useState(false);
    const toast = useToast();

    const handleResettInnsendinger = async () => {
        setResettLoading(true);
        await fetch('/api/innsendinger/resett/feiletogstoppet', { method: 'POST' }).then((res) => {
            setResettLoading(false);
            if (res.ok) {
                toast({
                    title: 'Trigget resett av innsendinger',
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                });
            } else {
                toast({
                    title: 'Noe gikk galt',
                    description: `${res.statusText}`,
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                });
            }
        });
    };

    return (
        <Section isLoading={isLoading} label="Innsendinger" stats={data as SectionStat}>
            <Button
                isDisabled={isLoading}
                isLoading={resettLoading}
                loadingText="Resetter..."
                onClick={handleResettInnsendinger}
                colorScheme="blue"
                size="lg"
            >
                Resett
            </Button>
        </Section>
    );
}

export default Home;
