import { capitalizeFirst } from '../utils/general';
import {
    Card,
    CardHeader,
    Heading,
    CardBody,
    StatGroup,
    Stat,
    StatLabel,
    StatNumber,
    CardFooter,
    Center,
    Spinner,
} from '@chakra-ui/react';

export type SectionStat = { [key: string]: string };

interface SectionProps extends React.PropsWithChildren {
    label: string;
    stats?: SectionStat;
    isLoading: boolean;
}

function Section({ label, stats, children, isLoading }: SectionProps) {
    return (
        <Card my="4">
            <CardHeader>
                <Heading>{label}</Heading>
            </CardHeader>
            {isLoading && (
                <Center>
                    <Spinner />
                </Center>
            )}
            {stats && (
                <CardBody>
                    <StatGroup>
                        {Object.entries(stats).map((stat, index) => (
                            <Stat key={index}>
                                <StatLabel>{capitalizeFirst(stat[0])}</StatLabel>
                                <StatNumber>{stat[1]}</StatNumber>
                            </Stat>
                        ))}
                    </StatGroup>
                </CardBody>
            )}
            <CardFooter gap="4">{children}</CardFooter>
        </Card>
    );
}

export default Section;
