import React, { useState } from "react";
import { useHistory } from "react-router";
import AuthService from "../services/auth.service";

const LoginComponent = (props) => {
  let { currentUser, setCurrentUser } = props;
  const history = useHistory();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [message, setMessage] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    AuthService.login(email, password)
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        setCurrentUser(AuthService.getCurrentUser);
        history.push("/profile");
      })
      .catch((error) => {
        console.log(error.response);
        setMessage(error.response.data);
      });
  };

  return (
    <div style={{ padding: "3rem" }}>
      <div>
        {message && <div className="alert alert-danger">{message}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="inputEmail" className="form-label">
          Email address
        </label>
        <input
          onChange={handleChangeEmail}
          type="email"
          className="form-control"
          id="inputEmail"
          name="email"
        />
      </div>
      <div className="mb-3">
        <label for="inputPassword" className="form-label">
          Password
        </label>
        <input
          onChange={handleChangePassword}
          type="password"
          className="form-control"
          id="inputPassword"
          name="Password"
        />
      </div>

      <button onClick={handleLogin} className="btn btn-primary">
        Login
      </button>
    </div>
  );
};

export default LoginComponent;
