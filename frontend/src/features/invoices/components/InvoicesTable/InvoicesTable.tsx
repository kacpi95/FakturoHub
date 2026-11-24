import { invoiceStatusLabels } from '../../invoice.constants';
import type { InvoiceListItem } from '../../types/invoice.types';
import { currencyFormatter, dateFormatter } from '../../utils/formatters';
import styles from './InvoicesTable.module.scss';

type InvoicesTableProps = {
  invoices: readonly InvoiceListItem[];
};

export function InvoicesTable({ invoices }: InvoicesTableProps) {
  if (invoices.length === 0) {
    return <p className={styles.empty}>Brak faktur do wyświetlenia.</p>;
  }

  return (
    <div
      className={styles.container}
      role='region'
      aria-label='Tabela faktur'
      tabIndex={0}
    >
      <table className={styles.table}>
        <caption className={styles.caption}>Zestawienie faktur</caption>

        <thead>
          <tr>
            <th scope='col'>Numer</th>
            <th scope='col'>Kontrahent</th>
            <th scope='col' className={styles.amount}>
              Kwota brutto
            </th>
            <th scope='col'>Status KSeF</th>
            <th scope='col'>Data wystawienia</th>
          </tr>
        </thead>

        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.id}>
              <th scope='row'>{invoice.number}</th>
              <td>{invoice.customerName}</td>

              <td className={styles.amount}>
                {currencyFormatter.format(invoice.total / 100)}
              </td>

              <td>
                <span className={styles.badge} data-status={invoice.status}>
                  {invoiceStatusLabels[invoice.status]}
                </span>
              </td>

              <td>
                <time dateTime={invoice.issuedOn}>
                  {dateFormatter.format(new Date(invoice.issuedOn))}
                </time>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
