import "./ProductList.css";

import React from "react";
import { Col, Row } from "antd";
import ProductCard from "../../Components/ProductCard/ProductCard";

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
    },
    {
      name: "rebook",
      image: "articles6.jpg",
      sizes: "41 -42 - 43 -44",
      material: "چرم",
      roof: "پلاستیکی",
      color: "مشکی - سفید - آبی - طوسی",
      price: "128/000",
    },
    {
      name: "sneakers",
      image: "articles5.jpg",
      sizes: "39 - 40 - 41 -42 - 43 -44",
      material: "چرم",
      roof: "پلاستیکی",
      color: "مشکی - سفید - آبی - طوسی",
      price: "128/000",
    },
    {
      name: "rebook",
      image: "articles6.jpg",
      sizes: "41 -42 - 43 -44",
      material: "چرم",
      roof: "پلاستیکی",
      color: "مشکی - سفید - آبی - طوسی",
      price: "128/000",
    },
    {
      name: "sneakers",
      image: "articles5.jpg",
      sizes: "39 - 40 - 41 -42 - 43 -44",
      material: "چرم",
      roof: "پلاستیکی",
      color: "مشکی - سفید - آبی - طوسی",
      price: "128/000",
    },
    {
      name: "rebook",
      image: "articles6.jpg",
      sizes: "41 -42 - 43 -44",
      material: "چرم",
      roof: "پلاستیکی",
      color: "مشکی - سفید - آبی - طوسی",
      price: "128/000",
    },
    {
      name: "rebook",
      image: "articles6.jpg",
      sizes: "41 -42 - 43 -44",
      material: "چرم",
      roof: "پلاستیکی",
      color: "مشکی - سفید - آبی - طوسی",
      price: "128/000",
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
