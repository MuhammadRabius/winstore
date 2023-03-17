import { Button, Card, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { ProductList } from "../../API/api";
import "./NewArrivel.scss";
const NewArrivel = () => {
  const [product, setProducts] = useState([]);

  //   get Products
  useEffect(() => {
    const ac = new AbortController();

    (async () => {
      try {
        const display = await ProductList({ signal: ac.signal });
        setProducts(display.data);
      } catch (err) {
        console.warn(err.message);
      }
    })();

    return () => ac.abort();
  }, []);
  return (
    <>
      <div className="new_arr_page">
        <div className="container">
          <div className="innerContent">
            <div className="comp__title">
              <h2>
                <span className="s_t">New</span> Arrivals
              </h2>
            </div>

            <div className="product_display">
              {product.slice(0, 6).map((item, i) => {
                return (
                  <>
                    <Card size="small" hoverable key={i}>
                      <p style={{ textTransform: "capitalize" }}>
                        {item.category}
                      </p>
                      <p className="p_title">{`${item.title.slice(
                        0,
                        15
                      )}.....`}</p>

                      <img alt={`${item.title}`} src={`${item.image}`} />

                      <div className="price">
                        <p>
                          <del>{`RS ${item.price}`}</del>
                        </p>
                        <p className="new_p">{`RS ${item.price}`}</p>
                      </div>

                      <Button>Add to Cart</Button>
                    </Card>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewArrivel;
