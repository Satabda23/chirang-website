import { Mail, Phone, Calendar, ExternalLink, ChevronRight } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const lastUpdated = "19-Oct-2025";

  const aboutGovernment = [
    { name: 'Assam State Portal', url: 'https://assam.gov.in' },
    { name: 'Raj Bhavan, Assam', url: 'https://rajbhavanassam.gov.in' },
    { name: 'Assam Legislative Assembly', url: 'https://assamassembly.gov.in' },
    { name: 'Gauhati High Court', url: 'https://ghconline.gov.in' },
    { name: 'CM Portal', url: 'https://cm.assam.gov.in' },
  ];

  const aboutWebsite = [
    { name: 'Sitemap', url: '/sitemap' },
    { name: 'Screen Reader', url: '/screen-reader' },
    { name: 'Feedback', url: '/feedback' },
    { name: 'Terms of Use', url: '/terms-of-use' },
    { name: 'Disclaimer', url: '/disclaimer' },
  ];

  const policies = [
    { name: 'Copyright Policy', url: '/copyright-policy' },
    { name: 'Hyperlinking Policy', url: '/hyperlinking-policy' },
    { name: 'Privacy Policy', url: '/privacy-policy' },
    { name: 'Accessibility Statement', url: '/accessibility-statement' },
    { name: 'Content Management', url: '/content-management' },
  ];

  const quickLinks = [
    { name: 'Home', url: '/' },
    { name: 'FAQs', url: '/faqs' },
    { name: 'Website Governance', url: '/website-governance' },
    { name: 'Website Information Manager', url: '/website-info-manager' },
    { name: 'Grievance Redressal', url: '/grievance-redressal' },
    { name: 'Contact Us', url: '/contact-us' },
  ];

  return (
    <footer className="footer">
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Get in Touch Section */}
            <div className="footer-section">
              <h3 className="footer-title">Get in Touch</h3>
              <div className="footer-content">
                <div className="contact-item">
                  <Phone className="contact-icon" />
                  <div>
                    <p className="contact-label">Office Phone</p>
                    <a href="tel:03664241992" className="contact-value">
                      03664-241992
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <Mail className="contact-icon" />
                  <div>
                    <p className="contact-label">Email Address</p>
                    <a href="mailto:dc-chirang@nic.in" className="contact-value">
                      dc-chirang@nic.in
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <Calendar className="contact-icon" />
                  <div>
                    <p className="contact-label">Last Updated</p>
                    <p className="contact-value">{lastUpdated}</p>
                  </div>
                </div>

                <div className="visitor-counter">
                  <div className="counter-icon">👥</div>
                  <div className="counter-details">
                    <p className="counter-label">Visitors</p>
                    <p className="counter-value">12,456</p>
                  </div>
                </div>
              </div>
            </div>

            {/* About the Government Section */}
            <div className="footer-section">
              <h3 className="footer-title">About the Government</h3>
              <ul className="footer-links">
                {aboutGovernment.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      <ChevronRight className="link-icon" />
                      <span>{link.name}</span>
                      <ExternalLink className="external-icon" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* About the Website Section */}
            <div className="footer-section">
              <h3 className="footer-title">About the Website</h3>
              <ul className="footer-links">
                {aboutWebsite.map((link, index) => (
                  <li key={index}>
                    <a href={link.url}>
                      <ChevronRight className="link-icon" />
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Policies Section */}
            <div className="footer-section">
              <h3 className="footer-title">Policies</h3>
              <ul className="footer-links">
                {policies.map((link, index) => (
                  <li key={index}>
                    <a href={link.url}>
                      <ChevronRight className="link-icon" />
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links Bar */}
      <div className="footer-quick-links">
        <div className="container">
          <div className="quick-links-content">
            {quickLinks.map((link, index) => (
              <span key={index}>
                <a href={link.url}>{link.name}</a>
                {index < quickLinks.length - 1 && <span className="separator">|</span>}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>© {currentYear} Chirang District. All Rights Reserved.</p>
              <p className="built-with">
                Built by{' '}
                <a 
                  href="https://in.linkedin.com/company/gratia-technology-pvt-ltd" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="eprastuti-link"
                >
                  Gratia Technologies
                </a>
              </p>
              
              <p className="govt-name">Government of Assam</p>
            </div>

            <div className="footer-badges">
              <img 
                src="/images/digital-india.png" 
                alt="Digital India" 
                className="badge-img"
              />
              <img 
                src="/images/india-gov.png" 
                alt="National Portal of India" 
                className="badge-img"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;