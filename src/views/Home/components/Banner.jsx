import React from "react";
import { NavLink } from "react-router-dom";

const Banner = () => {
  const banner = {
    image: "mon-trong-ngay.jpg",
    title: "Món trong ngày",
    text:
      "Rẻ như bèo, nghèo cũng có tiền mua. Ăn là mê – chê không tính tiền ",
    link: "/all",
  };
  return (
    <div className="container main-banner-container my-4">
      <div className="main-banner-content">
        <div className="main-banner-text">
          <h4 className="display-4 main-banner-title">{banner.title}</h4>
          <p className="lead">{banner.text}</p>
          <p>
            <NavLink className="btn btn-primary btn-lg" to={banner.link} exact>
              Thực đơn
            </NavLink>
          </p>
        </div>
        <img
          className="main-banner-image"
          src={require(`../../../assets/images/${banner.image}`)}
          alt="banner"
        />
      </div>
    </div>
  );
};

export default Banner;
