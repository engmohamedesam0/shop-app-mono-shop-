import { ArrowRight, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Blog.css';

const blogPosts = [
  {
    id: 1,
    title: 'The Ultimate Guide to Minimalist Tech Setup',
    excerpt: 'Discover how to declutter your workspace and boost productivity with our curated minimalist tech essentials.',
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=800&auto=format&fit=crop',
    date: 'Oct 15, 2024',
    author: 'Alex Rivera',
    category: 'Technology'
  },
  {
    id: 2,
    title: 'Sustainable Fashion: Why It Matters Now More Than Ever',
    excerpt: 'Explore the environmental impact of fast fashion and learn how to build a timeless, eco-friendly wardrobe.',
    image: 'https://images.unsplash.com/photo-1489987707023-afc824781ef1?q=80&w=800&auto=format&fit=crop',
    date: 'Oct 12, 2024',
    author: 'Sarah Chen',
    category: 'Fashion'
  },
  {
    id: 3,
    title: '5 Smart Home Gadgets You Didn\'t Know You Needed',
    excerpt: 'Transform your living space with these innovative smart home devices that bring convenience and security.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800&auto=format&fit=crop',
    date: 'Oct 08, 2024',
    author: 'Marcus Johnson',
    category: 'Home & Garden'
  }
];

export default function Blog() {
  return (
    <div className="blog-page container animate-fade-in">
      <div className="blog-header">
        <h1 className="page-title">Our Blog</h1>
        <p className="page-subtitle">Stories, insights, and shopping guides from the Nexus team.</p>
      </div>

      <div className="blog-grid">
        {blogPosts.map(post => (
          <article key={post.id} className="blog-card glass">
            <div className="blog-image-wrapper">
              <span className="blog-category badge badge-accent">{post.category}</span>
              <img src={post.image} alt={post.title} className="blog-image" />
            </div>
            
            <div className="blog-content">
              <div className="blog-meta">
                <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
              </div>
              
              <h2 className="blog-title">
                <Link to="#">{post.title}</Link>
              </h2>
              
              <p className="blog-excerpt">{post.excerpt}</p>
              
              <Link to="#" className="btn btn-ghost read-more">
                Read Article <ArrowRight size={16} />
              </Link>
            </div>
          </article>
        ))}
      </div>
      
      <div className="blog-newsletter glass">
        <div className="newsletter-content">
          <h3>Subscribe to our newsletter</h3>
          <p>Get the latest news, articles, and exclusive offers sent directly to your inbox.</p>
        </div>
        <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
          <input type="email" className="input" placeholder="Enter your email address" />
          <button type="submit" className="btn btn-primary">Subscribe</button>
        </form>
      </div>
    </div>
  );
}
