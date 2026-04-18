import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import WelcomePage from './pages/WelcomePage';
import DashboardPage from './pages/DashboardPage';
import TicketManagementPage from './pages/TicketManagementPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/welcome" element={<WelcomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/tickets" element={<TicketManagementPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
