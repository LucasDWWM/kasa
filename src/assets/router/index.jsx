import Home from '@/assets/pages/Home';
import Logements from '@/assets/components/Logements';
import APropos from '@/assets/pages/APropos';
import NotFound from '@/assets/pages/NotFound';

import { Route, Router, Routes } from 'react-router-dom'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<Logements />} />
      <Route path="/APropos" element={<APropos />} />
      <Route path="/404" element={<NotFound />} />
    </Routes>
  );
}


export default AppRouter;