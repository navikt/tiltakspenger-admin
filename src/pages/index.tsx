import { BodyLong, Button, Heading, Panel } from "@navikt/ds-react";
import styles from "./home.module.css";

export default function Home() {
  return (
    <main className={styles.main_content}>
      <div className={styles.container}>
        <Panel border>
          <Heading spacing level="2" size="large">
            Innsendinger
          </Heading>
          <BodyLong>
            <Button>Resett feilede</Button>
          </BodyLong>
        </Panel>
      </div>
    </main>
  );
}
