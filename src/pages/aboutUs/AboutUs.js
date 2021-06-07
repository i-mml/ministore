import "./AboutUs.css";

import { Col, Row } from "antd";

import React from "react";

const AboutUs = () => {
  return (
    <>
      <Row className="about_card_box">
        <Col span={5} className="about_card">
          <img
            src="/images/instagram.png"
            className="social_img"
            alt="social-media"
          />
          <p>
            شما میتوانید جدید ترین محصولات و اخبار مربوط به فروشگاه را از شبکه
            اجتماعی اینستاگرام دنبال کنید
          </p>
          <a href="https://instagram.com">instagram</a>
        </Col>

        <Col span={5} className="about_card">
          <img
            src="/images/twitter.png"
            className="social_img"
            alt="social-media"
          />
          <p>
            شما میتوانید اخبار مربوط به فروشگاه را از طریق شبکه اجتماعی توییتر
            دنبال کنید
          </p>
          <a href="https://twitter.com">twitter</a>
        </Col>

        <Col span={5} className="about_card">
          <img
            src="/images/telegram.png"
            className="social_img"
            alt="social-media"
          />
          <p>
            شما میتوانید محصولات و اخبار مربوط به فروشگاه را از شبکه اجتماعی
            تلگرام دنبال کنید
          </p>
          <a href="https://telegram.com">telegram</a>
        </Col>
        <Col span={5} className="about_card">
          <img
            src="/images/youtube.jpg"
            className="social_img"
            alt="social-media"
          />
          <p>
            شما میتوانید محتوای درج شده در یوتیوب توسط فروشگاه را از لینک زیر
            دنبال کنید
          </p>
          <a href="https://youtube.com">youtube</a>
        </Col>
      </Row>
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
