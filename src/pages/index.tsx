import { Button, useToast } from '@chakra-ui/react';
import Section, { SectionStat } from '../components/Section';
import useSWR from 'swr';
import fetcher from '../utils/http';
import { Innsendinger } from '../types';
import { useState } from 'react';

function Home() {
    const { data } = useSWR<Innsendinger>('/api/innsendinger/feiletogstoppet', fetcher);
    const [resettLoading, setResettLoading] = useState(false);
    const toast = useToast();
    const handleResettInnsendinger = async () => {
        setResettLoading(true);
        await fetch('/api/innsendinger/resett/feiletogstoppet', { method: 'POST' }).then((res) => {
            setResettLoading(false);
            if (res.ok) {
                toast({
                    title: 'Resett',
                    description: 'Resett av innsendinger var vellykket.',
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                });
            }
        });
    };

    return (
        <Section label="Innsendinger" stats={data as SectionStat}>
            <Button
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
