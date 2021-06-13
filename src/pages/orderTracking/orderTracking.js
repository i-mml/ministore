import { Col, Row } from "antd";

import React from "react";

const orderTracking = () => {
  return (
    <>
      <div className="orderTracking-container">
        <div className="orderTracking-bg"></div>
        <Row>
        <div className="div-inputs">
        <Col span={24}> 
        <form className="about_form">
          <h1 className="mb-5">پیگیری سفارش:</h1>
          <label >نام:</label>
          <input
            placeholder="نام و نام خانودگی شما ..."
            type="name"
            className="name"
          />
          <br />
          <label >رمز ورود :</label>
          <input
            placeholder="رمز ورود خود را وارد کنید"
            type="password"
            className="password"
          />
          <br />
          <label >کد خرید خود را وارد کنید:</label>
          <input
            placeholder="کد خرید شما ..."
            type="text"
            className="text"
          />
          <br />
          <button className="submit_btn" type="submit" >
            ثبت 
          </button>
          <button type="button">
                انصراف
              </button>
        </form>
        </Col>
        
        </div>
        </Row>
      </div>
    </>
  );
};

export default orderTracking;
