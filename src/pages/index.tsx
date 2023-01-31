import { Button } from '@chakra-ui/react';
import Section, { SectionStat } from '../components/Section';

function Home() {
    const dummyStats: SectionStat[] = [
        { label: 'Feilet', value: '3' },
        { label: 'Stoppet', value: '5' },
    ];
    const handleResettInnsendinger = async () => {
        await fetch('/api/innsendinger/resett/feiletogstoppet', { method: 'POST' }).then((res) => console.log(res));
    };
    return (
        <Section label="Innsendinger" stats={dummyStats}>
            <Button onClick={handleResettInnsendinger} colorScheme="blue" size="lg">
                Resett
            </Button>
        </Section>
    );
}

export default Home;
