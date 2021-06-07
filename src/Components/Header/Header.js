import React from "react";
import { Col, Row } from "antd";
import "./style.css";
const Header = () => {
  return (
    <div className="header__container">
      <Row
        justify="space-around"
        align="middle"
        // style={{ display: "flex", flexDirection: "row" }}
      >
        <Col span={4}>خانه</Col>
        <Col span={4}>لیست محصولات</Col>
      </Row>
    </div>
  );
};

export default Header;
