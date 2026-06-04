
import "../styles/Contact.css";

import React from "react";


const Contact = () => {
  return (
    <div className="contact-page">

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-content">
          <h1>Contact Us</h1>

          <p>
            Need assistance? Our fraud monitoring support team is ready to help.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-info">

        <div className="contact-card">
          <div className="contact-icon">📧</div>
          <h3>Email</h3>
          <p>fraudalert@gmail.com</p>
        </div>

        <div className="contact-card">
          <div className="contact-icon">📞</div>
          <h3>Phone</h3>
          <p>+91 9876543210</p>
        </div>

        <div className="contact-card">
          <div className="contact-icon">📍</div>
          <h3>Location</h3>
          <p>Hyderabad, India</p>
        </div>

      </section>

      {/* Statistics */}
      <section className="stats-section">

        <div className="section-title">
          <h2>Support Performance</h2>
          <p>
            Key metrics reflecting our fraud monitoring and customer support
            services.
          </p>
        </div>

        <div className="contact-stats">

          <div className="stat-box">
            <h2>24/7</h2>
            <p>Support Availability</p>
          </div>

          <div className="stat-box">
            <h2>500+</h2>
            <p>Alerts Processed Daily</p>
          </div>

          <div className="stat-box">
            <h2>99%</h2>
            <p>Response Efficiency</p>
          </div>

        </div>

      </section>

      {/* Contact Form */}
      <section className="contact-form-section">

        <div className="form-container">

          <h2>Send Us a Message</h2>

          <form>

            <div className="input-row">
              <input
                type="text"
                placeholder="Full Name"
              />

              <input
                type="email"
                placeholder="Email Address"
              />
            </div>

            <textarea
              rows="6"
              placeholder="Enter your message"
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </section>

      {/* Quick Support Services */}
      <section className="support-services">

        <div className="section-title">
          <h2>Quick Support Services</h2>
          <p>
            Get immediate assistance for fraud reporting and banking security.
          </p>
        </div>

        <div className="service-grid">

          <div className="service-card">
            <h3>Fraud Reporting</h3>
            <p>
              Report suspicious banking activities instantly for review.
            </p>
          </div>

          <div className="service-card">
            <h3>Security Assistance</h3>
            <p>
              Receive support for account protection and fraud prevention.
            </p>
          </div>

          <div className="service-card">
            <h3>Transaction Support</h3>
            <p>
              Resolve transaction-related concerns quickly and securely.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
};

export default Contact;