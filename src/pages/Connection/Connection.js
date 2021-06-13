import "./Connection.css";

import { Col, Row } from "antd";

import React from "react";

const Connection = () => {
  return (
    <>
      <Row className="connection_card_box">
        <Col span={5} className="connection_card">
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

        <Col span={5} className="connection_card">
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

        <Col span={5} className="connection_card">
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
        <Col span={5} className="connection_card">
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

      <Row className="contactUs">
        <div className="div-inputs">
        <Col span={24}> 
        <form className="about_form">
          <h1 className="mb-5">تماس با ما :</h1>
          <label >نام:</label>
          <input
            placeholder="نام خود را وارد کنید ..."
            type="name"
            className="name"
          />
          <br />
          <label >ایمیل خود را وارد کنید :</label>
          <input
            placeholder="example@email.com"
            type="email"
            className="email"
          />
          <br />
          <label >متن خود را وارد کنید:</label>
          <input
            placeholder="درخواست شما ..."
            type="text"
            className="text"
          />
          <br />
          <button className="submit_btn" type="submit">
            ثبت 
          </button>
        </form>
        </Col>
        </div>
      </Row> 
    </>
  );
};

export default Connection;
