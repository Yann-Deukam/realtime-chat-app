import React, { useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    toast.success("Hello");
  };
  return (
    <div className="login">
      <div className="item">
        <h2>Welcome back</h2>
        <form action="">
          <input type="text" placeholder="Enter Email" name="email" />
          <input type="password" placeholder="Enter password" name="password" />
          <button>Login</button>
        </form>
      </div>
      <div className="seperator"></div>
      <div className="item">
        <h2>Create account</h2>
        <form action="" onSubmit={handleLogin}>
          <label htmlFor="file">
            <img src={avatar.url || "./avatar.png"} alt="" />
            Upload an image
          </label>
          <input
            type="file"
            id="file"
            className="hidden"
            onChange={handleAvatar}
          />
          <input type="text" placeholder="Enter a username" name="username" />
          <input type="text" placeholder="Enter an Email" name="email" />
          <input
            type="password"
            placeholder="Enter a password"
            name="password"
          />
          <button>Sign-up</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
