import { FileText, House, Settings, Unplug, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type NavigationItem = {
  label: string;
  icon: LucideIcon;
  to?: string;
};

export const dashboardNavigation: NavigationItem[] = [
  { label: 'Pulpit', icon: House, to: '/app' },
  { label: 'Faktury', icon: FileText, to: '/app/invoices' },
  { label: 'Kontrahenci', icon: Users },
  { label: 'Integracja KSeF', icon: Unplug },
  { label: 'Ustawienia', icon: Settings },
];
