import { CircleAlert, CircleCheck, Clock } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Link } from 'react-router';

import { mockInvoices } from '../../invoices.mock';
import type { InvoiceStatus } from '../../types/invoice.types';
import styles from './RecentInvoices.module.scss';

const statusLabels: Record<InvoiceStatus, string> = {
  pending: 'Oczekująca',
  needsCorrection: 'Do poprawy',
  accepted: 'Przyjęta',
};

const currencyFormatter = new Intl.NumberFormat('pl-PL', {
  style: 'currency',
  currency: 'PLN',
});

const dateFormatter = new Intl.DateTimeFormat('pl-PL', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
  timeZone: 'UTC',
});

const statusIcons: Record<InvoiceStatus, LucideIcon> = {
  pending: Clock,
  needsCorrection: CircleAlert,
  accepted: CircleCheck,
};

const recentInvoices = [...mockInvoices]
  .sort((first, second) => second.issuedOn.localeCompare(first.issuedOn))
  .slice(0, 3);

export function RecentInvoices() {
  return (
    <section className={styles.section} aria-labelledby='recent-invoices-title'>
      <header className={styles.header}>
        <h2 className={styles.title} id='recent-invoices-title'>
          Ostatnie faktury
        </h2>

        <Link className={styles.viewAll} to='/app/invoices'>
          Zobacz wszystkie →
        </Link>
      </header>

      <div
        className={styles.tableContainer}
        role='region'
        aria-labelledby='recent-invoices-title'
        tabIndex={0}
      >
        <table className={styles.table}>
          <thead>
            <tr>
              <th scope='col'>Numer</th>
              <th scope='col'>Kontrahent</th>
              <th scope='col' className={styles.amount}>
                Kwota brutto
              </th>
              <th scope='col'>Status</th>
              <th scope='col'>Data wystawienia</th>
            </tr>
          </thead>
          <tbody>
            {recentInvoices.map((invoice) => {
              const StatusIcon = statusIcons[invoice.status];

              return (
                <tr key={invoice.id}>
                  <th scope='row'>{invoice.number}</th>
                  <td>{invoice.customerName}</td>
                  <td className={styles.amount}>
                    {currencyFormatter.format(invoice.total / 100)}
                  </td>
                  <td>
                    <span className={styles.badge} data-status={invoice.status}>
                      <StatusIcon size={18} aria-hidden='true' />
                      {statusLabels[invoice.status]}
                    </span>
                  </td>
                  <td>
                    <time dateTime={invoice.issuedOn}>
                      {dateFormatter.format(new Date(invoice.issuedOn))}
                    </time>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
