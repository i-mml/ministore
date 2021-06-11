import "./AboutUs.css";

import { Col, Row } from "antd";

import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="home_container">hello here is the about us page</div>
      {/* <Row>
        <Col span={24}>
        <form className="about_form">
          <h2>Contact us</h2>
          <label for="email">Enter your name :</label>
          <input
            placeholder="write your name"
            type="name"
            id="name"
            name="name"
            className="name"
            minLength="3"
          />
          <br />
          <label for="email">Enter your email :</label>
          <input
            placeholder="example@email.com"
            type="email"
            id="email"
            name="email"
            className="email"
          />
          <br />
          <label for="email">Enter your text :</label>
          <input
            placeholder="write your text ..."
            type="text"
            id="text"
            name="text"
            className="text"
          />
          <br />
          <button className="submit_btn" type="submit">
            submit
          </button>
        </form>
        </Col>
      </Row> */}
    </>
  );
};

export default AboutUs;
