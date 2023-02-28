import React, { useState } from "react";
import "./Problem1.scss";
import { Button, Card, Checkbox, Form, Input, Table } from "antd";
const Problem1 = () => {
  const [all, setAll] = useState([]);
  const [active, setActive] = useState([]);
  const [complete, setComplete] = useState([]);
  // Active tab---------------
  const [activeTabKey1, setActiveTabKey1] = useState("tab1");
  const onTab1Change = (key) => {
    setActiveTabKey1(key);
  };

  const onFinish = (values) => {
    console.log("Success:", values);

    if (values.status.toLowerCase() === "active") {
      let item = new Array(values);

      setActive(item);
      setAll(item);
    } else if (values.status === "complete") {
      let item = new Array(values);
      setComplete(item);
      setAll(item);
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];
  // All Data for Table-------------------
  const contentList = {
    tab1: <Table dataSource={all} columns={columns} />,
    tab2: <Table dataSource={active} columns={columns} />,
    tab3: <Table dataSource={complete} columns={columns} />,
  };
  return (
    <>
      <div className="problem_one_page">
        <div className="innerContent">
          <h1>PROBLEM 1</h1>
        </div>
        <div className="input_group">
          <Form
            className="input_field"
            layout="inline"
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your Name!",
                },
              ]}
            >
              <Input placeholder="Name" />
            </Form.Item>

            <Form.Item
              label="Status"
              name="status"
              rules={[
                {
                  required: true,
                  message: "Please update Status!",
                },
              ]}
            >
              <Input placeholder="Status" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="status_log">
          <Card
            style={{ marginTop: "10px" }}
            size="small"
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

export default Problem1;

const tabList = [
  {
    key: "tab1",
    tab: "All",
  },
  {
    key: "tab2",
    tab: "Active",
  },
  {
    key: "tab3",
    tab: "Complete",
  },
];
