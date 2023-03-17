import React from "react";
import { Col, Divider, Row } from "antd";
const DemoBox = (props) => (
  <p className={`height-${props.value}`}>{props.children}</p>
);
const BDP_LB = () => {
  return (
    <>
      <Row justify="space-between" align="bottom">
        <Col span={4}>
          <DemoBox value={100}>
            <h1>Hello </h1>
          </DemoBox>
        </Col>
        <Col span={4}>
          <DemoBox value={50}>jjjjjjjjjjjjjjjjjjj</DemoBox>
        </Col>
        <Col span={4}>
          <DemoBox value={120}>9632588888</DemoBox>
        </Col>
        <Col span={4}>
          <DemoBox value={80}>ssssssssssssssssss</DemoBox>
        </Col>
      </Row>
    </>
  );
};

export default BDP_LB;
