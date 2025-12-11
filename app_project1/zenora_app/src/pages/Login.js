import React from "react";

function Login() {
  return (
    <div className="container">
      <h2>Login</h2>

      <form className="form">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />

        <button type="submit" className="btn">Login</button>
      </form>
    </div>
  );
}

export default Login;
