import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const PromoCodes = (props) => {
  return props.promoCodeProps.length > 0 ? (
    <div>
      {props.showText ? (
        <span>
          <h5>Phiếu giảm giá</h5>
          <p> Sử dụng các mã khuyến mãi sau đây để nhận được giảm giá ngay</p>
        </span>
      ) : null}
      <ul className="list-group list-group-flush">
        {props.promoCodeProps.map((promoCode, index) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            key={index}
          >
            <span className={"shop-text-red"}>{promoCode.code}</span>
            <span className="badge badge-light badge-pill">
              {promoCode.percentage}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    props.children
  );
};

PromoCodes.propTypes = {
  promoCodeProps: PropTypes.array,
  showText: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    promoCodeProps: state.promoCode,
  };
};

export default connect(mapStateToProps)(PromoCodes);
