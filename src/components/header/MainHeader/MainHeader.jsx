// src/components/header/MainHeader/MainHeader.jsx
import { useState } from 'react';
import { Menu, X, ChevronDown, ChevronRight, Search } from 'lucide-react';
import './MainHeader.css';

const MainHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const navigationItems = [
    { name: 'HOME', path: '/' },
    {
      name: 'ABOUT',
      hasDropdown: true,
      dropdownItems: [
        { name: 'At a Glance', path: '/about/at-a-glance' },
        { name: 'About District', path: '/about/about-district' },
        { name: 'District Profile', path: '/about/district-profile' },
        { name: 'History', path: '/about/history' },
        { name: 'Previous District Commissioners', path: '/about/previous-commissioners' },
      ]
    },
    {
      name: 'DEPARTMENTS',
      hasDropdown: true,
      hasMultiLevel: true,
      dropdownItems: [
        {
          name: 'Agriculture',
          hasSubDropdown: true,
          subItems: [
            { name: 'PM Kishan', path: '/departments/agriculture/pm-kishan' },
            { name: 'Soil Health Card', path: '/departments/agriculture/soil-health' },
            { name: 'Crop Insurance', path: '/departments/agriculture/crop-insurance' },
            { name: 'Irrigation Schemes', path: '/departments/agriculture/irrigation' }
          ]
        },
        { name: 'Animal Husbandry and Veterinary', path: '/departments/animal-husbandry' },
        { name: 'District Disaster Management Authority', path: '/departments/ddma' },
        { name: 'Economics and Statistics', path: '/departments/economics' },
        {
          name: 'Education',
          hasSubDropdown: true,
          subItems: [
            { name: 'Primary Education', path: '/departments/education/primary' },
            { name: 'Secondary Education', path: '/departments/education/secondary' },
            { name: 'Higher Education', path: '/departments/education/higher' },
            { name: 'Adult Education', path: '/departments/education/adult' }
          ]
        },
        {
          name: 'Election',
          hasSubDropdown: true,
          subItems: [
            { name: 'Lok Sabha Election 2024', path: '/departments/election/lok-sabha-2024' },
            { name: '19-Sidli (ST) LAC', path: '/departments/election/sidli' },
            { name: '20-Bijni LAC', path: '/departments/election/bijni' },
            { name: 'Bye Election 2024', path: '/departments/election/bye-2024' }
          ]
        },
        { name: 'Fishery', path: '/departments/fishery' },
        { name: 'Food, Civil Supplies and Consumer Affairs', path: '/departments/food-civil' },
        { name: 'Forest', path: '/departments/forest' },
        { name: 'Handloom and Textile', path: '/departments/handloom' },
        { name: 'Health and Family Welfare', path: '/departments/health' },
        { name: 'Industry', path: '/departments/industry' },
        { name: 'Irrigation', path: '/departments/irrigation' },
        { name: 'Labour & Employment', path: '/departments/labour' },
        { name: 'Panchayat and Rural Development', path: '/departments/panchayat' },
        { name: 'Sericulture', path: '/departments/sericulture' },
        { name: 'Soil Conservation', path: '/departments/soil-conservation' },
        { name: 'Sports and Youth Welfare', path: '/departments/sports' },
        { name: 'Town and Country Planning', path: '/departments/town-planning' },
        { name: 'Transport', path: '/departments/transport' },
        { name: 'Treasury', path: '/departments/treasury' },
        { name: 'Urban Development', path: '/departments/urban-development' },
        { name: 'Water Resource', path: '/departments/water-resource' },
        { name: 'Women and Child Development', path: '/departments/women-child' }
      ]
    },
    {
      name: 'INFORMATION & SERVICES',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Right to Public Services', path: '/services/rtps' },
        { name: 'e-District Portal', path: '/services/e-district' },
        { name: 'RTI Act', path: '/services/rti' },
        { name: 'Employment Registration', path: '/services/employment' },
        { name: 'Health Services', path: '/services/health' },
        { name: 'Certificate Services', path: '/services/certificates' },
      ]
    },
    { name: 'SCHEMES', path: '/schemes' },
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
    { name: 'CONTACT US', path: '/contact-us' }
  ];

  const handleSearch = () => {
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const handleMouseEnter = (itemName) => {
    setActiveDropdown(itemName);
    setActiveSubDropdown(null);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
    setActiveSubDropdown(null);
  };

  const handleSubDropdownEnter = (subItemName) => {
    setActiveSubDropdown(subItemName);
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
            <a href="/" className="brand-section">
              <div className="logo-wrapper">
                <img 
                  src="/logo.JPG" 
                  alt="Chirang District Logo" 
                  className="logo"
                />
              </div>
              <div className="brand-text">
                <span className="brand-subtitle">GOVERNMENT OF ASSAM</span>
                <h1 className="brand-title">Chirang District</h1>
              </div>
            </a>

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
                  onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.hasDropdown ? (
                    <>
                      <button className="nav-link nav-dropdown-btn">
                        {item.name}
                        <ChevronDown className="dropdown-icon" />
                      </button>
                      
                      {/* Dropdown Menu */}
                      {activeDropdown === item.name && (
                        <div className={`dropdown-menu ${item.hasMultiLevel ? 'multi-level' : ''}`}>
                          {item.dropdownItems.map((dropdownItem, dropIndex) => (
                            <div key={dropIndex} className="dropdown-item-wrapper">
                              {dropdownItem.hasSubDropdown ? (
                                <div
                                  className="dropdown-item has-sub"
                                  onMouseEnter={() => handleSubDropdownEnter(dropdownItem.name)}
                                >
                                  <span>{dropdownItem.name}</span>
                                  <ChevronRight className="sub-arrow" />
                                  
                                  {/* Sub-Dropdown Menu */}
                                  {activeSubDropdown === dropdownItem.name && (
                                    <div className="sub-dropdown">
                                      {dropdownItem.subItems.map((subItem, subIndex) => (
                                        <a
                                          key={subIndex}
                                          href={subItem.path}
                                          className="sub-dropdown-item"
                                        >
                                          {subItem.name}
                                        </a>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ) : (
                                <a
                                  href={dropdownItem.path}
                                  className="dropdown-item"
                                >
                                  {dropdownItem.name}
                                </a>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a href={item.path} className="nav-link">
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </nav>

            {/* Search Bar */}
            <div className="search-section">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                placeholder="Search..."
                className="search-input"
              />
              <button onClick={handleSearch} className="search-btn">
                SEARCH
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="mobile-nav">
              <div className="mobile-search">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="mobile-search-input"
                />
                <button onClick={handleSearch} className="mobile-search-btn">
                  <Search className="search-icon" />
                </button>
              </div>

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
                            <a
                              key={dropIndex}
                              href={dropdownItem.path || '#'}
                              className="mobile-dropdown-item"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {dropdownItem.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.path}
                      className="mobile-nav-link"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
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