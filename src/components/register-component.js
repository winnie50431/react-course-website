import React, { useState } from "react";
import { useHistory } from "react-router";
import AuthService from "../services/auth.service";

const RegisterComponent = () => {
  const history = useHistory();
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [role, setRole] = useState("");
  let [message, setMessage] = useState("");

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleChangesetRole = (e) => {
    setRole(e.target.value);
  };

  const handleRegister = () => {
    AuthService.register(username, email, password, role)
      .then(() => {
        window.alert(
          "Registration succeeds. You are now redirected to the login page."
        );
        history.push("/login");
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
        <label htmlFor="inputUserName" className="form-label">
          User Name
        </label>
        <input
          onChange={handleChangeUsername}
          type="text"
          className="form-control"
          id="inputUserName"
          name="name"
        />
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
          aria-describedby="emailHelp"
          name="email"
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
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
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          remember me
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="roleSelect" className="form-label">
          role
        </label>
        <select
          onChange={handleChangesetRole}
          id="roleSelect"
          className="form-select"
          name="role"
        >
          <option>student</option>
          <option>instructor</option>
        </select>
      </div>
      <button onClick={handleRegister} className="btn btn-secondary">
        Register
      </button>
    </div>
  );
};

export default RegisterComponent;
