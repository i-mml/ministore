import "./Home.css";

import { Col, Row } from "antd";

import React from "react";

const Home = () => {
  return (
    <>
      <div className="home-starter">
        <div className="home-starter-bg"></div>
        <Row className="home-starter-content">
          <Col span={24} style={{ marginBottom: "20px" }}>
            <h2 style={{ color: "white" }}>به بوتیک کفشدوزک خوش آمدید</h2>
          </Col>
          <Col span={24}>
            شما میتوانید هر جنس ، مدل ، سایز و رنگ کفشی را در کفش دوزک شوز تهیه
            کنین
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Home;
