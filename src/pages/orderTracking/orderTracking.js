import { Row } from "antd";
import React from "react";

const orderTracking = () => {
  return (
    <>
      <div className="orderTracking-container">
        <div className="orderTracking-bg"></div>
        <Row>
          <div>
            جهت مطلع شدن از وضعیت سفارش خود کد مربوط به سفارش خود را وارد کنید
          </div>
        </Row>
      </div>
    </>
  );
};

export default orderTracking;
