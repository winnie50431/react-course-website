import React from "react";
import logo from "../images/logo512.png";
// import banner1 from "../images/home_banner(1).jpg";
// import banner2 from "../images/home_banner(2).jpg";
// import banner3 from "../images/home_banner(3).jpg";

const HomeComponent = () => {
  return (
    <div>
      <header id="header" className="text-light">
        <img className="logo" src={logo} alt="logo" />
        <h1 className="display-4 fw-bold">Hi. This is CourseSpace.</h1>
        <p className="h3">
          <a href="#">CourseSpace</a> brings you a solid base!
        </p>
      </header>

      <main>
        <div className="container py-4">
          <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
              <h1 className="display-5 fw-bold">Learning System</h1>
              <p className="col-md-8 fs-4">
                This system is using React.js as front-end framework, and
                Node.js, MongoDB as backend server. This kind of project is
                called MERN project, which is one of the most popular way to
                create modern websites.
              </p>
              <button className="btn btn-primary btn-lg" type="button">
                See how it works.
              </button>
            </div>
          </div>

          <div className="row align-items-md-stretch">
            <div className="col-md-6">
              <div className="h-100 p-5 text-white bg-dark rounded-3">
                <h2>As a student</h2>
                <p>
                  Students can register in courses they like. This website is
                  for practice purpose only, so please do not provide any
                  personal information, such as credit card numbers.
                </p>
                <button className="btn btn-outline-light" type="button">
                  Login or Register Now
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="h-100 p-5 bg-light border rounded-3">
                <h2>As an Instructor</h2>
                <p>
                  You can become an instructor by registering as one, and start
                  making online courses. This website is for practice purpose
                  only, so please do not provide any personal information, such
                  as credit card numbers.
                </p>
                <button className="btn btn-outline-secondary" type="button">
                  Login or Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomeComponent;
