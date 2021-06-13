import "./HowToOrder.css";

import { Col, Row } from "antd";

import React from "react";

const HowToOrder = () => {
  return (
    <>
      <div className="HowToOrder-container">
        <Row>
          <h1>نحوه سفارش</h1>
        </Row>
        <Row>
          <div className="how-texts">
            برای سفارش از سایت کفشدوزک به صورت زیر عمل کنید :
          </div>
        </Row>

        <Row>
          <div className="how-texts">
            ابتدا به صفحه لیست محصولات مراجعه کنید
          </div>
        </Row>

        <Row justify="center">
          <Col span={12}>
            <img src="/images/screen-tab.PNG" className="screenshot-row" />
          </Col>
        </Row>
        <Row>
          <div className="how-texts">سپس محصول مورد نظر را انتخاب کرده</div>
        </Row>

        <Row justify="center">
          <Col span={10}>
            <img src="/images/screen-product.PNG" className="screenshot" />
          </Col>
        </Row>
        <Row>
          <div className="how-texts">
            سپس کد محصول مورد نظر خود را از قسمت توضیحات محصول انتخاب کرده
          </div>
        </Row>
        <Row justify="center">
          <Col span={10}>
            <img src="/images/screen-code.PNG" className="screenshot" />
          </Col>
        </Row>
        <Row>
          <div className="how-texts">
            و به واتس اپ به شماره 09125482000 ارسال کنید
          </div>
        </Row>
        <Row justify="center" className="mt-4">
          <Col span={14}>
            <img src="/images/screen-user.PNG" className="screenshot-row2" />
          </Col>
        </Row>
        <Row>
          <div className="how-texts">
            همکاران ما در اسرع وقت پاسخگو شما خواهند بود
          </div>
        </Row>
        <Row justify="center">
          <div className="how-header">با تشکر از حسن انتخاب شما</div>
        </Row>
      </div>
    </>
  );
};

export default HowToOrder;
