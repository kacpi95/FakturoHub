import { useState } from 'react';
import { FileText, Menu, X } from 'lucide-react';
import { NavLink, Outlet } from 'react-router';

import styles from './DashboardLayout.module.scss';
import { dashboardNavigation } from './dashboard-navigation';

export function DashboardLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar} aria-label='Panel aplikacji'>
        <div className={styles.sidebarHeader}>
          <div className={styles.brand}>
            <FileText size={24} aria-hidden='true' />
            <span>Faktura Flow</span>
          </div>
          <button
            type='button'
            className={styles.menuButton}
            aria-label={isMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
            aria-expanded={isMenuOpen}
            aria-controls='dashboard-navigation'
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? (
              <X size={22} aria-hidden='true' />
            ) : (
              <Menu size={22} aria-hidden='true' />
            )}
          </button>
        </div>
        <nav
          className={styles.navigation}
          id='dashboard-navigation'
          aria-label='Nawigacja główna'
          data-open={isMenuOpen}
        >
          <ul className={styles.navigationList}>
            {dashboardNavigation.map(({ label, icon: Icon, to }) => (
              <li key={label}>
                {to ? (
                  <NavLink
                    className={styles.navigationLink}
                    to={to}
                    end
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon size={20} aria-hidden='true' />
                    {label}
                  </NavLink>
                ) : (
                  <span className={styles.navigationLink} aria-disabled='true'>
                    <Icon size={20} aria-hidden='true' />
                    {label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}
