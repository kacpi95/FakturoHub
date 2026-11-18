export type InvoiceStatus = 'pending' | 'needsCorrection' | 'accepted';

export type InvoiceListItem = {
  id: string;
  number: string;
  customerName: string;
  total: number;
  status: InvoiceStatus;
  issuedOn: string;
};
