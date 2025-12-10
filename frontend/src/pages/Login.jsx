import React, { useState } from "react";
import axiosClient from "../api/axiosClient";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!form.password) {
      newErrors.password = "Password is required";
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
      const response = await axiosClient.post("/auth/login", form);
      
      // Store token and user data
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      
      // Navigate to dashboard or prescription upload
      navigate("/prescription-upload");
      
    } catch (error) {
      console.error("Login error:", error);
      
      // Handle different error responses from your backend
      if (error.response) {
        const errorMessage = error.response.data?.message || error.response.data?.error;
        setErrors({ 
          submit: errorMessage || "Invalid credentials. Please try again." 
        });
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
      maxWidth: "400px",
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
    errorContainer: {
      padding: "12px",
      backgroundColor: "#fef2f2",
      border: "1px solid #fecaca",
      borderRadius: "8px",
      marginBottom: "20px",
    },
    errorMessage: {
      fontSize: "14px",
      color: "#991b1b",
      textAlign: "center",
    },
    signupLink: {
      textAlign: "center",
      marginTop: "25px",
      fontSize: "14px",
      color: "#64748b",
    },
    signupText: {
      color: "#667eea",
      fontWeight: "600",
      textDecoration: "none",
      marginLeft: "5px",
      cursor: "pointer",
    },
    // Add CSS animation
    "@keyframes spin": {
      "0%": { transform: "rotate(0deg)" },
      "100%": { transform: "rotate(360deg)" },
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
          <h1 style={styles.title}>Welcome Back</h1>
          <p style={styles.subtitle}>Sign in to continue to your health dashboard</p>
        </div>

        {errors.submit && (
          <div style={styles.errorContainer}>
            <div style={styles.errorMessage}>{errors.submit}</div>
          </div>
        )}

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              style={styles.input}
              onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
              onBlur={(e) => Object.assign(e.target.style, styles.input)}
              disabled={isLoading}
            />
            {errors.email && <div style={styles.errorText}>{errors.email}</div>}
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              style={styles.input}
              onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
              onBlur={(e) => Object.assign(e.target.style, styles.input)}
              disabled={isLoading}
            />
            {errors.password && <div style={styles.errorText}>{errors.password}</div>}
          </div>

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
                <span style={{ marginLeft: "8px" }}>Signing In...</span>
              </>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        <div style={styles.signupLink}>
          Don't have an account?{" "}
          <Link to="/signup" style={styles.signupText}>
            Sign up
          </Link>
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

export default Login;