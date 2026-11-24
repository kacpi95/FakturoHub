export type InvoiceStatus =
  | 'pending'
  | 'needsCorrection'
  | 'accepted'
  | 'rejected';

export type InvoiceListItem = {
  id: string;
  number: string;
  customerName: string;
  total: number;
  status: InvoiceStatus;
  issuedOn: string;
};
