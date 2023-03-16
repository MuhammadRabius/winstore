import { Button, Input, Select } from "antd";
import React, { useState } from "react";
import {
  HiOutlineUser,
  HiOutlineHeart,
  HiOutlineShoppingCart,
  HiOutlinePhoneIncoming,
} from "react-icons/hi";
import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { Search } = Input;
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
                  <option value="All Category">Z Category</option>
                  <option value="Category">X Category</option>
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
