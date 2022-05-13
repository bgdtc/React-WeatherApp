// IMPORTS

// CSS
import './App.css';

// ROUTER
import { HashRouter, Route, Routes } from 'react-router-dom';

// LAYOUTS
import MainLayout from './layouts/mainLayout';

// PAGES
import Home from './pages/HomePage';
import Nasa from './components/nasa/nasa';
import Weather from './pages/WeatherPage';
import NotFound from './pages/NotFound';

// DEFAULT APP ROUTES
const AppRoutes = () => (
  <MainLayout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Nasa" element={<Nasa />} />
      <Route path="Weather" element={<Weather />} />
    </Routes>
  </MainLayout>
)

// ROUTER
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/*" element={<AppRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>

  );
}

