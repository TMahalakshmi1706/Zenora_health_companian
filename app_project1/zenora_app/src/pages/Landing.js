import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="container">
      <h1>Welcome to Our Application</h1>
      <p>This is a simple landing page built using React.</p>

      <div className="buttons">
        <Link to="/login" className="btn">Login</Link>
        <Link to="/signup" className="btn btn-outline">Sign Up</Link>
        <Link to="/upload-prescription" className="btn">Upload Prescription</Link>
      </div>
    </div>
  );
}

export default Landing;
