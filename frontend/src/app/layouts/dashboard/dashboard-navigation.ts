import { FileText, House, Settings, Unplug, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type NavigationItem = {
  label: string;
  icon: LucideIcon;
  available: boolean;
};

export const dashboardNavigation: NavigationItem[] = [
  { label: 'Pulpit', icon: House, available: true },
  { label: 'Faktury', icon: FileText, available: false },
  { label: 'Kontrahenci', icon: Users, available: false },
  { label: 'Integracja KSeF', icon: Unplug, available: false },
  { label: 'Ustawienia', icon: Settings, available: false },
];

