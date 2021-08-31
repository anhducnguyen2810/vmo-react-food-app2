import React from "react";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <React.Fragment>
      <div className={"text-center"}>
        <h3 className={"text-success"}>Thành công!</h3>
        <h5 className={"py-4"}>
          Xác nhận đơn hàng. Cảm ơn bạn rất nhiều.
        </h5>
        <Link className="btn btn-lg shop-btn-secondary checkout" to={"/"}>
          Tiếp tục chọn món
        </Link>
        <div className={"text-muted py-3"}>
          check your order object in your console
        </div>
      </div>
    </React.Fragment>
  );
};

export default OrderSuccess;
