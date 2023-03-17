import React from "react";
import { BarsOutlined } from "@ant-design/icons";
import "./Banner.scss";
import BannerNav from "../../archive_data/BannerNav";
import { NavLink } from "react-router-dom";
import { SocialMediaList } from "../../archive_data/SocialMedia";
const Banner = () => {
  return (
    <>
      <div className="banner_page">
        <div className="container">
          <div className="innerContent">
            {/* Left Side */}
            <div className="cat_nav_side">
              <div className="cat_hamburger">
                <h3>
                  <BarsOutlined />
                  All Categories
                </h3>
              </div>
              <div className="navigate_text">
                {/* Banner Nav Data  */}
                {BannerNav().map((item, i) => {
                  return <NavLink to={item.link}>{item.title}</NavLink>;
                })}
              </div>
            </div>

            {/* Right Side--- */}

            <div className="social_med_section">
              <div className="s__logo">
                {SocialMediaList.map((item, i) => {
                  return <NavLink to={item.link}>{item.icon}</NavLink>;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
