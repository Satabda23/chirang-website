import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import {Link} from 'react-router-dom';
import './PrevDc.css';

const PreviousCommissioners = () => {
  const [activeTab, setActiveTab] = useState('previous-commissioners');

  const sidebarLinks = [
    { id: 'district-profile', label: 'District Profile', path: '/about/district-profile' },
    { id: 'previous-commissioners', label: 'Previous District Commissioners', path: '/about/previous-commissioners', isActive: true },
    { id: 'history', label: 'History', path: '/about/history' },
    { id: 'about-district', label: 'About District', path: '/about/about-district' }
  ];

  const commissioners = [
    { slNo: 1, name: 'Shri Jiten Borgoyari, ACS', from: '4-June-2004', to: '10-February-2006' },
    { slNo: 2, name: 'Shri Subhas Ch. Longmalia, IAS', from: '10-February-2006', to: '5-November-2007' },
    { slNo: 3, name: 'Shri P. P. Baroosh, ACS', from: '6-November-2007', to: '26-February-2009' },
    { slNo: 4, name: 'Shri P Bora, ACS', from: '26-February-2009', to: '8-July-2009' },
    { slNo: 5, name: 'Dr. U. N. Bora, IAS', from: '8-July-2009', to: '30-July-2012' },
    { slNo: 6, name: 'Shri Puru Gupta, IAS', from: '30-July-2012', to: '28-June-2013' },
    { slNo: 7, name: 'Shri Virendra Mittal, IAS', from: '28-June-2013', to: '23-November-2014' },
    { slNo: 8, name: 'Shri Rupak Kr. Mazumder, IAS', from: '25-December-2014', to: '2-September-2016' },
    { slNo: 9, name: 'Shri Binod Kumar Deka, ACS', from: '2-September-2016', to: '16-September-2017' },
    { slNo: 10, name: 'Shri Ratul Baruah, ACS', from: '17-September-2017', to: '22-November-2018' },
    { slNo: 11, name: 'Shri Gautam Talukdar, ACS', from: '22-November-2018', to: '21-May-2021' },
    { slNo: 12, name: 'Shri Narendra Kumar Sah, IAS', from: '21-May-2021', to: '16-July-2022' },
    { slNo: 13, name: 'Shri P Vijaya Bhaskar Reddy, IAS', from: '16-July-2022', to: '4-October-2024' }
  ];

  return (
    <div className="previous-commissioners-page">
      {/* Breadcrumb */}
      <div className="breadcrumb-section">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="separator">›</span>
            <Link to="/about">About Us</Link>
            <span className="separator">›</span>
            <span className="current">Previous District Commissioners</span>
          </nav>
        </div>
      </div>

      <div className="container">
        <div className="commissioners-layout">
          {/* Left Sidebar */}
          <aside className="commissioners-sidebar">
            <nav className="sidebar-menu">
              {sidebarLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.path}
                  className={`sidebar-link ${activeTab === link.id ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab(link.id);
                  }}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="arrow-icon" />
                </Link>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="commissioners-main">
            <div className="commissioners-card">
              {/* Page Header */}
              <div className="commissioners-header">
                <h1 className="commissioners-title">Previous District Commissioners</h1>
                <span className="last-updated">Last Updated on: October 05, 2024</span>
              </div>

              {/* Table Content */}
              <div className="table-container">
                <table className="commissioners-table">
                  <thead>
                    <tr>
                      <th className="th-slno">Sl No.</th>
                      <th className="th-name">Name of District Commissioner's</th>
                      <th className="th-date">From</th>
                      <th className="th-date">To</th>
                    </tr>
                  </thead>
                  <tbody>
                    {commissioners.map((commissioner) => (
                      <tr key={commissioner.slNo}>
                        <td className="td-slno">{commissioner.slNo}</td>
                        <td className="td-name">{commissioner.name}</td>
                        <td className="td-date">{commissioner.from}</td>
                        <td className="td-date">{commissioner.to}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PreviousCommissioners;