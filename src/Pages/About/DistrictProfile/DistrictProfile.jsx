import { useState } from 'react';
import './DistrictProfile.css';

const DistrictProfile = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const sidebarLinks = [
    { id: 'profile', label: 'District Profile', isActive: true },
    { id: 'commissioners', label: 'Previous District Commissioners' },
    { id: 'history', label: 'History' },
    { id: 'boundaries', label: 'Boundaries' }
  ];

  const administrativeData = [
    { label: 'Administrative Division', value: 'LAD', label2: 'Official Language', value2: 'Assamese' },
    { label: 'Number of Sub-Divisions', value: '2', label2: 'Number of Revenue Circles', value2: '3' },
    { label: 'Number of Developmental Blocks', value: '3', label2: 'Number of Educational Blocks', value2: '1' },
    { label: 'Number of Municipality Boards', value: '3', label2: 'Number of Town Committees', value2: '-' },
    { label: 'Number of Gaon Panchayats', value: '74 Nos. of VCDC', label2: 'Number of Villages', value2: '490' },
    { label: 'Number of Revenue Villages', value: '479', label2: 'Number of Forest Villages', value2: '20' },
    { label: 'Number of Police Stations', value: '7', label2: 'Number of Police Outposts', value2: '7' },
    { label: 'Number of Fire Stations', value: '2', label2: 'Number of Post Offices', value2: '-' },
    { label: 'Number of Bank Branches', value: '-', label2: 'Number of Tea Estates', value2: '0' }
  ];

  const politicalSetup = [
    { label: 'Lok Sabha Constituency', value: 'Kokrajhar S/T (GPC-1)' },
    { label: 'Legislative Assembly Constituency', value: '1 (19 Sidli-Chirang LAC, 20 Bijni LAC)' }
  ];

  const healthSetup = [
    { label: 'Number of District Hospitals', value: '1', label2: 'Number of Primary Health Centres', value2: '9' },
    { label: 'Number of Community Health Centres', value: '4', label2: 'Number of Sub Centres', value2: '87' }
  ];

  const educationalSetup = [
    { label: 'Number of University', value: 'Bodoland University-Kokrajhar (Deemed)', label2: 'Number of Degree College', value2: '6' },
    { label: 'Number of Engineering College', value: 'Chirang Institute of Technology (CIT)-Kajalgaon (Deemed)', label2: 'Number of Medical College', value2: '-' },
    { label: 'Number of Polytechnics', value: '0', label2: 'Number of ITIs', value2: '0' },
    { label: 'Number of Higher Secondary Schools', value: '18', label2: 'Number of High Schools', value2: '44' },
    { label: 'Upper Primary (Govt)', value: '85', label2: 'Lower Primary (Govt)', value2: '777' }
  ];

  const censusData = [
    { label: 'Total Area', value: '1468.42sq.Km', label2: 'Total Population', value2: '482,162' },
    { label: 'Male Population', value: '244,082', label2: 'Female Population', value2: '237,362' },
    { label: 'Rural Population', value: '446,074', label2: 'Urban Population', value2: '36,557' },
    { label: 'Population Growth (%)', value: '11.54', label2: 'Density', value2: '293/sq. Km' },
    { label: 'Sex Ratio', value: '969', label2: 'Average Literacy (%)', value2: '63.55' },
    { label: 'Male Literacy (%)', value: '70.24', label2: 'Female Literacy (%)', value2: '56.65' },
    { label: 'Total Household', value: '97,385', label2: '', value2: '' }
  ];

  return (
    <div className="district-profile-page">
      {/* Breadcrumb */}
      <div className="breadcrumb-section">
        <div className="container">
          <nav className="breadcrumb">
            <a href="/">Home</a>
            <span className="separator">›</span>
            <a href="/about">About Us</a>
            <span className="separator">›</span>
            <span className="current">District Profile</span>
          </nav>
        </div>
      </div>

      <div className="container">
        <div className="profile-layout">
          {/* Left Sidebar */}
          <aside className="profile-sidebar">
            <div className="sidebar-card">
              <div className="sidebar-header">District Profile</div>
              <nav className="sidebar-menu">
                {sidebarLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    className={`sidebar-link ${activeTab === link.id ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab(link.id);
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="profile-main">
            <div className="profile-card">
              <div className="profile-header">
                <h1 className="profile-title">District Profile</h1>
              </div>

              {/* Brief Introduction */}
              <section className="content-section">
                <div className="section-header">
                  <h2 className="section-title">Brief Introduction</h2>
                  <span className="last-updated">Last Updated on:April 22, 2024</span>
                </div>
                <div className="section-content">
                  <p className="intro-text">
                    The district started functioning with effect from 6th June, 2004 with its head quarter at Kajalgaon.This district is having one civil sub-division with its head quarter at Bijni and one sub-tahsil-division with its head quarter at Kajalgaon.The Chirang district possesses a plain topography. It also has undulating areas and the northern parts of the district lie on the foothills of Bhutan that has slightly higher elevation, which is decreasing towards the southern parts of the district. The final types of soil found here are entisols, inceptisols, alfisols and ultisols. The district comes under Heem Brahamaputra valley. The region is tropical in nature with warm and humid summer followed by dry and cool winter. The pre and post monsoon months are unpredictable and experience erratic rainfall. Champamati, Aie and Manas rivers flow through this district and join the Brahmaputra river. Many other tributaries, small rivulets and streams flow through this district. US Embassy.
                  </p>
                </div>
              </section>

              {/* Administrative Setup */}
              <section className="content-section">
                <h2 className="section-title">Administrative Setup</h2>
                <div className="data-table">
                  {administrativeData.map((row, index) => (
                    <div key={index} className="table-row">
                      <div className="table-cell">
                        <span className="cell-label">{row.label}</span>
                        <span className="cell-value">{row.value}</span>
                      </div>
                      {row.label2 && (
                        <div className="table-cell">
                          <span className="cell-label">{row.label2}</span>
                          <span className="cell-value">{row.value2}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Political Setup */}
              <section className="content-section">
                <h2 className="section-title">Political Setup</h2>
                <div className="data-table single-column">
                  {politicalSetup.map((row, index) => (
                    <div key={index} className="table-row single">
                      <div className="table-cell">
                        <span className="cell-label">{row.label}</span>
                        <span className="cell-value">{row.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Health Setup */}
              <section className="content-section">
                <h2 className="section-title">Health Setup</h2>
                <div className="data-table">
                  {healthSetup.map((row, index) => (
                    <div key={index} className="table-row">
                      <div className="table-cell">
                        <span className="cell-label">{row.label}</span>
                        <span className="cell-value">{row.value}</span>
                      </div>
                      {row.label2 && (
                        <div className="table-cell">
                          <span className="cell-label">{row.label2}</span>
                          <span className="cell-value">{row.value2}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Educational Setup */}
              <section className="content-section">
                <h2 className="section-title">Educational Setup</h2>
                <div className="data-table">
                  {educationalSetup.map((row, index) => (
                    <div key={index} className="table-row">
                      <div className="table-cell">
                        <span className="cell-label">{row.label}</span>
                        <span className="cell-value">{row.value}</span>
                      </div>
                      {row.label2 && (
                        <div className="table-cell">
                          <span className="cell-label">{row.label2}</span>
                          <span className="cell-value">{row.value2}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Census Data */}
              <section className="content-section">
                <h2 className="section-title">(As per census 2011)</h2>
                <div className="data-table">
                  {censusData.map((row, index) => (
                    <div key={index} className="table-row">
                      <div className="table-cell">
                        <span className="cell-label">{row.label}</span>
                        <span className="cell-value">{row.value}</span>
                      </div>
                      {row.label2 && (
                        <div className="table-cell">
                          <span className="cell-label">{row.label2}</span>
                          <span className="cell-value">{row.value2}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DistrictProfile;