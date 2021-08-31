import React from "react";
import { NavLink } from "react-router-dom";

const Deal = () => {
  const deal = {
    image: "ga-ran.jpg",
    title: "Gà rán cay giòn",
    text:
      "Thả ga ăn gà rán với nhiều combo ưu đãi & giao hàng miễn phí! Đặt ngay Gà Giòn Vui Vẻ. Mỳ Ý Sốt Bò Bằm. Gà Sốt Cay và khoai tây chiên nào!",
    link: "/category/chiken",
  };
  return (
    <div className="container deals-contaner mb-4">
      <div className="deals-content shadow">
        <img
          className="deals-image"
          src={require(`../../../assets/images/${deal.image}`)}
          alt="#"
        />
        <div className="deals-text">
          <div className="heading-block">
            <h1 className="deals-title mb-4">{deal.title}</h1>
            <p className="text mb-4">{deal.text}</p>
            <NavLink className="btn btn-primary btn" to={deal.link} exact>
              Thực đơn
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deal;
