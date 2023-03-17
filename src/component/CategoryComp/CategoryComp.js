import { Card, Image } from "antd";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Categories } from "../../archive_data/Categories";

const CategoryComp = () => {
  return (
    <>
      <div className="container">
        <Slider {...settings}>
          {Categories.map((item, i) => {
            return (
              <>
                <Image
                  preview={{
                    visible: false,
                  }}
                  width={200}
                  style={{ objectFit: "contain" }}
                  src={item.image}
                />

                <p style={{ textTransform: "capitalize" }}>{item.title}</p>
              </>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default CategoryComp;

// ---------
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
};
