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
<<<<<<< HEAD
            <h2 style={{ color: "white" }}>به بوتیک کفشدوزک خوش آمدید</h2>
=======
            <h2 style={{ color: "white" }}>به بوتیک کفش دوزک خوش آمدید</h2>
>>>>>>> 62515f31ea8e06b55026d38de69cf8e14cf30c51
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
