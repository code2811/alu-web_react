import React from 'react';

function Login() {
  return (
    <div className="Login">
      <p>Login to access the full dashboard</p>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <button type="submit">OK</button>
      </form>
    </div>
  );
}

export default Login;
