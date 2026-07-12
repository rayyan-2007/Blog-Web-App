import React from "react";

const Header = ({toggleMenu}) => {

  return (
    <div className="header-container">
      <div className="container">
        <h1>
          <i
            className="blog-logo
          fa-brands fa-wordpress"
          ></i>
        </h1>

        <div className="input-container">
          <h3>Blog</h3>

          <button className="bar" onClick={toggleMenu}>
            <i className=" bars fa-solid fa-bars"></i>
          </button>

        
            <input type="text" placeholder="What do you want to read?" />
            <p className="logo">
              <i className="fa-brands fa-sistrix"></i>
            </p>
          

        </div>
      </div>

      <div className="sign-container">
        <h4>Sign in</h4>
      </div>
    </div>
  );
}

export default Header