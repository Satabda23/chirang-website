import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import './AboutDistrict.css';

const AboutDistrict = () => {
  const [activeTab, setActiveTab] = useState('about-district');

  const sidebarLinks = [
    { id: 'district-profile', label: 'District Profile', path: '/about/district-profile' },
    { id: 'previous-commissioners', label: 'Previous District Commissioners', path: '/about/previous-commissioners' },
    { id: 'history', label: 'History', path: '/about/history' },
    { id: 'about-district', label: 'About District', path: '/about/about-district', isActive: true }
  ];

  return (
    <div className="about-district-page">
      {/* Breadcrumb */}
      <div className="breadcrumb-section">
        <div className="container">
          <nav className="breadcrumb">
            <a href="/">Home</a>
            <span className="separator">›</span>
            <a href="/about">About Us</a>
            <span className="separator">›</span>
            <span className="current">About District</span>
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
                <h1 className="about-title">About District</h1>
              </div>

              {/* Content Section */}
              <div className="about-content">
                <div className="content-header">
                  <h2 className="content-title">About Chirang District</h2>
                  <span className="last-updated">Last Updated on: November 02, 2023</span>
                </div>

                <div className="content-body">
                  <p className="content-text">
                    The word "Chirang" has been derived from garo word "chi" means water and "rang" means wealth. Chirang district is one of the four districts of bodoland territorial area district (btad) under the govt. Of assam, created vide notification no. Gag (b). 137/ 2002/ pt/ 117 dtd. 30/10/2003 within assam under clause 6 of article 332 by the 90th amendment act, 2003 of the constitution of india under the provision of the sixth schedule. The district has been functioning with effect from 04th june, 2004. It was carved out of the districts of kokrajhar, bongaigaon and barpeta. Kajalgaon is the district headquarter.
                  </p>

                  <p className="content-text">
                    The district started functioning with effect from 4th june, 2004 with its head quarter at Kajalgaon.This district is having one civil sub-division with its head quarter at Bijni and one subtar sub-division with its head quarter at Kajalgaon.The Chirang district possesses a plain topography. It also has undulating areas and the northern parts of the district lie on the foothills of Bhutan that has slightly higher elevation, which is decreasing towards the southern parts of the district. The four types of soil found here are entisols, inceptisols, alfisols and ultisols. The district comes under lower Brahmaputra valley agro-climatic zone. The climate is sub-tropical in nature with warm and humid summer followed by dry and cool winter. The pre and post-monsoon months are unpredictable and experience erratic rainfall. Champamati, Aie and Manas rivers flow through the district and join the Brahmaputra river. Many other tributaries, small rivulets and streams flow through this district.
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

export default AboutDistrict;