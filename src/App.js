import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
// Components
import NavComponent from "./components/nav-component";
import FooterComponent from "./components/footer-component";
// Pages
import HomeComponent from "./components/home-component";
import RegisterComponent from "./components/register-component";
import LoginComponent from "./components/login-component";
import ProfileComponent from "./components/profile-component";
import CourseComponent from "./components/course-component";
import PostCourseComponent from "./components/postCourse-component";
import EnrollComponent from "./components/enroll-component";
// Service
import AuthService from "./services/auth.service";

function App() {
  let [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());
  // let [currentUser, setCurrentUser] = useState("admin");

  return (
    <div>
      {/* Confirm the permissions of different users */}
      <NavComponent currentUser={currentUser} setCurrentUser={setCurrentUser} />

      <Switch>
        <Route path="/" exact>
          <HomeComponent />
        </Route>

        <Route path="/register" exact>
          <RegisterComponent />
        </Route>

        <Route path="/login" exact>
          <LoginComponent
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
          />
        </Route>

        <Route path="/profile" exact>
          <ProfileComponent
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
          />
        </Route>

        <Route path="/course" exact>
          <CourseComponent
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
          />
        </Route>

        <Route path="/postCourse" exact>
          <PostCourseComponent
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
          />
        </Route>

        <Route path="/enroll" exact>
          <EnrollComponent
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
          />
        </Route>
      </Switch>
      <FooterComponent />
    </div>
  );
}

export default App;
