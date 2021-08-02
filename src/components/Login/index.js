import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useHistory } from "react-router-dom";


const Login = () => {
  const history = useHistory();

  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");

  const userNameChange = (event) => {
    setUserName(event.target.value);
  };

  const passWordChange = (event) => {
    setPassWord(event.target.value);
  };

  const checkUser = (serverUsers, formData) => {
    const user = serverUsers.find(
      (user) =>
        user.userName === formData.userName &&
        user.passWord === formData.passWord
    );
    if (user) return user;
  };
  const notify = (message) => toast(message);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user2 = {
      userName: userName,
      passWord: passWord,
    };
    const user = await axios
      .get("http://localhost:3000/signup")
      .then((res) => checkUser(res.data, user2));

    if (user) {
      notify("You successfully logged in");
      localStorage.setItem("username", user2.userName);
      history.push("/");
    } else {
      notify("Username and password do not match");
    }
  };
  return (
    
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={handleSubmit}>
            <h3>Log In</h3>

            <div className="form-group">
              <label>username</label>
              <input
                defaultValue={userName}
                type="text"
                className="form-control"
                placeholder="user name"
                onChange={userNameChange}
              />
            </div>

            <div className="form-group">
              <label>password</label>
              <input
                defaultValue={passWord}
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={passWordChange}
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              log in
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>
    
  );
};
export default Login;