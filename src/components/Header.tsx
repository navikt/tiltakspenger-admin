import { Header as NavHeader } from "@navikt/ds-react-internal";

function Header() {
  return (
    <NavHeader>
      <NavHeader.Title as="h1">Tiltakspenger admin</NavHeader.Title>
      <NavHeader.User name="Ola Normann" className="ml-auto mr-0" />
    </NavHeader>
  );
}

export default Header;
