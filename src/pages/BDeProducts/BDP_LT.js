import { Button, Card } from "antd";
import React from "react";
import "./BDeProducts.scss";

const BDP_LT = ({ item }) => {
  console.log("data", item);
  return (
    <>
      <Card size="small" hoverable>
        <div className="p_info">
          <div className="p_content">
            <p style={{ textTransform: "capitalize" }}>{item.category}</p>
            <p className="p_title">{`${item.title.slice(0, 35)}`}</p>
            <h2 className="new_p">{`RS ${item.price}`}</h2>
            <p>
              <del>{`RS ${item.price}`}</del>
            </p>
            <p>Already Sold : 6</p>
            <p>Available: 30</p>
          </div>

          <div className="">
            <h2>
              <span className="s__offer">Special </span> <br />
              Offer
            </h2>
          </div>
        </div>

        <div className="offer_img">
          <div className="offer_text">
            <span>
              Save <br /> 10%
            </span>
          </div>
          <div>
            <img alt={`${item.title}`} src={`${item.image}`} />
          </div>
        </div>
      </Card>
    </>
  );
};

export default BDP_LT;
