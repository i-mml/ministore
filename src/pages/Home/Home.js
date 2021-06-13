import "./Home.css";

import { Carousel, Col, Divider, Row } from "antd";

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
      <div className="home-body">
        <Divider>تخفیفات فصلی</Divider>
        <Row justify="space-around" className="carousel-box">
          <Col span={19} className="carousel">
            <Carousel autoplay>
              <img src="/images/offer1.jpg" className="carousel-img" />
              <img src="/images/offer2.jpg" className="carousel-img" />
              <img src="/images/offer4.jpg" className="carousel-img" />
            </Carousel>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Home;
