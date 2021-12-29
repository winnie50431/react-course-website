import React, { useState } from "react";
import { useHistory } from "react-router";
import CourseService from "../services/course.service";

const PostCourseComponent = (props) => {
  let { currentUser, setCurrentUser } = props;
  /* to set the details of course */
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [price, setPrice] = useState(0);

  /* to show error message */
  let [message, setMessage] = useState("");

  /* if did not login, redirect to Login-page */
  const history = useHistory();
  const handleTakeToLogin = () => {
    history.push("/login");
  };

  /* to set the details of course */
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };

  /* Post Course */
  const handlePost = () => {
    CourseService.post(title, description, price)
      .then(() => {
        window.alert("New course has been created.");
        history.push("/course");
      })
      .catch((error) => {
        console.log(error.response);
        setMessage(error.response.data);
      });
  };

  return (
    <div style={{ padding: "3rem" }}>
      {/* to show error message */}
      {message && <p className="alert alert-danger">{message}</p>}

      {/* check if a user is logged-in */}
      {!currentUser && (
        <div>
          <p>You must login before seeing your courses.</p>
          <button
            onClick={handleTakeToLogin}
            className="btn btn-primary btn-lg"
          >
            Take me to login page;
          </button>
        </div>
      )}

      {/* check if a user is an instructor */}
      {currentUser && currentUser.user.role !== "instructor" && (
        <div>
          <h1>Only instructors can post new courses.</h1>
        </div>
      )}

      {/* To input the details of course */}
      {currentUser && currentUser.user.role === "instructor" && (
        <div>
          {/*  */}
          {/* Title: start */}
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Title
            </label>
            <input
              onChange={handleChangeTitle}
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          {/* Title: end */}
          {/* Description: start */}
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              description
            </label>
            <textarea
              onChange={handleChangeDescription}
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          {/* Description: end */}
          {/* Price: start */}
          <div class="input-group mb-3">
            <label for="" class="col-sm-2 col-form-label">
              Price
            </label>
            <span class="input-group-text">$</span>
            <input
              onChange={handleChangePrice}
              type="text"
              class="form-control"
              aria-label="Amount (to the nearest dollar)"
            />
            <span class="input-group-text">.00</span>
          </div>
          {/* Price: end */}
          <button onClick={handlePost} className="btn btn-primary">
            Post
          </button>
        </div>
      )}
    </div>
  );
};

export default PostCourseComponent;
