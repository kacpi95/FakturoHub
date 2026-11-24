import { InvoicesTable } from '../../features/invoices/components/InvoicesTable/InvoicesTable';
import { mockInvoices } from '../../features/invoices/invoices.mock';
import styles from './InvoicesPage.module.scss';

const sortedInvoices = [...mockInvoices].sort((first, second) =>
  second.issuedOn.localeCompare(first.issuedOn),
);

export function InvoicesPage() {
  return (
    <main className={styles.page}>
      <header>
        <h1 className={styles.title}>Faktury</h1>
        <p className={styles.subtitle}>
          Zarządzaj fakturami, wysyłką do KSeF i ich statusem.
        </p>
      </header>
      <section className={styles.list} aria-label='Lista faktur'>
        <InvoicesTable invoices={sortedInvoices} />

        <p className={styles.results} role='status'>
          Liczba faktur: {sortedInvoices.length}
        </p>
      </section>
    </main>
  );
}
