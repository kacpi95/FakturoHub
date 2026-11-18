export type InvoiceSummaryStatus = 'pending' | 'needsCorrection' | 'accepted';

export type InvoiceSummaryItem = {
  status: InvoiceSummaryStatus;
  label: string;
  count: number;
  total: number;
};
