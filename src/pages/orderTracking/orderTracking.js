import "./OrderTracking.css";

import { Col, Row } from "antd";
import React, { useState } from "react";

const OrderTracking = () => {
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  return (
    <>
      <div className="orderTracking-container">
        <Row>
          <h1 className="orderTracking-header">پیگیری سفارش:</h1>
        </Row>
        <form className="orderTracking-form">
          <Row justify="space-around">
            <Col span={4}>
              <label>نام:</label>
            </Col>
            <Col span={16}>
              <input
                placeholder="نام و نام خانودگی شما ..."
                type="name"
                className="name-orderTracking"
                onChange={(e) => setName(e.target.value)}
              />
            </Col>
          </Row>
          <br />
          <Row justify="space-around">
            <Col span={4}>
              <label>کد خرید خود را وارد کنید:</label>
            </Col>
            <Col span={16}>
              <input
                placeholder="کد خرید شما ..."
                type="text"
                className="text-orderTracking"
                onChange={(e) => setCode(e.target.value)}
              />
            </Col>
          </Row>
          <br />
          <Row justify="center" align="middle">
            <button
              type="submit"
              className="orderTracking-submit"
              onClick={() =>
                alert(
                  "آقا/خانم" +
                    " " +
                    name +
                    "سفارش شما به کد" +
                    " " +
                    code +
                    " " +
                    "آماده ارسال میباشد تا 3 روز دیگر بسته ی خود را تحویل خواهید گرفت ممنون از شکیبایی شما"
                )
              }
            >
              ثبت
            </button>
            <button type="button" className="orderTracking-cancel">
              انصراف
            </button>
          </Row>
        </form>
      </div>
    </>
  );
};

export default OrderTracking;
