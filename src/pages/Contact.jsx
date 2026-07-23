import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-page container animate-fade-in">
      <div className="contact-header">
        <h1 className="page-title">Contact Us</h1>
        <p className="page-subtitle">We'd love to hear from you. Please fill out this form or get in touch using the information below.</p>
      </div>

      <div className="contact-layout">
        <div className="contact-info glass">
          <h3>Get in Touch</h3>
          <p className="contact-desc">Our friendly team is always here to chat.</p>
          
          <ul className="contact-methods">
            <li>
              <div className="contact-icon-wrapper"><Mail size={24} /></div>
              <div>
                <h4>Chat to us</h4>
                <p>Our friendly team is here to help.</p>
                <a href="mailto:hi@nexus.com">hi@nexus.com</a>
              </div>
            </li>
            <li>
              <div className="contact-icon-wrapper"><MapPin size={24} /></div>
              <div>
                <h4>Office</h4>
                <p>Come say hello at our office HQ.</p>
                <address>100 Smith Street<br />Collingwood VIC 3066 AU</address>
              </div>
            </li>
            <li>
              <div className="contact-icon-wrapper"><Phone size={24} /></div>
              <div>
                <h4>Phone</h4>
                <p>Mon-Fri from 8am to 5pm.</p>
                <a href="tel:+15550000000">+1 (555) 000-0000</a>
              </div>
            </li>
          </ul>
        </div>

        <div className="contact-form-container glass">
          <h3>Send us a message</h3>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First name</label>
                <input type="text" id="firstName" className="input" placeholder="First name" />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last name</label>
                <input type="text" id="lastName" className="input" placeholder="Last name" />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" className="input" placeholder="you@company.com" />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" className="input" rows="5" placeholder="Leave us a message..."></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary w-full mt-4">
              Send message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
