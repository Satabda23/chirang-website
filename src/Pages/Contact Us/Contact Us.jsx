// src/Pages/Contact Us/Contact Us.jsx
import React, { useState } from 'react';
import './Contact Us.css';  // ✅ Same folder

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const contactDetails = [
    {
      id: 1,
      name: 'Shri Jatin Bora, ACS',
      designation: 'District Commissioner',
      office: 'Office of the District Commissioner, Kajalgaon, Chirang',
      phone: '03664-241992',
      email: 'dc-chirang@nic.in',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 2,
      name: 'WEBSITE INFORMATION MANAGER',
      designation: 'Additional District Commissioner',
      office: 'Office of Sub-Divisional Officer (Civil) Bijni, Chirang',
      phone: '+91-XXXXX-XXXXX',
      email: 'info@chirang.gov.in'
    },
    {
      id: 3,
      name: 'Arjit Mahajan, IAS',
      designation: 'Sub-Divisional Officer(Civil)',
      office: 'Office of Sub-Divisional officer (Civil) Bijni, Chirang',
      phone: '+91-XXXXX-XXXXX',
      email: ''
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main className="contact-us-container">
      <div className="breadcrumb">
        <a href="/">Home</a> / <span>Contact Us</span>
      </div>

      <h1>Contact Us</h1>

      <div className="contacts-grid">
        {contactDetails.map((contact) => (
          <div key={contact.id} className="contact-card">
            <h3>{contact.name}</h3>
            <p className="designation">{contact.designation}</p>
            <p className="office">{contact.office}</p>

            {contact.phone && (
              <div className="contact-info">
                <span>📞</span> 
                <a href={`tel:${contact.phone}`}>{contact.phone}</a>
              </div>
            )}

            {contact.email && (
              <div className="contact-info">
                <span>✉️</span> 
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </div>
            )}

            {contact.social && (
              <div className="social-links">
                <a href={contact.social.facebook} title="Facebook">f</a>
                <a href={contact.social.twitter} title="Twitter">𝕏</a>
                <a href={contact.social.instagram} title="Instagram">📷</a>
                <a href={contact.social.linkedin} title="LinkedIn">in</a>
              </div>
            )}
          </div>
        ))}
      </div>

      <section className="contact-form-section">
        <h2>Send us a Message</h2>
        {submitted && (
          <div className="success-message">
            ✓ Your message has been sent successfully!
          </div>
        )}

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              name="name"
              placeholder="Your Name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="form-group">
            <input 
              type="email" 
              name="email"
              placeholder="Your Email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="form-group">
            <input 
              type="text" 
              name="subject"
              placeholder="Subject" 
              value={formData.subject}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="form-group">
            <textarea 
              name="message"
              placeholder="Your Message" 
              rows="5" 
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            SEND MESSAGE
          </button>
        </form>
      </section>
    </main>
  );
}
