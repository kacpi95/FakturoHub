import styles from './InvoicesPage.module.scss';

export function InvoicesPage() {
  return (
    <main className={styles.page}>
      <header>
        <h1 className={styles.title}>Faktury</h1>
        <p className={styles.subtitle}>
          Zarządzaj fakturami, wysyłką do KSeF i ich statusem.
        </p>
      </header>
    </main>
  );
}
