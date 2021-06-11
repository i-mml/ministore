import React from "react";
import "./Connection.css";
import { Row, Col } from "antd";

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
    </>
  );
};

export default Connection;
