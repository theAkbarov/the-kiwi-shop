import { useEffect, useState } from 'react';
import classes from './RelatedProducts.module.scss'

import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import Card from '../Card'
import Slider from 'react-slick'
import { request } from '../../api/request';
import { RelatedConfig } from '../../data/CarouselConfig';

const RelatedProducts = () => {
  
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  const [page, setstate] = useState(true);
  
  const [products, setProducts] = useState({
    isFetched: false,
    data: [],
    error: null,
  });
  useEffect(() => {
    request
      .get(`/products`)
      .then((res) => {
        setProducts({
          isFetched: true,
          data: res.data,
          error: null,
        });
      })
      .catch((err) => {
        setProducts({
          isFetched: true,
          data: [],
          error: err,
        });
      });
  }, []);

  return (
    <div>
      <div className={classes.relatedAppbar}>
        <button
          onClick={() => setstate(!page)}
          className={`${classes.relatedBtn} ${page ? "ActivePage" : ""}`}
        >
          Похожие объявления
        </button>
        <button
          onClick={() => setstate(!page)}
          className={`${classes.relatedBtn} ${page ? "" : "ActivePage"}`}
        >
          Обьявление автора
        </button>
      </div>
      <div className={classes.realtedContents}>
        {page ? (
          <Slider {...RelatedConfig}>
            {products.isFetched ? (
              products.data
                .slice(0, 4)
                .map((el) => (
                  <Card
                    upload_time={el.category}
                    cost={el.price}
                    img={el.image}
                    id={el.id}
                    key={el.price + 54}
                    title={el.title}
                  />
                ))
            ) : (
              <></>
            )}
          </Slider>
        ) : products.isFetched ? (
          products.data
            .slice(14, 18)
            .map((el) => (
              <Card
                upload_time={el.category}
                cost={el.price}
                img={el.image}
                id={el.id}
                key={el.price}
                title={el.title}
              />
            ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default RelatedProducts

