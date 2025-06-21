import Home from '@/assets/pages/Home';
import APropos from '@/assets/pages/APropos';
import NotFound from '@/assets/pages/NotFound';
import Logements from '@/assets/components/Logements';
import Layout from "@/assets/components/Layout";

import { Route, Routes } from 'react-router-dom'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/logement/:id" element={<Layout><Logements /></Layout>} />
      <Route path="/APropos" element={<Layout><APropos /></Layout>} />
      <Route path="*" element={<Layout><NotFound /></Layout>} />

    </Routes>
  );
}


export default AppRouter;