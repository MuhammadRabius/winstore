import React from "react";
import { Card } from "antd";
import { useState } from "react";
import "./Home.scss";
import Problem1 from "../Problem1/Problem1";
import Problem2 from "../Problem2/Problem2";

const Home = () => {
  const [activeTabKey1, setActiveTabKey1] = useState("tab1");
  const onTab1Change = (key) => {
    setActiveTabKey1(key);
  };
  return (
    <>
      <div className="home_page">
        <div className="container">
          <Card
            style={{
              width: "100%",
            }}
            title="Problems"
            tabList={tabList}
            activeTabKey={activeTabKey1}
            onTabChange={onTab1Change}
          >
            {contentList[activeTabKey1]}
          </Card>
        </div>
      </div>
    </>
  );
};

export default Home;

// -------------------

const tabList = [
  {
    key: "tab1",
    tab: "Problem 1",
  },
  {
    key: "tab2",
    tab: "Problem 2",
  },
];
const contentList = {
  tab1: <Problem1 />,
  tab2: <Problem2 />,
};
