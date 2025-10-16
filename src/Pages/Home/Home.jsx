// src/pages/Home.jsx

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Users, 
  Building2, 
  Layers, 
  Map, 
  BookOpen, 
  GraduationCap,
  Phone, 
  FileText, 
  ExternalLink,
   Calendar, 
   ArrowRight, 
   ChevronLeft, 
   ChevronRight
} from 'lucide-react';
import chirang1 from '../../Assets/images/carousel/chirang1.png';
// import chirang2 from '../../Assets/images/carousel/chirang2.png';
// import chirang3 from '../../Assets/images/carousel/chirang3.png';
import './Home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero Banner Slides
  const heroSlides = [
    {
      image: chirang1,
      // title: 'Welcome to Chirang District',
      // subtitle: 'Gateway to Progress and Development'
    },
    {
      // image: 'chirang2',
      title: 'Building a Better Tomorrow',
      subtitle: 'Government of Assam'
    },
    {
      // image: 'chirang3',
      title: 'India-Bhutan International Border',
      subtitle: 'Gelephu Border Crossing'
    }
  ];

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  // Latest News/Updates
  const latestUpdates = [
    'A one-day district-level workshop on Good Governance was held on 23 December 2024',
    'Inauguration of District Jail at Chirang by Hon\'ble Chief Minister',
    'Celebration of the 19th International Day of Yoga at Chirang',
    'Online application for various certificates now available through e-District portal',
    'New tender notice for construction of district road infrastructure'
  ];

  // District Statistics
  const districtStats = [
    { icon: MapPin, label: 'Headquarter', value: 'Lower Assam' },
    { icon: Building2, label: 'Sub-Division', value: '1 (Saguri, Chirang)' },
    { icon: Layers, label: 'Revenue Circle', value: '1' },
    { icon: Users, label: 'Development Blocks', value: '2' },
    { icon: Map, label: 'Geographical Area', value: '1988.42 sq. km' },
    { icon: Users, label: 'Population', value: '482,162' },
    { icon: BookOpen, label: 'Literacy', value: '64.53%' },
    { icon: Building2, label: 'Revenue Villages', value: '479' }
  ];

  // District Highlights
  const highlights = [
    {
      title: 'Visiting in Chirang',
      description: 'Draft Your List for the Visitors and Guests',
      color: 'purple',
      icon: '🏛️'
    },
    {
      title: 'Irrigational Land Records of BTC',
      description: 'Access land records online',
      color: 'green',
      icon: '🗺️'
    },
    {
      title: 'Recruitment',
      description: 'Latest job openings and notifications',
      color: 'blue',
      icon: '🔍'
    },
    {
      title: 'Chirangspl. Irrigation Project',
      description: 'Development of irrigation infrastructure',
      color: 'teal',
      icon: '💧'
    }
  ];

  // Online Services
  const onlineServices = [
    {
      title: 'Employment Registration',
      icon: '👥',
      link: '/services/employment-registration'
    },
    {
      title: 'Last of Caring Bureau',
      icon: '📋',
      link: '/services/caring-bureau'
    },
    {
      title: 'Assam Right to Public Service',
      icon: '⚖️',
      link: '/services/right-to-public-services'
    },
    {
      title: 'Mission Bhumiputra',
      icon: '🏠',
      link: '/services/mission-bhumiputra'
    }
  ];

  // Helplines
  const helplines = [
    { name: 'Child Helpline', number: '1098' },
    { name: 'Fire Emergency', number: '101' },
    { name: 'Medical', number: '108' },
    { name: 'Disaster Mgmt No', number: '9435103924' },
    { name: 'Disaster Mgmt 02', number: '03664-242874' },
    { name: 'Women\'s Helpline', number: '181' },
    { name: 'Fire Station', number: '772655' },
    { name: 'All India Railway', number: '1512' }
  ];

  // Important Links
  const importantLinks = [
    { name: 'NaMo', icon: '📱' },
    { name: 'Photo Gallery', icon: '📸' },
    { name: 'Video Gallery', icon: '🎥' },
    { name: 'Press Release', icon: '📰' },
    { name: 'Events', icon: '📅', badge: 'NEW' },
    { name: 'Lateral', icon: '↗️' }
  ];

  // Recent Events
  const recentEvents = [
    {
      // image: '/images/events/event1.jpg',
      title: 'Inauguration of District Jail at Chirang by Hon\'ble Chief Minister',
      date: '23 Jun 2023',
      category: 'Govt Visit, Admin, Chirang',
      description: 'The District Jail was inaugurated by Hon\'ble CM Dr. Himanta Biswa Sarma...'
    },
    {
      // image: '/images/events/event2.jpg',
      title: 'Celebration of the 19th International Day of Yoga',
      date: '21 Jun 2023',
      category: 'Chirang District, District, Admin',
      description: 'On 21st of June on the international celebrations the list displaying...'
    },
    {
      // image: '/images/events/event3.jpg',
      title: 'Opening Ceremony the Kalgaon Bidkini Pushak',
      date: '18 Jun 2023',
      category: 'Chirang, District, District, Admin',
      description: 'A new initiative to promote the qualities and glory of the project here...'
    }
  ];

  return (
    <div className="homepage">
      {/* Hero Banner / Carousel */}
      <section className="hero-section">
        <div className="hero-carousel">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="hero-overlay">
                <div className="container">
                  <div className="hero-content">
                    <h1 className="hero-title">{slide.title}</h1>
                    <p className="hero-subtitle">{slide.subtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Navigation Arrows */}
          <button className="hero-arrow hero-arrow-left" onClick={prevSlide}>
            <ChevronLeft />
          </button>
          <button className="hero-arrow hero-arrow-right" onClick={nextSlide}>
            <ChevronRight />
          </button>
          
          {/* Dots Navigation */}
          <div className="hero-dots">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Updates Ticker */}
      <section className="latest-updates-section">
        <div className="latest-updates-ticker">
          <div className="latest-label">LATEST</div>
          <div className="ticker-content">
            <div className="ticker-wrapper">
              {latestUpdates.map((update, index) => (
                <span key={index} className="ticker-item">
                  🔴 {update}
                </span>
              ))}
              {/* Duplicate for seamless loop */}
              {latestUpdates.map((update, index) => (
                <span key={`dup-${index}`} className="ticker-item">
                  🔴 {update}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Three Column Section - District Info */}
      <section className="district-info-section">
        <div className="container">
          <div className="three-column-grid">
            {/* Column 1 - District at a Glance */}
            <div className="info-card">
              <h2 className="card-title">District at a Glance</h2>
              <div className="stats-list">
                {districtStats.map((stat, index) => (
                  <div key={index} className="stat-item">
                    <stat.icon className="stat-icon" />
                    <div className="stat-content">
                      <span className="stat-label">{stat.label}:</span>
                      <span className="stat-value">{stat.value}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/about/at-a-glance" className="read-more-link">
                Read More <ArrowRight className="arrow-icon" />
              </Link>
            </div>

            {/* Column 2 - District Highlights */}
            <div className="info-card">
              <h2 className="card-title">District Highlights</h2>
              <div className="highlights-grid">
                {highlights.map((highlight, index) => (
                  <div key={index} className={`highlight-card highlight-${highlight.color}`}>
                    <div className="highlight-icon">{highlight.icon}</div>
                    <h3 className="highlight-title">{highlight.title}</h3>
                    <p className="highlight-desc">{highlight.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3 - District Commissioner */}
            <div className="info-card">
              <h2 className="card-title">District Commissioner</h2>
              <div className="dc-card">
                <img 
                  // src="/images/officials/dc.jpg" 
                  alt="District Commissioner"
                  className="dc-photo"
                />
                <h3 className="dc-name">Shri Uday Rao, ACS</h3>
                <p className="dc-designation">District Commissioner</p>
                <div className="dc-social">
                  <a href="#" className="social-icon">📘</a>
                  <a href="#" className="social-icon">🐦</a>
                  <a href="#" className="social-icon">💼</a>
                  <a href="#" className="social-icon">📷</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="three-column-grid">
            {/* Online Services */}
            <div className="service-card">
              <h2 className="section-title">Online Services</h2>
              <div className="services-grid">
                {onlineServices.map((service, index) => (
                  <Link key={index} to={service.link} className="service-item">
                    <div className="service-icon">{service.icon}</div>
                    <p className="service-name">{service.title}</p>
                  </Link>
                ))}
              </div>
              <Link to="/services" className="view-all-link">
                View all Services <ArrowRight className="arrow-icon" />
              </Link>
            </div>

            {/* Helplines */}
            <div className="service-card">
              <h2 className="section-title">Helplines</h2>
              <div className="helplines-list">
                {helplines.map((helpline, index) => (
                  <div key={index} className="helpline-item">
                    <Phone className="helpline-icon" />
                    <span className="helpline-name">{helpline.name}:</span>
                    <span className="helpline-number">{helpline.number}</span>
                  </div>
                ))}
              </div>
              <Link to="/helplines" className="view-all-link">
                View all Helpline Numbers <ArrowRight className="arrow-icon" />
              </Link>
            </div>

            {/* Important Links */}
            <div className="service-card">
              <h2 className="section-title">Important Links</h2>
              <div className="links-list">
                {importantLinks.map((link, index) => (
                  <Link key={index} to="#" className="important-link-item">
                    <span className="link-icon">{link.icon}</span>
                    <span className="link-name">{link.name}</span>
                    {link.badge && <span className="link-badge">{link.badge}</span>}
                    <ExternalLink className="external-icon" />
                  </Link>
                ))}
              </div>
              <Link to="/links" className="view-all-link">
                View all Important Links <ArrowRight className="arrow-icon" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Chirang Banner */}
      <section className="visit-banner">
        <div className="visit-badge">Visit Chirang</div>
      </section>

      {/* Places of Interest */}
      <section className="places-section">
        <div className="container">
          <div className="two-column-grid">
            {/* Left - Places of Interest */}
            <div className="places-card">
              <h2 className="section-title">Places of Interest</h2>
              <div className="places-images">
                <img src="/images/places/gelephu1.jpg" alt="Gelephu Border" />
                <img src="/images/places/gelephu2.jpg" alt="Temple" />
              </div>
              <h3 className="place-name">Gelephu, India- Bhutan International Border</h3>
              <p className="place-description">
                Gelephu, India- Bhutan crossing at Gelephu is important tourist place. 
                Roughly 41 km from Kajalgaon, the hqtr of Chirang, 50 km from Bongaigaon, and...
              </p>
              <Link to="/tourism/gelephu" className="read-more-link">
                Read more <ArrowRight className="arrow-icon" />
              </Link>
            </div>

            {/* Right - You May Also Like */}
            <div className="also-like-card">
              <h2 className="section-title">You may also like to view</h2>
              <ul className="also-like-list">
                <li>✓ Sideshil</li>
                <li>✓ Manas Bird Sanctuary & Low Tourism</li>
                <li>✓ Panbari</li>
                <li>✓ Rte Area (Chirang-Hentol)</li>
                <li>✓ Bye Sarali</li>
                <li>✓ Moti Market</li>
              </ul>
              <Link to="/tourism" className="view-all-link">
                View all Tourist Places <ArrowRight className="arrow-icon" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="events-section">
        <div className="container">
          <h2 className="section-title-center">Events</h2>
          <div className="events-grid">
            {recentEvents.map((event, index) => (
              <div key={index} className="event-card">
                <img src={event.image} alt={event.title} className="event-image" />
                <div className="event-content">
                  <h3 className="event-title">{event.title}</h3>
                  <div className="event-meta">
                    <span className="event-date">
                      <Calendar className="meta-icon" /> {event.date}
                    </span>
                    <span className="event-category">{event.category}</span>
                  </div>
                  <p className="event-description">{event.description}</p>
                  <Link to="#" className="event-btn">Read more →</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="view-all-center">
            <Link to="/events" className="view-all-btn">View all events</Link>
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="partners-section">
        <div className="container">
          <div className="partners-logos">
            <img src="/images/logos/digital-india.png" alt="Digital India" />
            <img src="/images/logos/csc.png" alt="CSC" />
            <img src="/images/logos/assam-barta.png" alt="Assam Barta" />
            <img src="/images/logos/india-gov.png" alt="India.gov.in" />
            <img src="/images/logos/emblem.png" alt="Government Emblem" />
            <img src="/images/logos/darpan.png" alt="Darpan" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;