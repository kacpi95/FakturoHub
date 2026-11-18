import { CircleAlert, CircleCheck, Clock, Plus } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { InvoiceSummaryStatus } from './dashboard.types';

import { invoiceSummary } from './dashboard.mock';
import styles from './Dashboard.module.scss';

export function DashboardPage() {
  const statusIcons: Record<InvoiceSummaryStatus, LucideIcon> = {
    pending: Clock,
    needsCorrection: CircleAlert,
    accepted: CircleCheck,
  };

  const currencyFormatter = new Intl.NumberFormat('pl-PL', {
    style: 'currency',
    currency: 'PLN',
  });

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Pulpit</h1>
          <p className={styles.subtitle}>Przegląd faktur i statusów KSeF</p>
        </div>
        <button className={styles.issueButton} type='button' disabled>
          <Plus size={18} aria-hidden='true' />
          Wystaw fakturę
        </button>
      </header>
      <section aria-label='Podsumowanie statusów faktur'>
        <div className={styles.summary}>
          {invoiceSummary.map(({ status, label, count, total }) => {
            const StatusIcon = statusIcons[status];

            return (
              <div className={styles.card} data-status={status} key={status}>
                <div className={styles.cardName}>
                  <StatusIcon size={18} aria-hidden='true' />
                  {label}
                </div>
                <p className={styles.cardCount}>{count}</p>
                <p className={styles.cardTotal}>
                  Suma: {currencyFormatter.format(total / 100)}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
