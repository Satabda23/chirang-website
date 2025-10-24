import { MapPin, Users, Layers, Building2, Map, DollarSign, Zap, Home, BookOpen } from 'lucide-react';
import './AtGlance.css';

const AtGlance = () => {
  const districtStats = [
    { icon: MapPin, label: 'Division', value: 'Lower Assam', color: '#ef4444' },
    { icon: Building2, label: 'Headquarter', value: 'Kajalgaon, Chirang', color: '#f59e0b' },
    { icon: Layers, label: 'Sub-Divisions', value: '2', color: '#10b981' },
    { icon: DollarSign, label: 'Revenue Circles', value: '3', color: '#3b82f6' },
    { icon: Building2, label: 'Development Blocks', value: '3', color: '#8b5cf6' },
    { icon: Map, label: 'Geographical Area', value: '1468.42 sq. km', color: '#ec4899' },
    { icon: Users, label: 'Population', value: '482,162', color: '#06b6d4' },
    { icon: BookOpen, label: 'Literacy', value: '63.55%', color: '#14b8a6' },
    { icon: Home, label: 'Revenue Villages', value: '479', color: '#f97316' },
    { icon: Zap, label: 'Panchayats/VCDC', value: '74', color: '#6366f1' },
  ];

  const infoCards = [
    {
      title: 'Accommodation',
      description: 'You can get detailed information about the private and government hotels of this district of Assam and various facilities like location, address and contact details are provided.',
      buttonText: 'EXPLORE',
      buttonLink: '/accommodation'
    },
    {
      title: 'Culinary Delights',
      description: 'Know more about culinary delicacies which are unique to this area.',
      buttonText: 'EXPLORE',
      buttonLink: '/culinary-delights'
    },
    {
      title: 'Public Utility',
      description: 'Get all information about public utilities.',
      buttonText: 'EXPLORE',
      buttonLink: '/public-utility'
    },
    {
      title: 'Local Produce',
      description: 'Information about locally produced handicrafts and handlooms and where these are available.',
      buttonText: 'EXPLORE',
      buttonLink: '/local-produce'
    }
  ];

  return (
    <div className="at-glance-page">
      {/* Breadcrumb */}
      <div className="breadcrumb-section">
        <div className="container">
          <nav className="breadcrumb">
            <a href="/">Home</a>
            <span className="separator">›</span>
            <span className="current">District at a glance</span>
          </nav>
        </div>
      </div>

      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">District at a Glance</h1>
        </div>
      </div>

      <div className="container">
        <div className="at-glance-content">
          {/* Left Sidebar - District Statistics */}
          <aside className="stats-sidebar">
            <div className="stats-card">
              {districtStats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-icon-wrapper" style={{ backgroundColor: `${stat.color}15` }}>
                    <stat.icon className="stat-icon" style={{ color: stat.color }} />
                  </div>
                  <div className="stat-details">
                    <p className="stat-label">{stat.label}:</p>
                    <p className="stat-value">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="main-content-area">
            {/* Info Cards Grid */}
            <div className="info-cards-grid">
              {infoCards.map((card, index) => (
                <div key={index} className="info-card">
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-description">{card.description}</p>
                  <a href={card.buttonLink} className="explore-btn">
                    {card.buttonText}
                  </a>
                </div>
              ))}
            </div>

            {/* Overview Section */}
            <section className="content-section">
              <h2 className="section-title">Overview</h2>
              <p className="section-text">
                The district started functioning with effect from 6th June, 2004 with its head quarter at Kajalgaon. This district is having one civil sub-division with its head quarter at Bijni and one sub-tah-sil-division with its head quarter at Kajalgaon. The Chirang district possesses a plain topography. It also has undulating areas and the northern parts of the district lie on the foothills of Bhutan that has slightly higher elevation, which is decreasing towards the southern parts of the district.
              </p>
              <p className="section-text">
                The final hydro of soil found here are entisols, inceptisols, alfisols and ultisols. The district comes under Heem temperate to per-humid climate with 2500 mm of rainfall per year. The climate of Chirang has normally been pleasant, dry and cool winter. The pre and post monsoon months are unpredictable and experience erratic rainfall. Champamati, Aie and Manas rivers flow through this district and join the Brahmaputra river. Many other tributaries, small rivulets and streams flow through this district.
              </p>
            </section>

            {/* Why Visit District Section */}
            <section className="content-section">
              <h2 className="section-title">Why visit District?</h2>
              <ul className="feature-list">
                <li>It is well Connected by National Highways</li>
                <li>Chirang district shared its boundary with Bhutan International border and suitable for tourism.</li>
                <li>Chirang District having one of the important Oil Refinery of India</li>
              </ul>
            </section>

            {/* Best Time to Visit */}
            <section className="content-section">
              <h2 className="section-title">Best Time to Visit</h2>
              <p className="section-text">
                Chirang is situated in the state of Assam and it has a subtropical climate condition. Therefore, in summer it becomes hot, but in winter it is quite suitable to visit to explore here.
              </p>
            </section>

            {/* How to Reach */}
            <section className="content-section">
              <h2 className="section-title">How to reach</h2>
              
              <div className="reach-method">
                <h3 className="method-title">By Road:</h3>
                <p className="section-text">
                  Kajalgaon, the head quarter of Chirang district, through which National Highway 31C passes. So, buses are available and easily reachable to go to Guwahati-Cooch Bihar and Bongaigaon. Chapaguri is the main point to catch all the private and public vehicles.
                </p>
                <ul className="route-list">
                  <li>—National Highway No. 31A via Rangia- Chapaguri- Ghantali</li>
                  <li>—Distance from to Guwahati to Kajalgaon: 184 KMS approx</li>
                  <li>—Distance from to Cooch Bihar to Kajalgaon: 116 KMS approx</li>
                </ul>
              </div>

              <div className="reach-method">
                <h3 className="method-title">By Train:</h3>
                <p className="section-text">
                  Two Railway stations where various local and express trains stop:
                </p>
                <ul className="route-list">
                  <li>—Kajalgaon Railway Station</li>
                  <li>—Bijni Railway Station</li>
                </ul>
              </div>

              <div className="reach-method">
                <h3 className="method-title">By Air:</h3>
                <p className="section-text">
                  The international airport LGB is around 193 km away from the district Head Quaters and the nearest one is Rupsi Airport which is around 102 km away.VIP helicopters land in the BGN field of Chirang.
                </p>
              </div>
            </section>

            {/* Weather Section */}
            <section className="content-section">
              <h2 className="section-title">Weather</h2>
              <div className="weather-info">
                <div className="weather-item">
                  <strong>Summer:</strong> April - July (Max: 42°C; Min: 28°C)
                </div>
                <div className="weather-item">
                  <strong>Monsoon:</strong> August - October (Max: 35°C; Min: 25°C)
                </div>
                <div className="weather-item">
                  <strong>Winter:</strong> November - March (Max: 25°C; Min: 11°C)
                </div>
              </div>
            </section>

            {/* Natural Tourism */}
            <section className="content-section">
              <h2 className="section-title">Natural Tourism</h2>
              <p className="section-text">
                <strong>Kalamati</strong> is the black soil, which is silky. Kalamati is approachable from Chapaguri. NH-31C which is roughly 25 km towards north - near Kahimenia, Assam-Kalamati is beautiful tourist spot surrounded by hills and attached to Bhutan international border. The best time to visit Kalamati is in the winter and dry season from October to April. The summer season particularly monsoon period may be avoided as it is difficult to trek the hill.
              </p>
              <p className="section-text">
                <strong>Gelephu</strong>, India - Bhutan crossing at Gelephu is important tourist place. Roughly 41 km from Kajalgaon, the hqtr of Chirang, 50 km from Bongaigaon. And in addition about around 60 km from barpeta road city, the city, which is used for shopping and local news between Bhutan and India. Tourist from other parts of India touring this beautiful place. Tuen foreign tourist also comes in this beautiful place and there are other available facilities to visit. It from October to April. Photoshurling is a much more popular land border crossing between India and Bhutan, and is more commonly seen on tour itineraries.
              </p>
              <p className="section-text">
                The <strong>Bhuban Eco-Tourism</strong> located at Sada, Moza of Manjisha touching the Bhuban Border under Chirang District. BTR, Assam 783393 is a beautiful place to visit and people throng here for picnic and enjoy in natural beautifull river with cold and clean water. People visit the place specially in winter season.
              </p>
            </section>

            {/* History Section */}
            <section className="content-section">
              <h2 className="section-title">History</h2>
              <p className="section-text">
                The word "Chirang" has been derived from gairo word "chi" means water and "rdng" means wealth. Chirang district is one of the four districts of Bodoland Territorial area district under the govt. of assam, created vide notification No Gag Dis. 13/ 2002/ pt. 117 dtd. 30/10/2003 within assam under clause 2 of article 332 by the 90th amendment act, 2003 of the constitution of India under the provision of the sixth schedule. The district has been functioning with effect from 06th june, 2004. It was carved out of the districts of kokrajhar, bongaigaon and barpeta. Kajalgaon is the district headquarter.
              </p>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AtGlance;