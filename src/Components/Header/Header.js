import "./Header.css";

import { AppstoreOutlined, MailOutlined } from "@ant-design/icons";
import { Col, Menu, Row } from "antd";
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
          <Menu.Item
            key="home"
            icon={<MailOutlined />}
            className="header-items"
          >
            <Link to="/">خانه</Link>
          </Menu.Item>
          <Menu.Item
            key="productList"
            icon={<AppstoreOutlined />}
            className="header-items"
          >
            <Link to="/productList">لیست محصولات</Link>
          </Menu.Item>
          <Menu.Item
            key="orderTracking"
            icon={<AppstoreOutlined />}
            className="header-items"
          >
            <Link to="/orderTracking">پیگیری سفارشات</Link>
          </Menu.Item>
        </Col>
        <Col span={5} className="header-logo">
          {/* <span style={{ verticalAlign: "text-top", marginRight: "5px" }}>
            K A F S H
          </span>
          <img
            src="/images/logo2.png"
            style={{ width: "100px", height: "60px" }}
            alt="logo"
          />
          <span style={{ verticalAlign: "text-top", marginLeft: "2px" }}>
            D O Z A K
          </span> */}
          <img src="/images/header-logo.PNG" alt="header-logo" />
        </Col>
        <Col span={10} className="header-cols">
          <Menu.Item
            key="howToOrder"
            icon={<AppstoreOutlined />}
            className="header-items"
          >
            <Link to="/howToOrder">نحوه سفارش</Link>
          </Menu.Item>
          <Menu.Item
            key="articles"
            icon={<AppstoreOutlined />}
            className="header-items"
          >
            <Link to="/articles">مقالات</Link>
          </Menu.Item>
          <Menu.Item
            key="aboutUs"
            icon={<AppstoreOutlined />}
            className="header-items"
          >
            <Link to="/aboutUs">درباره ما</Link>
          </Menu.Item>
          <Menu.Item
            key="connection"
            icon={<AppstoreOutlined />}
            className="header-items"
          >
            <Link to="/connection">تماس با ما</Link>
          </Menu.Item>
        </Col>
      </Row>
    </Menu>
  );
};

export default Header;
