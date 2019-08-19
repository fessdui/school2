import React, { useState } from "react";
import ReactDOM from "react-dom";

export default function LoginForm({
  logged,
  loading,
  error,
  loginUser,
  dispatch
}) {
  const [email, setEmailText] = useState("");
  const [password, setPasswordText] = useState("");

  const renderForm = () => {
    return (
      <form>
        <label>Login</label>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={event => {
              setEmailText(event.target.value);
            }}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={event => {
              setPasswordText(event.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => dispatch(loginUser(email, password))}
        >
          Login
        </button>
      </form>
    );
  };

  let render = null;

  if (!logged) {
    render = renderForm();
  }

  return render;
}
