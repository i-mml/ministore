import "./OrderTracking.css"

import { Col, Row } from "antd";

import React from "react";

const OrderTracking = () => {
  return (
    <>
      <div className="orderTracking-container">
        <Row>
          <h1 className="orderTracking-header">پیگیری سفارش:</h1>
        </Row>
        <form className="orderTracking-form">
          <Row  justify="space-around" >
             <Col span={4}> <label>نام:</label></Col>
             <Col span={16}>
            <input
              placeholder="نام و نام خانودگی شما ..."
              type="name"
              className="name-orderTracking"
            />
            </Col>
          </Row>
          <br />
          <Row clas justify="space-around" >
             <Col span={4}> <label>رمز ورود :</label></Col>
             <Col span={16}>
            <input
              placeholder="رمز ورود خود را وارد کنید"
              type="password"
              className="password-orderTracking"
            />
            </Col>
          </Row>
          <br />
          <Row  justify="space-around" >
             <Col span={4}> <label>کد خرید خود را وارد کنید:</label></Col>
             <Col span={16}>
            <input placeholder="کد خرید شما ..." type="text" className="text-orderTracking" />
            </Col>
          </Row>
          <br />
          <Row justify="center" align="middle">
            <button type="submit" className="orderTracking-submit">
              ثبت
            </button>
            <button type="button" className="orderTracking-cancel">انصراف</button>
          </Row>
        </form>
      </div>
    </>
  );
};

export default OrderTracking;
