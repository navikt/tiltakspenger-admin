import { Center, Container } from '@chakra-ui/react';

interface MainProps extends React.PropsWithChildren {}

function Main({ children }: MainProps) {
    return (
        <Center as="main" w="100%" py="6">
            <Container maxW="container.lg">{children}</Container>
        </Center>
    );
}

export default Main;
