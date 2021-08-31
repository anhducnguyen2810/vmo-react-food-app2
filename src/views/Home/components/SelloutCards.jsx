import React from "react";

const SelloutCards = () => {
  let cardsData = [
    {
      image: "money.png",
      title: "Giá rẻ nhất",
      description:
        "Ở đời, nhịn không bao giờ nhục… mà nhịn là đói",
    },
    {
      image: "truck.png",
      title: "Miễn phí giao hàng",
      description:
        "Miễn phí giao hàng cho đơn trên 150k.",
    },
    {
      image: "check-circle.png",
      title: "Dịch vụ tốt nhất",
      description:
        "Hãy hết mình với khách – khách sẽ hết tiền với bạn.",
    },
  ];

  function generateSelloutCards() {
    return cardsData.map((card, index) => {
      return (
        <div className="card sellout-card card-body shadow" key={index}>
          <img
            className="sellout-icon"
            src={require(`../../../assets/icons/${card.image}`)}
            alt="img"
          />
          <div className="mt-3 text-center">
            <h5 className="sellout-title">{card.title}</h5>
            <p className="text-muted">{card.description}</p>
          </div>
        </div>
      );
    });
  }
  return (
    <div className="container sellout-section mb-4">
      {generateSelloutCards()}
    </div>
  );
};

export default SelloutCards;
