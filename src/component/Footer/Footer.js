import React from "react";
import FooterData from "../../archive_data/FooterData";
import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__row">
          <div className="row">
            <div className="footer__logo">
              <h1 className="c_title">Win Store</h1>
              <span className="title">Got questions? Call us 24/7!</span>
            </div>

            <div className="com_mob">
              <span>
                03 111 666 144 <br /> 0317 1777015.
              </span>
            </div>

            <div className="com_con">
              <span className="title">Contact info </span> <br />
              <span>info@winstore.pk</span>
            </div>

            {/* certified logo*/}
            <div className="certified__logos row__logos">
              <div className="s__logos">
                <AiOutlineFacebook />
                <AiOutlineTwitter />
                <AiFillLinkedin />
                <AiOutlineInstagram />
              </div>
            </div>
          </div>

          {/* row---------  */}
          {FooterData().map((item, i) => {
            return (
              <div className="row footer__navs" key={i}>
                <h1 className="title"> {item.title} </h1>

                {/* menu list  */}
                <div className="list">
                  {item.list.map((list, indx) => {
                    // console.log('list of menu', list);
                    return (
                      <ul key={indx}>
                        <li>
                          <a href={list.link ? list.link : "/"}>
                            {list.icon && list.icon}
                            {list.title}
                          </a>
                        </li>
                      </ul>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        {/* payments logo*/}
        <div className="payments__logos row__logos">
          <div className="t__logos">
            <img src="/images/payments/mastercard.svg" alt="mastercard" />
            <img src="/images/payments/visa.svg" alt="viaa" />

            <img src="/images/payments/nagad.svg" alt="digicert" />
            <img src="/images/payments/upay.svg" alt="digicert" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
