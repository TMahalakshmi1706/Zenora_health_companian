import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../pages/Landing.css";

const Landing = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("sleep");

  const tabs = [
    { id: "sleep", label: "Sleep", icon: "🌙" },
    { id: "stress", label: "Stress & Anxiety", icon: "🧘" },
    { id: "mindfulness", label: "Mindfulness", icon: "🌱" },
  ];

  const sleepContent = [
    {
      title: "Rain on Leaves",
      category: "Soundscape",
      duration: "45 min",
      icon: "💧",
    },
    {
      title: "The Nordic Night Train",
      category: "Sleep Story",
      duration: "28 min",
      icon: "🚂",
    },
    {
      title: "Wind in the Willows",
      category: "Bedtime Story",
      duration: "32 min",
      icon: "🍃",
    },
    {
      title: "Gently Back to Sleep",
      category: "Meditation",
      duration: "15 min",
      icon: "😴",
    },
  ];

  const testimonials = [
    {
      text: "Whenever I need to unwind from a stressful day, I meditate with our soundscapes.",
      author: "Jasmine from Bend",
      rating: 5,
    },
    {
      text: "My family loves the app! Out of all meditation apps, this is the one I use.",
      author: "Kristie from Irvine",
      rating: 5,
    },
    {
      text: "It cuts through stress and brings me to deep sleep.",
      author: "Mathieu from New Orleans",
      rating: 5,
    },
  ];

  const features = [
    {
      icon: "🌙",
      title: "Sleep More",
      description: "Fall asleep naturally and peacefully.",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      icon: "🎧",
      title: "Stress Less",
      description: "Get relief for stress and anxiety.",
      gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    },
    {
      icon: "❤️",
      title: "Live Mindfully",
      description: "Navigate life with guided mindfulness.",
      gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    },
    {
      icon: "📊",
      title: "Health Tracking",
      description: "Monitor your wellness with insights.",
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
    },
  ];

  return (
    <div className="page">
      {/* NAVIGATION */}
      <nav className="nav">
        <div className="nav-inner">
          <div className="logo">
            <div className="logo-icon"></div>
            Zenora
          </div>

          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#content">Content</a>
            <a href="#testimonials">Reviews</a>
            <a href="#about">About</a>
          </div>

          <div className="nav-buttons">
            <button
              className="btn-login"
              onClick={() => navigate("/login")}
            >
              Log In
            </button>

            <button
              className="btn-primary"
              onClick={() => navigate("/signup")}
            >
              Try for Free
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>Transform Your Mind.</h1>
          <h2>
            <span className="text-gradient">Transform Your Life.</span>
          </h2>

          <p className="hero-description">
            The #1 app for sleep, meditation, and relaxation.
            <br />
            Your journey to better wellbeing starts here.
          </p>

          <div className="hero-buttons">
            <button
              className="hero-btn-primary"
              onClick={() => navigate("/signup")}
            >
              Start Your Free Trial
            </button>

            <button className="hero-btn-secondary">
              Watch Demo
            </button>
          </div>

          <p className="hero-login">
            Already have an account?{" "}
            <button
              className="hero-login-link"
              onClick={() => navigate("/login")}
            >
              Sign in
            </button>
          </p>
        </div>
      </section>

      <div className="divider"></div>

      {/* FEATURES */}
      <section id="features" className="section">
        <h2 className="section-title">We're here to help you feel better.</h2>
        <p className="section-subtitle">
          Tools designed to support your mind and body.
        </p>

        <div className="features-grid">
          {features.map((f, index) => (
            <div key={index} className="feature-card">
              <div
                className="feature-icon"
                style={{ background: f.gradient }}
              >
                {f.icon}
              </div>

              <h3>{f.title}</h3>
              <p>{f.description}</p>

              <button className="feature-link">Learn More →</button>
            </div>
          ))}
        </div>
      </section>

      {/* TABS */}
      <section id="content" className="section tabs-section">
        <div className="tabs-container">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        <div className="content-grid">
          {sleepContent.map((item, index) => (
            <div key={index} className="content-card">
              <div className="card-content">
                <div className="card-header">
                  <span className="card-icon">{item.icon}</span>
                  <button className="card-play">▶️</button>
                </div>
                <h4>{item.title}</h4>

                <div className="card-info">
                  <span>{item.category}</span>
                  <span className="duration">{item.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="section testimonial-section">
        <div className="testimonial-top">
          <div className="testimonial-badge">
            ★ Over 2 million 5-star reviews
          </div>

          <h2 className="section-title">Trusted by people worldwide</h2>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((t, index) => (
            <div key={index} className="testimonial-card">
              <div className="stars">
                {Array(t.rating).fill("★").join("")}
              </div>

              <p className="t-text">"{t.text}"</p>
              <p className="t-author">{t.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Start your wellness journey today.</h2>
        <p>Join millions who have improved their wellbeing.</p>

        <div className="cta-buttons">
          <button
            className="cta-btn-primary"
            onClick={() => navigate("/signup")}
          >
            Try 7 Days Free
          </button>

          <button className="cta-btn-secondary">
            View Plans
          </button>
        </div>

        <p className="cta-note">
          No credit card required • Cancel anytime
        </p>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-logo">
            <div className="logo-icon"></div>
            Zenora
          </div>

          <p>Your companion for mental wellness.</p>

          <div className="footer-links">
            <button>Privacy</button>
            <button>Terms</button>
            <button>Contact</button>
            <button>Careers</button>
          </div>

          <div className="footer-bottom">
            © 2024 Zenora Wellness. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
