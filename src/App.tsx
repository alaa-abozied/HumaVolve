import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { ROUTES } from '@/constants/routes';

export default function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
      </Routes>
    </MainLayout>
  );
}
