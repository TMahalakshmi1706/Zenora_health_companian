import React, { useState } from "react";
import axiosClient from "../api/axiosClient";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    password: "", 
    confirmPassword: "" 
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!form.name.trim()) {
      newErrors.name = "Full name is required";
    }
    
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    
    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    setErrors({});
    
    try {
      // Prepare data for backend
      const userData = {
        name: form.name,
        email: form.email,
        password: form.password
      };
      
      await axiosClient.post("/auth/register", userData);
      
      // Show success and redirect to login
      setErrors({ success: "Account created successfully! Redirecting to login..." });
      
      setTimeout(() => {
        navigate("/login");
      }, 2000);
      
    } catch (error) {
      console.error("Signup error:", error);
      
      // Handle different error responses from your backend
      if (error.response) {
        const errorMessage = error.response.data?.message || error.response.data?.error;
        if (error.response.status === 409) {
          setErrors({ 
            submit: "Email already exists. Please use a different email or try logging in." 
          });
        } else {
          setErrors({ 
            submit: errorMessage || "Registration failed. Please try again." 
          });
        }
      } else if (error.request) {
        setErrors({ 
          submit: "Network error. Please check your connection." 
        });
      } else {
        setErrors({ 
          submit: "An unexpected error occurred. Please try again." 
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const styles = {
    page: {
      fontFamily: "'Inter', 'Segoe UI', sans-serif",
      minHeight: "100vh",
      backgroundColor: "#f8fafc",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
    },
    container: {
      width: "100%",
      maxWidth: "450px",
      backgroundColor: "white",
      borderRadius: "12px",
      padding: "40px",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
      border: "1px solid #e2e8f0",
    },
    header: {
      textAlign: "center",
      marginBottom: "30px",
    },
    logo: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      marginBottom: "20px",
    },
    logoIcon: {
      width: "40px",
      height: "40px",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      borderRadius: "8px",
    },
    logoText: {
      fontSize: "28px",
      fontWeight: "700",
      color: "#0f172a",
    },
    title: {
      fontSize: "24px",
      fontWeight: "600",
      color: "#0f172a",
      marginBottom: "8px",
    },
    subtitle: {
      fontSize: "14px",
      color: "#64748b",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
    inputGroup: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
    },
    label: {
      fontSize: "14px",
      fontWeight: "500",
      color: "#475569",
    },
    input: {
      width: "100%",
      padding: "12px 16px",
      fontSize: "15px",
      border: "1px solid #e2e8f0",
      borderRadius: "8px",
      outline: "none",
      backgroundColor: "#f8fafc",
      transition: "border-color 0.2s ease",
    },
    inputFocus: {
      borderColor: "#667eea",
      backgroundColor: "white",
    },
    errorText: {
      fontSize: "13px",
      color: "#ef4444",
      marginTop: "4px",
    },
    successText: {
      fontSize: "13px",
      color: "#10b981",
      marginTop: "4px",
    },
    passwordHint: {
      fontSize: "12px",
      color: "#64748b",
      marginTop: "4px",
    },
    submitButton: {
      padding: "14px",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      border: "none",
      borderRadius: "8px",
      color: "white",
      fontSize: "15px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "opacity 0.2s ease",
      marginTop: "10px",
    },
    submitButtonDisabled: {
      opacity: 0.6,
      cursor: "not-allowed",
    },
    loadingSpinner: {
      display: "inline-block",
      width: "18px",
      height: "18px",
      border: "2px solid rgba(255, 255, 255, 0.3)",
      borderRadius: "50%",
      borderTopColor: "white",
      animation: "spin 1s linear infinite",
    },
    messageContainer: {
      padding: "12px",
      borderRadius: "8px",
      marginBottom: "20px",
      textAlign: "center",
    },
    errorContainer: {
      backgroundColor: "#fef2f2",
      border: "1px solid #fecaca",
    },
    successContainer: {
      backgroundColor: "#d1fae5",
      border: "1px solid #a7f3d0",
    },
    errorMessage: {
      fontSize: "14px",
      color: "#991b1b",
    },
    successMessage: {
      fontSize: "14px",
      color: "#065f46",
    },
    loginLink: {
      textAlign: "center",
      marginTop: "25px",
      fontSize: "14px",
      color: "#64748b",
    },
    loginText: {
      color: "#667eea",
      fontWeight: "600",
      textDecoration: "none",
      marginLeft: "5px",
      cursor: "pointer",
    },
    benefits: {
      marginTop: "30px",
      padding: "20px",
      backgroundColor: "#f0f9ff",
      borderRadius: "8px",
      border: "1px solid #bae6fd",
    },
    benefitsTitle: {
      fontSize: "14px",
      fontWeight: "600",
      color: "#0369a1",
      marginBottom: "12px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    benefitsList: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    benefitItem: {
      fontSize: "13px",
      color: "#475569",
      padding: "6px 0",
      display: "flex",
      alignItems: "flex-start",
      gap: "8px",
    },
    benefitIcon: {
      color: "#667eea",
      fontSize: "12px",
      marginTop: "2px",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.header}>
          <div style={styles.logo}>
            <div style={styles.logoIcon}></div>
            <div style={styles.logoText}>Zenora</div>
          </div>
          <h1 style={styles.title}>Create Account</h1>
          <p style={styles.subtitle}>Start your wellness journey with us</p>
        </div>

        {/* Success/Error Messages */}
        {errors.submit && (
          <div style={{ ...styles.messageContainer, ...styles.errorContainer }}>
            <div style={styles.errorMessage}>{errors.submit}</div>
          </div>
        )}
        
        {errors.success && (
          <div style={{ ...styles.messageContainer, ...styles.successContainer }}>
            <div style={styles.successMessage}>{errors.success}</div>
          </div>
        )}

        <form onSubmit={handleSubmit} style={styles.form}>
          {/* Name Input */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              style={styles.input}
              onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
              onBlur={(e) => Object.assign(e.target.style, styles.input)}
              disabled={isLoading}
            />
            {errors.name && <div style={styles.errorText}>{errors.name}</div>}
          </div>

          {/* Email Input */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              style={styles.input}
              onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
              onBlur={(e) => Object.assign(e.target.style, styles.input)}
              disabled={isLoading}
            />
            {errors.email && <div style={styles.errorText}>{errors.email}</div>}
          </div>

          {/* Password Input */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              placeholder="Create a strong password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              style={styles.input}
              onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
              onBlur={(e) => Object.assign(e.target.style, styles.input)}
              disabled={isLoading}
            />
            {errors.password && <div style={styles.errorText}>{errors.password}</div>}
            <div style={styles.passwordHint}>Must be at least 6 characters</div>
          </div>

          {/* Confirm Password Input */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Confirm Password</label>
            <input
              type="password"
              placeholder="Re-enter your password"
              value={form.confirmPassword}
              onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
              style={styles.input}
              onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
              onBlur={(e) => Object.assign(e.target.style, styles.input)}
              disabled={isLoading}
            />
            {errors.confirmPassword && <div style={styles.errorText}>{errors.confirmPassword}</div>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            style={{
              ...styles.submitButton,
              ...(isLoading && styles.submitButtonDisabled)
            }}
          >
            {isLoading ? (
              <>
                <span style={styles.loadingSpinner}></span>
                <span style={{ marginLeft: "8px" }}>Creating Account...</span>
              </>
            ) : (
              "Create Account"
            )}
          </button>
        </form>

        {/* Login Link */}
        <div style={styles.loginLink}>
          Already have an account?{" "}
          <Link to="/login" style={styles.loginText}>
            Sign in
          </Link>
        </div>

        {/* Benefits Section */}
        <div style={styles.benefits}>
          <div style={styles.benefitsTitle}>
            <span>✨</span>
            <span>Benefits of joining Zenora:</span>
          </div>
          <ul style={styles.benefitsList}>
            <li style={styles.benefitItem}>
              <span style={styles.benefitIcon}>•</span>
              <span>Personalized health tracking</span>
            </li>
            <li style={styles.benefitItem}>
              <span style={styles.benefitIcon}>•</span>
              <span>Smart medication reminders</span>
            </li>
            <li style={styles.benefitItem}>
              <span style={styles.benefitIcon}>•</span>
              <span>Mental wellness resources</span>
            </li>
            <li style={styles.benefitItem}>
              <span style={styles.benefitIcon}>•</span>
              <span>Secure prescription management</span>
            </li>
          </ul>
        </div>

        {/* Add CSS animation */}
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Signup;