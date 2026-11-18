import type { InvoiceSummaryItem } from './dashboard.types';

export const invoiceSummary: InvoiceSummaryItem[] = [
  { status: 'pending', label: 'Oczekujące', count: 5, total: 1_234_000 },
  { status: 'needsCorrection', label: 'Do poprawy', count: 2, total: 123_000 },
  { status: 'accepted', label: 'Przyjęte', count: 18, total: 4_567_889 },
];
