import "./ProductList.css";

import { Col, Row } from "antd";

import ProductCard from "../../Components/ProductCard/ProductCard";
import React from "react";

const ProductList = () => {
  const productItems = [
    {
      name: "sneakers",
      image: "articles5.jpg",
      sizes: "39 - 40 - 41 -42 - 43 -44",
      material: "چرم",
      roof: "پلاستیکی",
      color: "مشکی - سفید - آبی - طوسی",
      price: "128/000",
      code: "p123",
    },
    {
      name: "rebook",
      image: "articles6.jpg",
      sizes: "41 -42 - 43 -44",
      material: "چرم",
      roof: "پلاستیکی",
      color: "مشکی - سفید - آبی - طوسی",
      price: "128/000",
      code: "320",
    },
    {
      name: "sneakers",
      image: "articles5.jpg",
      sizes: "39 - 40 - 41 -42 - 43 -44",
      material: "چرم",
      roof: "پلاستیکی",
      color: "مشکی - سفید - آبی - طوسی",
      price: "128/000",
      code: "459",
    },
    {
      name: "rebook",
      image: "articles6.jpg",
      sizes: "41 -42 - 43 -44",
      material: "چرم",
      roof: "پلاستیکی",
      color: "مشکی - سفید - آبی - طوسی",
      price: "128/000",
      code: "1274",
    },
    {
      name: "sneakers",
      image: "articles5.jpg",
      sizes: "39 - 40 - 41 -42 - 43 -44",
      material: "چرم",
      roof: "پلاستیکی",
      color: "مشکی - سفید - آبی - طوسی",
      price: "128/000",
      code: "141",
    },
    {
      name: "rebook",
      image: "articles6.jpg",
      sizes: "41 -42 - 43 -44",
      material: "چرم",
      roof: "پلاستیکی",
      color: "مشکی - سفید - آبی - طوسی",
      price: "128/000",
      code: "963",
    },
    {
      name: "rebook",
      image: "articles6.jpg",
      sizes: "41 -42 - 43 -44",
      material: "چرم",
      roof: "پلاستیکی",
      color: "مشکی - سفید - آبی - طوسی",
      price: "128/000",
      code: "435",
    },
  ];

  return (
    <>
      <div className="productlist-container">
        <Row align="middle" justify="space-around">
          {productItems.map((productItem) => (
            <ProductCard productItem={productItem} />
          ))}
        </Row>
      </div>
    </>
  );
};

export default ProductList;
