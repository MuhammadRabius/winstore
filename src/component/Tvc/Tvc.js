import React from "react";
import { Button, Carousel, Badge } from "antd";
import "./Tvc.scss";
const Tvc = () => {
  return (
    <>
      <div className="tvc_page">
        <div className="container">
          <Carousel autoplay>
            <div className="innerContent">
              <div>
                <h1 className="caro_text">
                  Shop <span className="c__t">Computer & experience</span>
                </h1>
                <p>
                  You cannot inspect quality into the product; it is already
                  there. I am not a product of my circumstances. I am a product
                  of my decisions.
                </p>
                <Button className="btn">View More</Button>
              </div>
              <div className="caro_text">
                
                  <img
                    src={`https://i.ibb.co/bbgf4ph/ORH91-S0-removebg-preview.png`}
                    alt="tvc banner"
                  />
               
              </div>
            </div>

            <div className="innerContent">
              <div>
                <h1 className="caro_text">
                  Shop <span className="c__t">Computer & experience</span>
                </h1>
                <p>
                  You cannot inspect quality into the product; it is already
                  there. I am not a product of my circumstances. I am a product
                  of my decisions.
                </p>
                <Button className="btn">View More</Button>
              </div>
              <div className="caro_text">
               
                  <img
                    src={`https://i.ibb.co/bbgf4ph/ORH91-S0-removebg-preview.png`}
                    alt="tvc banner"
                  />
              
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Tvc;
