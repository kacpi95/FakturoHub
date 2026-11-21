import { Navigate, Routes, Link, Route } from 'react-router';

import { DashboardLayout } from './app/layouts/dashboard/DashboardLayout';
import { DashboardPage } from './pages/Dashboard/DashboardPage';
import { InvoicesPage } from './pages/Invoices/InvoicesPage';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/app' replace />} />
      <Route path='/app' element={<DashboardLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path='invoices' element={<InvoicesPage />} />
      </Route>

      <Route
        path='*'
        element={
          <main>
            <h1>Nie znaleziono strony</h1>
            <Link to='/app'>Wróć do pulpitu</Link>
          </main>
        }
      />
    </Routes>
  );
}
