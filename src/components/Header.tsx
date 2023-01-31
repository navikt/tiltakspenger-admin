import { Header as NavHeader } from '@navikt/ds-react-internal';

function Header() {
    return (
        <NavHeader>
            <NavHeader.Title as="h1">Tiltakspenger admin</NavHeader.Title>
        </NavHeader>
    );
}

export default Header;
