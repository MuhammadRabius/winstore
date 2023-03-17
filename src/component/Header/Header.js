import { Button, Input, Select } from "antd";
import React, { useEffect, useState } from "react";
import {
  HiOutlineUser,
  HiOutlineHeart,
  HiOutlineShoppingCart,
  HiOutlinePhoneIncoming,
} from "react-icons/hi";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import { Categories } from "../../API/api";

const Header = () => {
  const { Search } = Input;
  const [cat, setCats] = useState([]);

  //   get Categories
  useEffect(() => {
    const ac = new AbortController();

    (async () => {
      try {
        const display = await Categories({ signal: ac.signal });
        setCats(display.data);
      } catch (err) {
        console.warn(err.message);
      }
    })();

    return () => ac.abort();
  }, []);

  return (
    <div className="header">
      <div className="container">
        <div className="wrapper">
          <div className="header_log_search">
            <div className="logo">
              <span>WinStore</span>
            </div>
            <div className="search_bar">
              <div className="drop-down">
                <Select
                  name="all_cat"
                  id="all_cat"
                  style={{
                    width: 200,
                    color: "#ABA3A3",
                  }}
                  defaultValue="All Catagories"
                >
                  {cat.map((item, i) => {
                    return (
                      <Select.Option
                        style={{ textTransform: "capitalize" }}
                        value={item}
                      >
                        {item}
                      </Select.Option>
                    );
                  })}
                </Select>
              </div>
              <div className="search_product">
                <Search
                  placeholder="Search Your Products"
                  allowClear
                  enterButton

                  // onSearch={onSearch}
                />
              </div>
            </div>
          </div>

          {/* menu  */}
          <div className="navigation_items">
            <div className="contact_iter">
              <span>Call now</span>
              <span>
                <HiOutlinePhoneIncoming /> 0177XXXXXXX
              </span>
              <NavLink>Sing in</NavLink>
            </div>

            <div className="quick_res_avatar">
              <HiOutlineUser />
            </div>
            <div className="quick_res_avatar">
              <HiOutlineHeart />
            </div>
            <div className="quick_res_avatar">
              <HiOutlineShoppingCart />
              <span>Cart</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
