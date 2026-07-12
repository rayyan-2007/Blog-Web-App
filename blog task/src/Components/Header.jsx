import React from "react";

const Header = ({toggleMenu}) => {

  return (
    <div className="header-container">
      <div className="container">
        <i className="blog-logo fa-brands fa-wordpress"></i>

        <h3>Blog</h3>

        <div className="btn">
          <button className="bar" onClick={toggleMenu}>
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>

        <div className="input-container">
          <input type="text" placeholder="What do you want to read?" />
          <i className="logo fa-brands fa-sistrix"></i>
        </div>

        <div className="sign-container">
          <h4>Sign in</h4>
        </div>
      </div>
    </div>
  );
}

export default Header