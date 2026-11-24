import type { InvoiceStatus } from './types/invoice.types';

export const invoiceStatusLabels: Record<InvoiceStatus, string> = {
  pending: 'Oczekująca',
  needsCorrection: 'Odrzucona',
  accepted: 'Przyjęta',
};
