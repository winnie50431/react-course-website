import React, { Fragment } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthService from "../services/auth.service";

const NavComponent = (props) => {
  let { currentUser, setCurrentUser } = props;
  const history = useHistory();
  const handleLogout = () => {
    AuthService.logout();
    window.alert("Logout Successfully, now you are redirect to the homepage");
    setCurrentUser(null);
    history.push("/");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            CourseSpace
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              {currentUser ? (
                <Fragment>
                  <li className="nav-item">
                    <Link onClick={handleLogout} class="nav-link" to="#">
                      Log out
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/profile">
                      Profile
                    </Link>
                  </li>
                </Fragment>
              ) : (
                <Fragment>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      Register
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                </Fragment>
              )}
              {currentUser && (
                <li className="nav-item">
                  <Link className="nav-link" to="/course">
                    Course
                  </Link>
                </li>
              )}
              {currentUser && currentUser.user.role === "instructor" && (
                <li className="nav-item">
                  <Link className="nav-link" to="/postCourse">
                    Post Course
                  </Link>
                </li>
              )}
              {currentUser && currentUser.user.role === "student" && (
                <li className="nav-item">
                  <Link className="nav-link" to="/enroll">
                    Enroll
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavComponent;
