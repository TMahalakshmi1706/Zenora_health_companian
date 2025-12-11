import React, { useState } from "react";

function PrescriptionUpload() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    // Show preview for images
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      setPreview(URL.createObjectURL(selectedFile));
    } else {
      setPreview(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please upload a prescription file");
      return;
    }

    // Build the form data to send to backend
    const formData = new FormData();
    formData.append("prescription", file);

    // TODO: replace with your backend API call later
    console.log("File ready to upload:", file);
    alert("Prescription uploaded successfully!");
  };

  return (
    <div className="container">
      <h2>Upload Prescription</h2>

      <form onSubmit={handleSubmit} className="form">
        <input 
          type="file" 
          accept="image/*, .pdf" 
          onChange={handleFileChange}
        />

        {/* Preview */}
        {preview && (
          <div style={{ marginTop: "15px" }}>
            <img 
              src={preview} 
              alt="Prescription Preview" 
              style={{ width: "200px", borderRadius: "10px" }}
            />
          </div>
        )}

        {/* Show PDF file name */}
        {file && !preview && (
          <p style={{ marginTop: "15px" }}>
            Selected File: {file.name}
          </p>
        )}

        <button type="submit" className="btn">Upload</button>
      </form>
    </div>
  );
}

export default PrescriptionUpload;
