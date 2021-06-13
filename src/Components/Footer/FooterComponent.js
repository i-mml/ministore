import "./Footer.css";

import { Col, Row } from "antd";
import {
  CopyrightOutlined,
  DropboxOutlined,
  HomeOutlined,
  PhoneOutlined,
  QuestionCircleOutlined,
  SnippetsOutlined,
  UnorderedListOutlined,
  VerticalRightOutlined,
} from "@ant-design/icons";

import { Link } from "react-router-dom";
import React from "react";

const FooterComponent = () => {
  return (
    <div className="footer-container-cus">
      <Row>
        <Col>
          <h2 className="footer-head-name">
            <Link to="/">k A F S H D O Z A K</Link>
          </h2>
        </Col>
      </Row>
      <Row className="footer-link-list" justify="center">
        <Col span={4}>
          <Row className="mb-5">
            <Link to="/">
              <HomeOutlined />
              <span className="mr-1">خانه</span>
            </Link>
          </Row>
          <Row className="mb-5">
            <Link to="/productList">
              <UnorderedListOutlined />
              <span className="mr-1">لیست محصولات</span>
            </Link>
          </Row>
          <Row className="mb-5">
            <Link to="/orderTracking">
              <DropboxOutlined />
              <span className="mr-1">پیگیری سفارشات</span>
            </Link>
          </Row>
        </Col>
        <Col span={4}>
          <Row className="mb-5">
            <Link to="/connection">
              <VerticalRightOutlined />
              <span className="mr-1">ارتباط با ما</span>
            </Link>
          </Row>
          <Row className="mb-5">
            <Link to="/articles">
              <SnippetsOutlined />
              <span className="mr-1">مقالات</span>
            </Link>
          </Row>
          <Row className="mb-5">
            <Link to="/howToOrder">
              <QuestionCircleOutlined />
              <span className="mr-1">نحوه سفارش</span>
            </Link>
          </Row>
        </Col>
      </Row>
      <Row justify="center" align="middle">
        <Col span={7} style={{ color: "white !important" ,alignItems:"center"}}>
          <CopyrightOutlined style={{ color: "white" ,marginLeft:"3px"}} />
          <span className="end-span">
            تمامی حقوق این سایت متعلق به کفشدوزک میباشد.
          </span>
        </Col>
      </Row>
    </div>
  );
};

export default FooterComponent;
