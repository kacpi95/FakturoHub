import type { InvoiceListItem } from './types/invoice.types';

export const mockInvoices: InvoiceListItem[] = [
  {
    id: 'inv-34',
    number: 'FV/2025/0034',
    customerName: 'ABC Handel Sp. z o.o.',
    total: 369_000,
    status: 'accepted',
    issuedOn: '2025-01-22',
  },
  {
    id: 'inv-33',
    number: 'FV/2025/0033',
    customerName: 'Delta IT Sp. z o.o.',
    total: 123_000,
    status: 'needsCorrection',
    issuedOn: '2025-01-21',
  },
  {
    id: 'inv-32',
    number: 'FV/2025/0032',
    customerName: 'Gamma Serwis S.A.',
    total: 750_000,
    status: 'pending',
    issuedOn: '2025-01-20',
  },
];
