import { Button, Card } from "antd";
import React from "react";
import "./BDeProducts.scss";

const BDP_LT = ({ item }) => {
  console.log("data", item);
  return (
    <>
      <Card size="small" hoverable>
        <p style={{ textTransform: "capitalize" }}>{item.category}</p>
        <p className="p_title">{`${item.title.slice(0, 15)}.....`}</p>

        <img alt={`${item.title}`} src={`${item.image}`} />

        <div className="price">
          <p>
            <del>{`RS ${item.price}`}</del>
          </p>
          <p className="new_p">{`RS ${item.price}`}</p>
        </div>
      </Card>
    </>
  );
};

export default BDP_LT;
