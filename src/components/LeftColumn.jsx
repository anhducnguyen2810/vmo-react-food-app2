import React from "react";
import PromoCodes from "./PromoCodes";
import CurrencyConverter from "./CurrencyConverter";
import ProductFilter from "../components/ProductFilter/Index";

const LeftColumn = () => {
  return (
    <React.Fragment>
      <div className={"container shop-left-column py-2"}>
        <PromoCodes showText>
          {/*shown only if there are no promocodes set*/}
          <div>
            <h5>Món mới</h5>
            <p>
             Món mới đã được bổ sung. Lựa chọn thực đơn ngay để không bỏ lỡ những điều tuyệt vời nhé.
            </p>
          </div>
        </PromoCodes>
        <hr />
        <div>
          <CurrencyConverter showLabel />
        </div>
      </div>
      <ProductFilter />
    </React.Fragment>
  );
};

export default LeftColumn;
