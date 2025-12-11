import React from "react";

function Signup() {
  return (
    <div className="container">
      <h2>Create Account</h2>

      <form className="form">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Create Password" required />
        <input type="password" placeholder="Confirm Password" required />

        <button type="submit" className="btn">Register</button>
      </form>
    </div>
  );
}

export default Signup;
