import React, { useState } from "react";
import axiosClient from "../api/axiosClient";

const PrescriptionUpload = () => {
  const [disease, setDisease] = useState("");
  const [medicine, setMedicine] = useState("");
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!disease.trim() || !medicine.trim()) {
      setUploadStatus({ type: "error", message: "Please fill in all fields" });
      return;
    }

    setIsUploading(true);
    setUploadStatus(null);

    try {
      const formData = new FormData();
      formData.append("disease", disease);
      formData.append("medicine", medicine);
      if (file) formData.append("file", file);

      await axiosClient.post("/prescriptions/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setUploadStatus({ 
        type: "success", 
        message: "Prescription uploaded successfully!" 
      });
      
      // Reset form
      setDisease("");
      setMedicine("");
      setFile(null);
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setUploadStatus(null);
      }, 3000);

    } catch (error) {
      console.error("Upload error:", error);
      setUploadStatus({ 
        type: "error", 
        message: error.response?.data?.message || "Upload failed. Please try again." 
      });
    } finally {
      setIsUploading(false);
    }
  };

  // Styles
  const styles = {
    page: {
      fontFamily: "'Inter', 'Segoe UI', sans-serif",
      minHeight: "100vh",
      backgroundColor: "#f8fafc",
      padding: "40px 20px",
    },
    container: {
      maxWidth: "800px",
      margin: "0 auto",
      width: "100%",
    },
    header: {
      textAlign: "center",
      marginBottom: "50px",
    },
    title: {
      fontSize: "36px",
      fontWeight: "700",
      color: "#0f172a",
      marginBottom: "15px",
    },
    subtitle: {
      fontSize: "18px",
      color: "#64748b",
      maxWidth: "600px",
      margin: "0 auto",
      lineHeight: 1.6,
    },
    formContainer: {
      backgroundColor: "white",
      borderRadius: "20px",
      padding: "50px",
      boxShadow: "0 10px 40px rgba(0, 0, 0, 0.05)",
      border: "1px solid #e2e8f0",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "30px",
    },
    inputGroup: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    label: {
      fontSize: "16px",
      fontWeight: "600",
      color: "#0f172a",
      marginBottom: "5px",
    },
    input: {
      padding: "15px 20px",
      fontSize: "16px",
      border: "2px solid #e2e8f0",
      borderRadius: "12px",
      outline: "none",
      transition: "all 0.3s ease",
      backgroundColor: "#f8fafc",
    },
    inputFocus: {
      borderColor: "#667eea",
      backgroundColor: "white",
      boxShadow: "0 0 0 3px rgba(102, 126, 234, 0.1)",
    },
    fileUpload: {
      padding: "15px 20px",
      border: "2px dashed #cbd5e1",
      borderRadius: "12px",
      backgroundColor: "#f8fafc",
      textAlign: "center",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    fileUploadHover: {
      borderColor: "#667eea",
      backgroundColor: "#f0f4ff",
    },
    fileName: {
      marginTop: "10px",
      fontSize: "14px",
      color: "#475569",
      fontStyle: "italic",
    },
    uploadButton: {
      padding: "18px 40px",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      border: "none",
      borderRadius: "12px",
      color: "white",
      fontSize: "18px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
      marginTop: "20px",
      width: "100%",
    },
    uploadButtonHover: {
      transform: "translateY(-2px)",
      boxShadow: "0 8px 25px rgba(102, 126, 234, 0.4)",
    },
    uploadButtonDisabled: {
      opacity: 0.6,
      cursor: "not-allowed",
    },
    statusMessage: {
      marginTop: "20px",
      padding: "15px 20px",
      borderRadius: "12px",
      fontSize: "16px",
      textAlign: "center",
    },
    success: {
      backgroundColor: "#d1fae5",
      color: "#065f46",
      border: "1px solid #a7f3d0",
    },
    error: {
      backgroundColor: "#fee2e2",
      color: "#991b1b",
      border: "1px solid #fecaca",
    },
    tips: {
      marginTop: "40px",
      padding: "25px",
      backgroundColor: "#f0f9ff",
      borderRadius: "12px",
      border: "1px solid #bae6fd",
    },
    tipsTitle: {
      fontSize: "18px",
      fontWeight: "600",
      color: "#0369a1",
      marginBottom: "15px",
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    tipsList: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    tipItem: {
      padding: "8px 0",
      color: "#475569",
      display: "flex",
      alignItems: "flex-start",
      gap: "10px",
    },
    tipIcon: {
      color: "#667eea",
      fontSize: "14px",
      marginTop: "5px",
    },
    loadingSpinner: {
      display: "inline-block",
      width: "20px",
      height: "20px",
      border: "3px solid rgba(255, 255, 255, 0.3)",
      borderRadius: "50%",
      borderTopColor: "white",
      animation: "spin 1s linear infinite",
    },
    uploadIcon: {
      fontSize: "60px",
      color: "#667eea",
      marginBottom: "20px",
    },
    // Animation keyframes
    "@keyframes spin": {
      "0%": { transform: "rotate(0deg)" },
      "100%": { transform: "rotate(360deg)" },
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h1 style={styles.title}>Upload Prescription</h1>
          <p style={styles.subtitle}>
            Upload your prescription details and file to keep track of your medications 
            and receive timely reminders.
          </p>
        </div>

        <div style={styles.formContainer}>
          <div style={styles.form}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Disease/Condition</label>
              <input
                type="text"
                placeholder="e.g., Diabetes, Hypertension, Migraine"
                value={disease}
                onChange={(e) => setDisease(e.target.value)}
                style={styles.input}
                onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
                onBlur={(e) => Object.assign(e.target.style, styles.input)}
                required
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Medicine Name</label>
              <input
                type="text"
                placeholder="e.g., Metformin 500mg, Amlodipine 5mg"
                value={medicine}
                onChange={(e) => setMedicine(e.target.value)}
                style={styles.input}
                onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
                onBlur={(e) => Object.assign(e.target.style, styles.input)}
                required
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Upload Prescription (Optional)</label>
              <div
                style={styles.fileUpload}
                onClick={() => document.getElementById("fileInput").click()}
                onMouseEnter={(e) => Object.assign(e.target.style, styles.fileUploadHover)}
                onMouseLeave={(e) => Object.assign(e.target.style, styles.fileUpload)}
              >
                <div style={styles.uploadIcon}>📄</div>
                <div>Click to upload prescription file</div>
                <div style={{ fontSize: "14px", color: "#64748b", marginTop: "5px" }}>
                  Supports: PDF, JPG, PNG (Max 5MB)
                </div>
              </div>
              <input
                id="fileInput"
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: "none" }}
                accept=".pdf,.jpg,.jpeg,.png"
              />
              {file && (
                <div style={styles.fileName}>
                  Selected file: {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                </div>
              )}
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              disabled={isUploading || !disease.trim() || !medicine.trim()}
              style={{
                ...styles.uploadButton,
                ...((isUploading || !disease.trim() || !medicine.trim()) && styles.uploadButtonDisabled)
              }}
              onMouseEnter={(e) => {
                if (!isUploading && disease.trim() && medicine.trim()) {
                  Object.assign(e.target.style, styles.uploadButtonHover);
                }
              }}
              onMouseLeave={(e) => {
                if (!isUploading && disease.trim() && medicine.trim()) {
                  Object.assign(e.target.style, styles.uploadButton);
                }
              }}
            >
              {isUploading ? (
                <>
                  <span style={styles.loadingSpinner}></span>
                  <span style={{ marginLeft: "10px" }}>Uploading...</span>
                </>
              ) : (
                "Upload Prescription"
              )}
            </button>

            {uploadStatus && (
              <div style={{
                ...styles.statusMessage,
                ...styles[uploadStatus.type]
              }}>
                {uploadStatus.message}
              </div>
            )}
          </div>

          <div style={styles.tips}>
            <div style={styles.tipsTitle}>
              <span>💡</span>
              <span>Tips for better prescription management:</span>
            </div>
            <ul style={styles.tipsList}>
              <li style={styles.tipItem}>
                <span style={styles.tipIcon}>•</span>
                <span>Be specific with medicine names and dosages</span>
              </li>
              <li style={styles.tipItem}>
                <span style={styles.tipIcon}>•</span>
                <span>Upload clear images of your prescription for accurate records</span>
              </li>
              <li style={styles.tipItem}>
                <span style={styles.tipIcon}>•</span>
                <span>Include frequency (e.g., "Twice daily", "Before meals")</span>
              </li>
              <li style={styles.tipItem}>
                <span style={styles.tipIcon}>•</span>
                <span>Update when your prescription changes</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Add CSS for spinner animation */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default PrescriptionUpload;