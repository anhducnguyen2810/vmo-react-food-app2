import React from "react";
import { NavLink } from "react-router-dom";

const FooterLinks = () => {
  return (
    <div className="footer-contaner">
      <div>
        <h5>Về chúng tôi</h5>
        <ul className="list-unstyled text-small">
          <li>
            <NavLink to="/">Cửa hàng</NavLink>
          </li>
          <li>
            <NavLink to="/">Địa điểm</NavLink>
          </li>
          <li>
            <NavLink to="/">Liên Hệ</NavLink>
          </li>
          <li>
            <NavLink to="/">Giờ mở cửa</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <h5>Hữu ích cho bạn</h5>
        <ul className="list-unstyled text-small">
          <li>
            <NavLink to="/">Giúp đỡ</NavLink>
          </li>
          <li>
            <NavLink to="/">Chính sách</NavLink>
          </li>
          <li>
            <NavLink to="/">Điều khoản</NavLink>
          </li>
          <li>
            <NavLink to="/">Đặt câu hỏi</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <h5>Dịch vụ khách hàng</h5>
        <ul className="list-unstyled text-small">
          <li>
            <NavLink to="/">Phương thức thanh toán</NavLink>
          </li>
          <li>
            <NavLink to="/">Đổi trả</NavLink>
          </li>
          <li>
            <NavLink to="/">Góp ý</NavLink>
          </li>
          <li>
            <NavLink to="/">Giao hàng</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <h5>Cộng đồng</h5>
        <ul className="list-unstyled text-small">
          <li>
            <NavLink to="/">Twitter</NavLink>
          </li>
          <li>
            <NavLink to="/">Facebook</NavLink>
          </li>
          <li>
            <NavLink to="/">Instagram</NavLink>
          </li>
          <li>
            <NavLink to="/">Email</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterLinks;
