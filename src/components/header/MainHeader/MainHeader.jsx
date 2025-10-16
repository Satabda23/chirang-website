// src/components/header/MainHeader.jsx
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import './MainHeader.css';

const MainHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const navigationItems = [
    { 
      name: 'HOME', 
      path: '/' 
    },
    {
      name: 'ABOUT',
      hasDropdown: true,
      dropdownItems: [
        { name: 'At a Glance', path: '/about/at-a-glance' },
        { name: 'About District', path: '/about/about-district' },
        { name: 'District Profile', path: '/about/district-profile' },
        { name: 'History', path: '/about/history' },
        { name: 'Previous District Commissioners', path: '/about/previous-dcs' },
      ]
    },
    {
      name: 'ADMINISTRATION',
      hasDropdown: true,
      dropdownItems: [
        { name: 'District Commissioner', path: '/administration/dc' },
        { name: 'Additional Deputy Commissioner', path: '/administration/adc' },
        { name: 'Sub-Divisional Officers', path: '/administration/sdo' },
        { name: 'Circle Officers', path: '/administration/circle-officers' },
        { name: 'Organization Chart', path: '/administration/org-chart' },
      ]
    },
    {
      name: 'INFORMATION & SERVICES',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Right to Public Services', path: '/services/right-to-public-services' },
        { name: 'e-District', path: '/services/e-district' },
        { name: 'RTI Act', path: '/services/rti-act' },
        { name: 'Employment Registration', path: '/services/employment-registration' },
        { name: 'Health Services', path: '/services/health-services' },
        { name: 'Arms Licence', path: '/services/arms-licence' },
      ]
    },
    {
      name: 'SCHEMES',
      path: '/schemes'
    },
    {
      name: 'DOCUMENTS',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Acts & Rules', path: '/documents/acts-rules' },
        { name: 'Notifications', path: '/documents/notifications' },
        { name: 'Circulars', path: '/documents/circulars' },
        { name: 'Office Orders', path: '/documents/office-orders' },
        { name: 'Tenders', path: '/documents/tenders' },
        { name: 'Forms', path: '/documents/forms' },
      ]
    },
    {
      name: 'CONTACT US',
      path: '/contact-us'
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const toggleDropdown = (itemName) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <header className="main-header">
      {/* Logo and Brand Section */}
      <div className="header-top">
        <div className="container">
          <div className="header-top-content">
            {/* Logo Section */}
            <Link to="/" className="brand-section">
              {/* Government Logo */}
              <div className="logo-wrapper">
                <img 
                  src="/logo.JPG" 
                  alt="Government of Assam Logo" 
                  className="logo"
                />
              </div>
              
              {/* Text Content */}
              {/* <div className="brand-text">
                <span className="brand-subtitle">
                  GOVERNMENT OF ASSAM
                </span>
                <h1 className="brand-title">
                  Chirang District
                </h1>
              </div> */}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="mobile-menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="toggle-icon" /> : <Menu className="toggle-icon" />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="header-nav">
        <div className="container">
          <div className="nav-wrapper">
            {/* Desktop Navigation */}
            <nav className="desktop-nav">
              {navigationItems.map((item, index) => (
                <div
                  key={index}
                  className="nav-item"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.hasDropdown ? (
                    <>
                      <button className="nav-link nav-dropdown-btn">
                        {item.name}
                        <ChevronDown className="dropdown-icon" />
                      </button>
                      
                      {/* Dropdown Menu */}
                      {activeDropdown === item.name && (
                        <div className="dropdown-menu">
                          {item.dropdownItems.map((dropdownItem, dropIndex) => (
                            <Link
                              key={dropIndex}
                              to={dropdownItem.path}
                              className="dropdown-item"
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'
                      }
                    >
                      {item.name}
                    </NavLink>
                  )}
                </div>
              ))}
            </nav>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="search-form">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="search-input"
              />
              <button type="submit" className="search-btn">
                SEARCH
              </button>
            </form>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="mobile-nav">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="mobile-search">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="mobile-search-input"
                />
                <button type="submit" className="mobile-search-btn">
                  <Search className="search-icon" />
                </button>
              </form>

              {/* Mobile Menu Items */}
              {navigationItems.map((item, index) => (
                <div key={index} className="mobile-nav-item">
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="mobile-nav-link mobile-dropdown-btn"
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`mobile-dropdown-icon ${
                            activeDropdown === item.name ? 'rotated' : ''
                          }`}
                        />
                      </button>
                      
                      {activeDropdown === item.name && (
                        <div className="mobile-dropdown">
                          {item.dropdownItems.map((dropdownItem, dropIndex) => (
                            <Link
                              key={dropIndex}
                              to={dropdownItem.path}
                              className="mobile-dropdown-item"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <NavLink
                      to={item.path}
                      className="mobile-nav-link"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </NavLink>
                  )}
                </div>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default MainHeader;