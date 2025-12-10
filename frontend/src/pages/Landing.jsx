import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("sleep");

  // Styles matching the reference image
  const styles = {
    page: {
      fontFamily: "'Inter', 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif",
      width: "100%",
      minHeight: "100vh",
      backgroundColor: "#ffffff",
      color: "#1e293b",
      lineHeight: 1.6,
      overflowX: "hidden",
    },

    // Navigation
    nav: {
      position: "sticky",
      top: 0,
      zIndex: 1000,
      backgroundColor: "rgba(255, 255, 255, 0.98)",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid #e2e8f0",
      padding: "20px 0",
      width: "100%",
    },
    navInner: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 40px",
      width: "100%",
    },
    logo: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      fontSize: "28px",
      fontWeight: "bold",
      color: "#0f172a",
    },
    logoIcon: {
      width: "40px",
      height: "40px",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      borderRadius: "10px",
    },
    navLinks: {
      display: "flex",
      gap: "40px",
      alignItems: "center",
    },
    navLink: {
      color: "#64748b",
      textDecoration: "none",
      fontSize: "16px",
      fontWeight: "500",
      transition: "color 0.3s ease",
      cursor: "pointer",
    },
    navButtons: {
      display: "flex",
      gap: "15px",
    },
    btnLogin: {
      padding: "10px 24px",
      backgroundColor: "transparent",
      border: "1px solid #cbd5e1",
      borderRadius: "25px",
      color: "#475569",
      fontSize: "15px",
      fontWeight: "500",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    btnPrimary: {
      padding: "10px 24px",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      border: "none",
      borderRadius: "25px",
      color: "white",
      fontSize: "15px",
      fontWeight: "500",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },

    // Hero Section - Exactly like reference
    hero: {
      width: "100%",
      minHeight: "70vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      padding: "60px 20px",
      backgroundColor: "#ffffff",
    },
    heroContent: {
      textAlign: "center",
      maxWidth: "800px",
      width: "100%",
      margin: "0 auto",
    },
    // Title as separate h1 and h2 like in reference
    heroTitle: {
      fontSize: "56px",
      fontWeight: "700",
      lineHeight: 1.2,
      marginBottom: "10px",
      color: "#0f172a",
    },
    heroSubtitle: {
      fontSize: "52px",
      fontWeight: "700",
      lineHeight: 1.2,
      marginBottom: "30px",
      color: "#0f172a",
    },
    heroGradient: {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },
    heroDescription: {
      fontSize: "20px",
      color: "#64748b",
      maxWidth: "600px",
      margin: "0 auto 40px",
      lineHeight: 1.6,
    },
    // Buttons exactly like reference
    heroButtons: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      marginBottom: "30px",
    },
    heroBtnPrimary: {
      padding: "16px 36px",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      border: "none",
      borderRadius: "8px",
      color: "white",
      fontSize: "16px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    heroBtnSecondary: {
      padding: "16px 36px",
      backgroundColor: "transparent",
      border: "2px solid #e2e8f0",
      borderRadius: "8px",
      color: "#475569",
      fontSize: "16px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    heroLogin: {
      color: "#64748b",
      fontSize: "16px",
      marginTop: "20px",
    },
    heroLoginLink: {
      color: "#667eea",
      background: "none",
      border: "none",
      cursor: "pointer",
      fontWeight: "600",
      fontSize: "16px",
      marginLeft: "5px",
      textDecoration: "underline",
    },

    // Divider
    divider: {
      width: "100%",
      height: "1px",
      backgroundColor: "#e2e8f0",
      margin: "60px 0",
      maxWidth: "800px",
      marginLeft: "auto",
      marginRight: "auto",
    },

    // Features Section
    section: {
      width: "100%",
      padding: "80px 40px",
      backgroundColor: "#ffffff",
    },
    sectionInner: {
      maxWidth: "1200px",
      margin: "0 auto",
      width: "100%",
    },
    sectionTitle: {
      fontSize: "36px",
      fontWeight: "600",
      textAlign: "center",
      marginBottom: "15px",
      color: "#0f172a",
    },
    sectionSubtitle: {
      fontSize: "18px",
      color: "#64748b",
      textAlign: "center",
      maxWidth: "600px",
      margin: "0 auto 60px",
      lineHeight: 1.6,
    },
    featuresGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "30px",
      width: "100%",
    },
    featureCard: {
      backgroundColor: "#ffffff",
      borderRadius: "12px",
      padding: "30px",
      border: "1px solid #e2e8f0",
      transition: "all 0.3s ease",
      width: "100%",
    },
    featureIcon: {
      width: "60px",
      height: "60px",
      borderRadius: "12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "25px",
      fontSize: "28px",
      color: "white",
    },
    featureTitle: {
      fontSize: "22px",
      fontWeight: "600",
      marginBottom: "15px",
      color: "#0f172a",
    },
    featureDesc: {
      color: "#64748b",
      marginBottom: "20px",
      lineHeight: 1.6,
      fontSize: "16px",
    },
    featureLink: {
      color: "#667eea",
      fontWeight: "600",
      textDecoration: "none",
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      background: "none",
      border: "none",
      cursor: "pointer",
      fontSize: "16px",
    },

    // Tabs Section
    tabsSection: {
      backgroundColor: "#f8fafc",
    },
    tabsContainer: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "15px",
      marginBottom: "50px",
    },
    tab: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      padding: "12px 28px",
      borderRadius: "25px",
      border: "none",
      fontSize: "16px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    contentGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "25px",
      width: "100%",
    },
    contentCard: {
      backgroundColor: "#ffffff",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
      transition: "all 0.3s ease",
      width: "100%",
      border: "1px solid #e2e8f0",
    },
    cardContent: {
      padding: "25px",
    },
    cardHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: "20px",
    },
    cardIcon: {
      fontSize: "32px",
    },
    cardPlay: {
      background: "none",
      border: "none",
      fontSize: "24px",
      cursor: "pointer",
      color: "#94a3b8",
    },
    cardTitle: {
      fontSize: "18px",
      fontWeight: "600",
      marginBottom: "10px",
      color: "#0f172a",
    },
    cardInfo: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    cardCategory: {
      color: "#64748b",
      fontSize: "14px",
    },
    cardDuration: {
      backgroundColor: "#f1f5f9",
      color: "#475569",
      padding: "4px 12px",
      borderRadius: "15px",
      fontSize: "14px",
      fontWeight: "500",
    },

    // Testimonials
    testimonialSection: {
      backgroundColor: "#ffffff",
    },
    testimonialBadge: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      backgroundColor: "#fef3c7",
      color: "#92400e",
      padding: "10px 20px",
      borderRadius: "20px",
      marginBottom: "20px",
      fontSize: "15px",
      fontWeight: "600",
    },
    star: {
      color: "#f59e0b",
      fontSize: "18px",
    },
    testimonialGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "30px",
      width: "100%",
    },
    testimonialCard: {
      backgroundColor: "#f8fafc",
      borderRadius: "12px",
      padding: "30px",
      border: "1px solid #e2e8f0",
    },
    testimonialStars: {
      display: "flex",
      gap: "5px",
      marginBottom: "20px",
      color: "#f59e0b",
    },
    testimonialText: {
      fontSize: "16px",
      fontStyle: "italic",
      color: "#475569",
      marginBottom: "25px",
      lineHeight: 1.7,
    },
    testimonialAuthor: {
      fontWeight: "600",
      color: "#0f172a",
      fontSize: "15px",
    },

    // CTA Section
    cta: {
      width: "100%",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "white",
      textAlign: "center",
      padding: "80px 40px",
    },
    ctaInner: {
      maxWidth: "800px",
      margin: "0 auto",
      width: "100%",
    },
    ctaTitle: {
      fontSize: "42px",
      fontWeight: "700",
      marginBottom: "20px",
    },
    ctaSubtitle: {
      fontSize: "18px",
      opacity: 0.9,
      maxWidth: "600px",
      margin: "0 auto 40px",
      lineHeight: 1.6,
    },
    ctaButtons: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      marginBottom: "30px",
    },
    ctaBtnPrimary: {
      padding: "16px 36px",
      backgroundColor: "white",
      color: "#0f172a",
      border: "none",
      borderRadius: "8px",
      fontSize: "16px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    ctaBtnSecondary: {
      padding: "16px 36px",
      backgroundColor: "transparent",
      color: "white",
      border: "2px solid white",
      borderRadius: "8px",
      fontSize: "16px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    ctaNote: {
      opacity: 0.8,
      fontSize: "16px",
    },

    // Footer
    footer: {
      width: "100%",
      backgroundColor: "#0f172a",
      color: "#94a3b8",
      padding: "60px 40px 30px",
    },
    footerInner: {
      maxWidth: "1200px",
      margin: "0 auto",
      width: "100%",
    },
    footerContent: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "40px",
      textAlign: "center",
    },
    footerLogo: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      fontSize: "28px",
      fontWeight: "bold",
      color: "white",
      marginBottom: "15px",
    },
    footerDesc: {
      maxWidth: "400px",
      lineHeight: 1.6,
      fontSize: "16px",
    },
    footerLinks: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "25px",
    },
    footerLink: {
      color: "#94a3b8",
      textDecoration: "none",
      fontSize: "16px",
      transition: "color 0.3s ease",
      cursor: "pointer",
      background: "none",
      border: "none",
    },
    footerBottom: {
      borderTop: "1px solid #1e293b",
      marginTop: "50px",
      paddingTop: "30px",
      textAlign: "center",
      fontSize: "14px",
      color: "#64748b",
      width: "100%",
    },

    // Mobile responsive
    mobile: {
      heroTitle: {
        fontSize: "36px",
      },
      heroSubtitle: {
        fontSize: "32px",
      },
      heroDescription: {
        fontSize: "16px",
        padding: "0 20px",
      },
      sectionTitle: {
        fontSize: "28px",
      },
      heroButtons: {
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        padding: "0 20px",
      },
      heroBtnPrimary: {
        width: "100%",
        maxWidth: "300px",
      },
      heroBtnSecondary: {
        width: "100%",
        maxWidth: "300px",
      },
      ctaButtons: {
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        padding: "0 20px",
      },
      ctaBtnPrimary: {
        width: "100%",
        maxWidth: "300px",
      },
      ctaBtnSecondary: {
        width: "100%",
        maxWidth: "300px",
      },
    },
  };

  // Hover states
  const hoverStyles = {
    btnLoginHover: {
      backgroundColor: "#f1f5f9",
      borderColor: "#94a3b8",
    },
    btnPrimaryHover: {
      transform: "translateY(-2px)",
      boxShadow: "0 8px 25px rgba(102, 126, 234, 0.4)",
    },
    heroBtnPrimaryHover: {
      transform: "translateY(-2px)",
      boxShadow: "0 8px 25px rgba(102, 126, 234, 0.4)",
    },
    heroBtnSecondaryHover: {
      backgroundColor: "#f8fafc",
      borderColor: "#94a3b8",
    },
    featureCardHover: {
      transform: "translateY(-5px)",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    },
    contentCardHover: {
      transform: "translateY(-5px)",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    },
    ctaBtnPrimaryHover: {
      transform: "translateY(-2px)",
      boxShadow: "0 8px 25px rgba(255, 255, 255, 0.3)",
    },
    ctaBtnSecondaryHover: {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
    navLinkHover: {
      color: "#0f172a",
    },
    footerLinkHover: {
      color: "white",
    },
    tabActive: {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "white",
      boxShadow: "0 4px 15px rgba(102, 126, 234, 0.3)",
    },
    tabInactive: {
      backgroundColor: "white",
      color: "#475569",
      border: "1px solid #e2e8f0",
    },
  };

  // Data
  const tabs = [
    { id: "sleep", label: "Sleep", icon: "🌙" },
    { id: "stress", label: "Stress & Anxiety", icon: "🧘" },
    { id: "mindfulness", label: "Mindfulness", icon: "🌱" },
  ];

  const sleepContent = [
    { title: "Rain on Leaves", category: "Soundscape", duration: "45 min", icon: "💧" },
    { title: "The Nordic Night Train", category: "Sleep Story", duration: "28 min", icon: "🚂" },
    { title: "Wind in the Willows", category: "Bedtime Story", duration: "32 min", icon: "🍃" },
    { title: "Gently Back to Sleep", category: "Meditation", duration: "15 min", icon: "😴" },
  ];

  const testimonials = [
    {
      text: "Whenever I need to unwind from a stressful work day I meditate with our soundscapes and it automatically sends me to my happy place.",
      author: "Jasmine from Bend",
      rating: 5,
    },
    {
      text: "My family loves the app! Out of the three meditation apps I have on my phone, this is the one I actually use.",
      author: "Kristie from Irvine",
      rating: 5,
    },
    {
      text: "It cuts through my stress, anxiety, irregular sleep schedule and brings me to deep sleep. I usually fall asleep within 5 minutes.",
      author: "Mathieu from New Orleans",
      rating: 5,
    },
  ];

  const features = [
    {
      icon: "🌙",
      title: "Sleep More",
      description: "Fall asleep (and stay asleep) naturally and peacefully.",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      icon: "🎧",
      title: "Stress Less",
      description: "Get in-the-moment relief for stress and anxiety so you can get back to living.",
      gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    },
    {
      icon: "❤️",
      title: "Live Mindfully",
      description: "Navigate life's ups and downs with resilience, confidence and guided support.",
      gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    },
    {
      icon: "📊",
      title: "Health Tracking",
      description: "Monitor your physical and mental health with personalized insights.",
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
    },
  ];

  // Check for mobile view
  const isMobile = window.innerWidth <= 768;

  return (
    <div style={styles.page}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navInner}>
          <div style={styles.logo}>
            <div style={styles.logoIcon}></div>
            <span>Zenora</span>
          </div>
          
          <div style={styles.navLinks}>
            <a href="#features" style={styles.navLink}>Features</a>
            <a href="#content" style={styles.navLink}>Content</a>
            <a href="#testimonials" style={styles.navLink}>Reviews</a>
            <a href="#about" style={styles.navLink}>About</a>
          </div>
          
          <div style={styles.navButtons}>
            <button
              onClick={() => navigate("/login")}
              style={styles.btnLogin}
              onMouseEnter={(e) => Object.assign(e.target.style, hoverStyles.btnLoginHover)}
              onMouseLeave={(e) => Object.assign(e.target.style, styles.btnLogin)}
            >
              Log In
            </button>
            <button
              onClick={() => navigate("/signup")}
              style={styles.btnPrimary}
              onMouseEnter={(e) => Object.assign(e.target.style, hoverStyles.btnPrimaryHover)}
              onMouseLeave={(e) => Object.assign(e.target.style, styles.btnPrimary)}
            >
              Try for Free
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - EXACTLY like reference */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={isMobile ? {...styles.heroTitle, ...styles.mobile.heroTitle} : styles.heroTitle}>
            Transform Your Mind.
          </h1>
          <h2 style={isMobile ? {...styles.heroSubtitle, ...styles.mobile.heroSubtitle} : styles.heroSubtitle}>
            <span style={styles.heroGradient}>Transform Your Life.</span>
          </h2>
          <p style={isMobile ? {...styles.heroDescription, ...styles.mobile.heroDescription} : styles.heroDescription}>
            The #1 app for sleep, meditation, and relaxation.<br />
            Your journey to better mental and physical health starts here.
          </p>
          <div style={isMobile ? {...styles.heroButtons, ...styles.mobile.heroButtons} : styles.heroButtons}>
            <button
              onClick={() => navigate("/signup")}
              style={isMobile ? {...styles.heroBtnPrimary, ...styles.mobile.heroBtnPrimary} : styles.heroBtnPrimary}
              onMouseEnter={(e) => Object.assign(e.target.style, hoverStyles.heroBtnPrimaryHover)}
              onMouseLeave={(e) => Object.assign(e.target.style, isMobile ? {...styles.heroBtnPrimary, ...styles.mobile.heroBtnPrimary} : styles.heroBtnPrimary)}
            >
              Start Your Free Trial
            </button>
            <button
              style={isMobile ? {...styles.heroBtnSecondary, ...styles.mobile.heroBtnSecondary} : styles.heroBtnSecondary}
              onMouseEnter={(e) => Object.assign(e.target.style, hoverStyles.heroBtnSecondaryHover)}
              onMouseLeave={(e) => Object.assign(e.target.style, isMobile ? {...styles.heroBtnSecondary, ...styles.mobile.heroBtnSecondary} : styles.heroBtnSecondary)}
            >
              Watch Demo
            </button>
          </div>
          <p style={styles.heroLogin}>
            Already have an account?{" "}
            <button
              onClick={() => navigate("/login")}
              style={styles.heroLoginLink}
            >
              Sign in
            </button>
          </p>
        </div>
      </section>

      {/* Divider */}
      <div style={styles.divider}></div>

      {/* Features Section */}
      <section id="features" style={styles.section}>
        <div style={styles.sectionInner}>
          <h2 style={isMobile ? {...styles.sectionTitle, ...styles.mobile.sectionTitle} : styles.sectionTitle}>
            We're here to help you feel better.
          </h2>
          <p style={styles.sectionSubtitle}>
            Discover tools and resources designed to support your mental and physical well-being.
          </p>
          
          <div style={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div
                key={index}
                style={styles.featureCard}
                onMouseEnter={(e) => Object.assign(e.target.style, hoverStyles.featureCardHover)}
                onMouseLeave={(e) => Object.assign(e.target.style, styles.featureCard)}
              >
                <div style={{...styles.featureIcon, background: feature.gradient}}>
                  {feature.icon}
                </div>
                <h3 style={styles.featureTitle}>{feature.title}</h3>
                <p style={styles.featureDesc}>{feature.description}</p>
                <button style={styles.featureLink}>Learn More →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Tabs Section */}
      <section id="content" style={{...styles.section, ...styles.tabsSection}}>
        <div style={styles.sectionInner}>
          <div style={styles.tabsContainer}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  ...styles.tab,
                  ...(activeTab === tab.id ? hoverStyles.tabActive : hoverStyles.tabInactive),
                }}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
          
          <div style={styles.contentGrid}>
            {sleepContent.map((item, index) => (
              <div
                key={index}
                style={styles.contentCard}
                onMouseEnter={(e) => Object.assign(e.target.style, hoverStyles.contentCardHover)}
                onMouseLeave={(e) => Object.assign(e.target.style, styles.contentCard)}
              >
                <div style={styles.cardContent}>
                  <div style={styles.cardHeader}>
                    <span style={styles.cardIcon}>{item.icon}</span>
                    <button style={styles.cardPlay}>▶️</button>
                  </div>
                  <h4 style={styles.cardTitle}>{item.title}</h4>
                  <div style={styles.cardInfo}>
                    <span style={styles.cardCategory}>{item.category}</span>
                    <span style={styles.cardDuration}>{item.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" style={{...styles.section, ...styles.testimonialSection}}>
        <div style={styles.sectionInner}>
          <div style={{textAlign: "center", marginBottom: "60px"}}>
            <div style={styles.testimonialBadge}>
              <span style={styles.star}>★</span>
              <span>Over 2 million 5-star reviews</span>
            </div>
            <h2 style={isMobile ? {...styles.sectionTitle, ...styles.mobile.sectionTitle} : styles.sectionTitle}>
              Trusted by people worldwide
            </h2>
          </div>
          
          <div style={styles.testimonialGrid}>
            {testimonials.map((testimonial, index) => (
              <div key={index} style={styles.testimonialCard}>
                <div style={styles.testimonialStars}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} style={{fontSize: "20px"}}>★</span>
                  ))}
                </div>
                <p style={styles.testimonialText}>"{testimonial.text}"</p>
                <p style={styles.testimonialAuthor}>{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.cta}>
        <div style={styles.ctaInner}>
          <h2 style={styles.ctaTitle}>Start your wellness journey today.</h2>
          <p style={styles.ctaSubtitle}>
            Join millions who have found peace, better sleep, and improved mental health.
          </p>
          
          <div style={isMobile ? {...styles.ctaButtons, ...styles.mobile.ctaButtons} : styles.ctaButtons}>
            <button
              onClick={() => navigate("/signup")}
              style={isMobile ? {...styles.ctaBtnPrimary, ...styles.mobile.ctaBtnPrimary} : styles.ctaBtnPrimary}
              onMouseEnter={(e) => Object.assign(e.target.style, hoverStyles.ctaBtnPrimaryHover)}
              onMouseLeave={(e) => Object.assign(e.target.style, isMobile ? {...styles.ctaBtnPrimary, ...styles.mobile.ctaBtnPrimary} : styles.ctaBtnPrimary)}
            >
              Try 7 Days Free
            </button>
            <button
              style={isMobile ? {...styles.ctaBtnSecondary, ...styles.mobile.ctaBtnSecondary} : styles.ctaBtnSecondary}
              onMouseEnter={(e) => Object.assign(e.target.style, hoverStyles.ctaBtnSecondaryHover)}
              onMouseLeave={(e) => Object.assign(e.target.style, isMobile ? {...styles.ctaBtnSecondary, ...styles.mobile.ctaBtnSecondary} : styles.ctaBtnSecondary)}
            >
              View Plans
            </button>
          </div>
          
          <p style={styles.ctaNote}>No credit card required • Cancel anytime</p>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerInner}>
          <div style={styles.footerContent}>
            <div>
              <div style={styles.footerLogo}>
                <div style={styles.logoIcon}></div>
                <span>Zenora</span>
              </div>
              <p style={styles.footerDesc}>
                Your companion for mental and physical wellness. Meditation, sleep, and mindfulness for modern life.
              </p>
            </div>
            
            <div style={styles.footerLinks}>
              <button style={styles.footerLink}>Privacy</button>
              <button style={styles.footerLink}>Terms</button>
              <button style={styles.footerLink}>Contact</button>
              <button style={styles.footerLink}>Careers</button>
            </div>
          </div>
          
          <div style={styles.footerBottom}>
            <p>© 2024 Zenora Wellness. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;