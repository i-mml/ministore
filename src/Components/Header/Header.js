import "./Header.css";

import { Col, Menu, Row } from "antd";
import {
  DropboxOutlined,
  HomeOutlined,
  PhoneOutlined,
  QuestionCircleOutlined,
  QuestionOutlined,
  SnippetsOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";

import { Link } from "react-router-dom";

const Header = () => {
  const [state, setState] = useState();

  const handleClick = (e) => {
    setState(e.key);
  };

  return (
    <Menu
      onClick={(e) => handleClick(e)}
      selectedKeys={state}
      mode="horizontal"
      className="header-container"
    >
      <Row justify="space-between" align="middle">
        <Col span={8} className="header-cols">
          <Menu.Item key="home" className="header-items">
            <Link to="/">
              <HomeOutlined />
              <span className="mr-1">خانه</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="productList" className="header-items">
            <Link to="/productList">
              <UnorderedListOutlined />
              <span className="mr-1">لیست محصولات</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="orderTracking" className="header-items">
            <Link to="/orderTracking">
              <DropboxOutlined />
              <span className="mr-1">پیگیری سفارشات</span>
            </Link>
          </Menu.Item>
        </Col>
        <Col span={5} className="header-logo">
          <img src="/images/header-logo.PNG" alt="header-logo" />
        </Col>
        <Col span={10} className="header-cols">
          <Menu.Item key="howToOrder" className="header-items">
            <Link to="/howToOrder">
              <QuestionCircleOutlined />
              <span className="mr-1">نحوه سفارش</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="articles" className="header-items">
            <Link to="/articles">
              <SnippetsOutlined />
              <span className="mr-1">مقالات</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="aboutUs" className="header-items">
            <QuestionOutlined />
            <Link to="/aboutUs">درباره ما</Link>
          </Menu.Item>
          <Menu.Item key="connection" className="header-items">
            <PhoneOutlined />
            <Link to="/connection">ارتباط با ما</Link>
          </Menu.Item>
        </Col>
      </Row>
    </Menu>
  );
};

export default Header;
