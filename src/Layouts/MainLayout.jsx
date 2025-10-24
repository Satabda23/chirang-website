// src/Layouts/MainLayout.jsx
import { Outlet } from 'react-router-dom';
import TopHeader from '../components/header/TopHeader/TopHeader';
import MainHeader from '../components/header/MainHeader/MainHeader';
import Footer from '../components/footer/Footer';
import './MainLayout.css';

const MainLayout = () => {
  return (
    <div className="app-container">
      {/* Skip to Main Content - Accessibility */}
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>
      {/* Header Section */}
      <TopHeader />
      <MainHeader />
      
      {/* Main Page Content Area */}
      <main id="main-content" className="main-content">
        <Outlet />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default MainLayout;