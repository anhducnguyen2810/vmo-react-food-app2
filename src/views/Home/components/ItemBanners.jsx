import React from "react";
import { NavLink } from "react-router-dom";

const ItemBanners = () => {
  let itemData = [
    {
      image: "bua-trua.jpg",
      title: "Bữa trưa nhanh gọn",
      text: `Tiện lợi`,
      link: "/category/drink",
      percentage: "30",
    },
    {
      image: "bua-toi.jpg",
      title: "Bữa tối no nê",
      text: `Nhiều hơn`,
      link: "/category/burger",
      percentage: "50",
    },
  ];
  function generateItemBanners() {
    return itemData.map((item, index) => {
      return (
        <div className="item-container shadow" key={index}>
          <div className="item-content">
            <p className="item-banner-title my-1">{item.title}</p>
            <h4 className="mb-3">
              {item.text} <br /> Up to {item.percentage}%
            </h4>
            <NavLink className="btn btn-primary btn-sm" to={item.link} exact>
              Xem món
            </NavLink>
          </div>
          <img
            className="banner-image"
            src={require(`../../../assets/images/${item.image}`)}
            alt="banner"
          />
        </div>
      );
    });
  }
  return (
    <div className="container item-banners mb-4">{generateItemBanners()}</div>
  );
};

export default ItemBanners;
