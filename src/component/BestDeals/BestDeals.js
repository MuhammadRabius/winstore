import { Menu } from "antd";
import React, { useEffect, useState } from "react";
import { ProductByCategory } from "../../API/api";
import BDP_LT from "../../pages/BDeProducts/BDP_LT";
import "./BestDeals.scss";
const BestDeals = () => {
  const [key, setKey] = useState("electronics");
  const [product, setProducts] = useState([]);
  // Component Wise Shifting ----
  const [agentProfile, setAgentProfile] = useState(false);
  const [agentDashboard, setAgentDashboard] = useState(false);
  const [agentSearch, setAgentSearch] = useState(false);
  const [agentPayment, setAgentPayment] = useState(false);

  console.log("product", product);

  const onClick = (e) => {
    setKey(e.key);
    //     console.log("click ", e.key);
  };

  //   get Products by Cat
  useEffect(() => {
    (async () => {
      try {
        const display = await ProductByCategory(key);
        setProducts(display.data);
      } catch (err) {
        console.warn(err.message);
      }
    })();
  }, [key]);

  return (
    <>
      <div className="best_deals_page">
        <div className="container">
          <div className="innerContent">
            <div className="comp__title">
              <h2>
                <span className="s_t">Best</span> Deals
              </h2>
            </div>
            <div className="navigate_items">
              <Menu
                onClick={onClick}
                defaultSelectedKeys={["electronics"]}
                mode="horizontal"
                items={items}
              />
            </div>
            <div className="nav_display">
              {product.map((item, i) => {
                return <BDP_LT key={i} item={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestDeals;

// / ------------------------

const getItem = (label, key, icon, children, type) => {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
};

const items = [
  getItem("Electronics", "electronics"),
  getItem("Jewelery", "jewelery"),
  getItem("Men's clothing", "mensclothing"),
  getItem("Women's clothing", "womensclothing"),
];
