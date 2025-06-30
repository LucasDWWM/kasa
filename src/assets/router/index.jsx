// Importation des différentes pages utilisées dans les routes
import Home from '@/assets/pages/Home';
import APropos from '@/assets/pages/APropos';
import NotFound from '@/assets/pages/NotFound';

// La page dynamique Logements (détails d'un logement)
import Logements from '@/assets/components/Logements';

// Composant Layout (Header + Footer autour des pages)
import Layout from "@/assets/components/Layout";

// Importation de routing de React Router
import { Route, Routes } from 'react-router-dom'

// Composant principal pour gérer le routage
function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />

      {/* Route dynamique pour chaque logement, avec un ID récupéré via useParams */}
      <Route path="/logement/:id" element={<Layout><Logements /></Layout>} />

      <Route path="/APropos" element={<Layout><APropos /></Layout>} />

      {/* URL non reconnue redirige vers NotFound */}
      <Route path="*" element={<Layout><NotFound /></Layout>} />
    </Routes>
  );
}

// Export du routeur pour qu’il soit utilisé dans App.jsx
export default AppRouter;
