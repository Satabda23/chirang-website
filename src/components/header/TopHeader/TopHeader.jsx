import { Facebook, Twitter, Youtube, Instagram } from 'lucide-react';
import './TopHeader.css';
const TopHeader = () => {
  const handleFontIncrease = () => {
    const currentSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    document.documentElement.style.fontSize = `${Math.min(currentSize + 1, 20)}px`;
  };

  const handleFontDecrease = () => {
    const currentSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    document.documentElement.style.fontSize = `${Math.max(currentSize - 1, 12)}px`;
  };

  const handleFontReset = () => {
    document.documentElement.style.fontSize = '16px';
  };

  return (
    <div className="top-header-bar">
      <div className="container">
        <div className="top-header-content">
          <div className="social-icons">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Facebook"
            >
              <Facebook className="icon" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Twitter"
            >
              <Twitter className="icon" />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="YouTube"
            >
              <Youtube className="icon" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Instagram"
            >
              <Instagram className="icon" />
            </a>
          </div>

          <div className="accessibility-options">
            <div className="language-selector">
              <span className="label">Language:</span>
              <select 
                className="language-dropdown"
                aria-label="Select Language"
              >
                <option value="en">English</option>
                <option value="as">অসমীয়া</option>
                <option value="hi">हिन्दी</option>
              </select>
            </div>

            <span className="divider">|</span>

            <div className="font-controls">
              <button
                onClick={handleFontIncrease}
                className="font-btn"
                aria-label="Increase font size"
                title="Increase font size"
              >
                A+
              </button>
              <button
                onClick={handleFontReset}
                className="font-btn"
                aria-label="Reset font size"
                title="Reset font size"
              >
                A
              </button>
              <button
                onClick={handleFontDecrease}
                className="font-btn"
                aria-label="Decrease font size"
                title="Decrease font size"
              >
                A-
              </button>
            </div>

            <span className="divider">|</span>

            <button 
              className="accessibility-link"
              aria-label="Screen Reader Access"
            >
              Screen Reader
            </button>

            <span className="divider">|</span>

            <a 
              href="#main-content" 
              className="accessibility-link"
            >
              Skip to Content
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;