import React from "react";

const NewsLetter = () => {
  return (
    <div className="newsletter-contaner mt-2">
      <h5>Bạn lần đầu ghé qua?</h5>
      <p className="text-muted">
        Đăng kí để nhận thông tin về món mới và chương trình giảm giá!
      </p>
      <div className="input-contaner mt-2">
        <div className="input-group">
          <input
            type="email"
            className="form-control"
            placeholder="Nhập Email"
          />
          <div className="input-group-append">
            <button
              className="btn btn-primary"
              type="button"
              id="button-addon2"
            >
              Đăng kí
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
