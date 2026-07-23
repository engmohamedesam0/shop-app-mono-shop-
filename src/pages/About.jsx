import { ShieldCheck, Leaf, HeartHandshake } from 'lucide-react';
import './About.css';

export default function About() {
  return (
    <div className="about-page animate-fade-in">
      <div className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1 className="page-title text-white">Our Mission</h1>
            <p className="page-subtitle text-white-muted">
              We believe in creating a world where high-quality, sustainable products are accessible to everyone, empowering you to live your best life.
            </p>
          </div>
        </div>
      </div>

      <div className="container about-content">
        <div className="about-section glass animate-slide-up">
          <div className="about-text">
            <h2>The Nexus Story</h2>
            <p>
              Founded in 2024, Nexus began with a simple idea: shopping should be an experience, not a chore. We set out to curate a selection of premium products that combine exceptional design with uncompromised functionality.
            </p>
            <p>
              Our team travels the globe to partner directly with artisans, innovators, and established brands who share our commitment to excellence. By cutting out unnecessary middlemen, we're able to deliver incredible value without sacrificing quality.
            </p>
          </div>
          <div className="about-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop" 
              alt="Team collaborating" 
              className="about-image"
            />
          </div>
        </div>

        <div className="values-section">
          <h2 className="text-center mb-4">Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card glass">
              <div className="value-icon"><ShieldCheck size={32} /></div>
              <h3>Uncompromised Quality</h3>
              <p>Every product in our catalog undergoes rigorous testing to ensure it meets our exacting standards for durability and performance.</p>
            </div>
            <div className="value-card glass">
              <div className="value-icon"><Leaf size={32} /></div>
              <h3>Sustainable Practices</h3>
              <p>We prioritize eco-friendly materials and ethical manufacturing processes to minimize our footprint on the planet.</p>
            </div>
            <div className="value-card glass">
              <div className="value-icon"><HeartHandshake size={32} /></div>
              <h3>Customer First</h3>
              <p>Your satisfaction is our ultimate goal. We're dedicated to providing exceptional support and a seamless shopping experience.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
