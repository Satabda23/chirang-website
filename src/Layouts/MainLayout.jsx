// src/Layouts/MainLayout.jsx
import { Outlet } from 'react-router-dom';
import TopHeader from '../components/header/TopHeader/TopHeader';
import MainHeader from '../components/header/MainHeader/MainHeader';
import './MainLayout.css';  // Make sure this matches your actual filename

const MainLayout = () => {
  return (
    <div className="app-container">
      {/* Skip to Main Content - Accessibility */}
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>

      {/* Top Orange Bar with Social Media & Accessibility */}
      <TopHeader />
      
      {/* Main Navigation Header with Logo & Menu */}
      <MainHeader />
      
      {/* Main Page Content Area */}
      <main id="main-content" className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;