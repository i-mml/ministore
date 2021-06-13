import "./ProductCard.css";

import { Col, Divider, Row } from "antd";

import React from "react";

const ProductCard = ({ productItem }) => {
  return (
    <Col span={7} className="card-box">
      <Row justify="center" className="card-image-box">
        <img
          src={`/images/${productItem.image}`}
          alt="product-image"
          className="card-image"
        />
      </Row>
      <Row justify="start" className="card-body">
        <Col span={9} className="card-body-title">
          <span>نام محصول :</span>
        </Col>
        <Col span={15} className="card-body-value">
          <h3>{productItem.name}</h3>
        </Col>
        <Col span={9} className="card-body-title">
          <span>جنس محصول :</span>
        </Col>
        <Col span={15} className="card-body-value">
          <h3>{productItem.material}</h3>
        </Col>

        <Col span={9} className="card-body-title">
          <span>کفی محصول :</span>
        </Col>
        <Col span={15} className="card-body-value">
          <h3>{productItem.roof}</h3>
        </Col>

        <Col span={9} className="card-body-title">
          <span>سایز موجود محصول :</span>
        </Col>
        <Col span={15} className="card-body-value">
          <h3>{productItem.sizes}</h3>
        </Col>
        <Col span={9} className="card-body-title">
          <span>رنگ موجود محصول :</span>
        </Col>
        <Col span={15} className="card-body-value">
          <h3>{productItem.color}</h3>
        </Col>
        <Col span={9} className="card-body-title">
          <span>کد محصول :</span>
        </Col>
        <Col span={15} className="card-body-value">
          <h3>{productItem.code}</h3>
        </Col>
        <Divider style={{ marginTop: "5px !important" }} />
        <Col span={9} className="card-body-price-title">
          <span>قیمت محصول :</span>
        </Col>
        <Col span={15} className="card-body-price-value">
          <span>{productItem.price + "تومان"}</span>
        </Col>
      </Row>
    </Col>
  );
};

export default ProductCard;
