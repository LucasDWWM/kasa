import Home from '@/assets/pages/Home';
import Logements from '@/assets/components/Logements';
import APropos from '@/assets/pages/APropos';
import NotFound from '@/assets/pages/NotFound';
import Layout from "@/assets/components/Layout";

import { Route, Router, Routes } from 'react-router-dom'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<Layout><Logements /></Layout>} />
      <Route path="/APropos" element={<Layout><APropos /></Layout>} />
      <Route path="*" element={<Layout><NotFound /></Layout>} />

    </Routes>
  );
}


export default AppRouter;