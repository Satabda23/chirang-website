import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import './History.css';

const History = () => {
  const [activeTab, setActiveTab] = useState('history');

  const sidebarLinks = [
    { id: 'district-profile', label: 'District Profile', path: '/about/district-profile' },
    { id: 'previous-commissioners', label: 'Previous District Commissioners', path: '/about/previous-commissioners' },
    { id: 'history', label: 'History', path: '/about/history' },
    { id: 'about-district', label: 'About District', path: '/about/about-district', isActive: true }
  ];

  return (
    <div className="about-history">
      {/* Breadcrumb */}
      <div className="breadcrumb-section">
        <div className="container">
          <nav className="breadcrumb">
            <a href="/">Home</a>
            <span className="separator">›</span>
            <a href="/about">About Us</a>
            <span className="separator">›</span>
            <span className="current">History</span>
          </nav>
        </div>
      </div>

      <div className="container">
        <div className="about-layout">
          {/* Left Sidebar */}
          <aside className="about-sidebar">
            <nav className="sidebar-menu">
              {sidebarLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.path}
                  className={`sidebar-link ${activeTab === link.id ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab(link.id);
                  }}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="arrow-icon" />
                </a>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="about-main">
            <div className="about-card">
              {/* Page Header */}
              <div className="about-header">
                <h1 className="about-title">History</h1>
              </div>

              {/* Content Section */}
              <div className="about-content">
                <div className="content-header">
                  <h2 className="content-title">History</h2>
                  <span className="last-updated">Last Updated on: November 02, 2023</span>
                </div>

                <div className="content-body">
                  <p className="content-text">
                    The word "Chirang" has been derived from garo word -"chi" means water and "rang" means wealth. Chirang district is one of the four districts of bodoland territorial area district (btad) under the govt. Of assam, created vide notification no. Gag (b). 137/ 2002/ pt/ 117 dtd. 30/10/2003 within assam under clause 6 of article 332 by the 90th amendment act, 2003 of the constitution of india under the provision of the sixth schedule. The district has been functioning with effect from 04th june, 2004. It was carved out of the districts of kokrajhar, bongaigaon and barpeta. Kajalgaon is the district headquarter.
                  </p>

                  
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default History;