import classes from "./Product.module.scss";
import { useEffect, useState } from "react";
import { request } from "../../api/request";
import { Breadcrumb, Spin, Table } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import { HomeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import ButtonWidthNumber from "../../components/ButtonWithNumber/ButtonWidthNumber";
import Footer from "../../containers/Footer/Footer";
import {ProductCol,TableData} from '../../data/tables'
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Product = ({ match }) => {
  const [hidden, setHidden] = useState(false);
  const [hidden2, setHidden2] = useState(false);
  console.log(match)
  const [products, setProducts] = useState({
    isFetched: false,
    data: [],
    error: null,
  });
  const images = [
    {
      original: products.data.image,
      thumbnail: products.data.image,
    },
    {
      original: products.data.image,
      thumbnail: products.data.image,
    },
    {
      original: products.data.image,
      thumbnail: products.data.image,
    },
  ];

  useEffect(() => {
    request
      .get(`/products/${match.params.id}`)
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
  }, [match.params.id]);
  console.log(products);
  return (
    <>
      <div className={classes.Container}>
        <div className={classes.BreadCrum}>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/">
                <HomeOutlined />
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/products">
                <span>Oбъявления</span>
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to={`/category/${products.data.category}`}>
                {products.data.category}
              </Link>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        {products.isFetched ? (
          <>
            <h1>{products.data.title}</h1>
            <div className={classes.dFlex}>
              <div className={classes.left}>
                <ImageGallery
                  showNav={false}
                  thumbnailPosition="left"
                  items={images}
                />
              </div>
              <div className={classes.right}>
                <p>Product number {products.data.id}</p>
                <h2 className={classes.productPrice}>
                  {products.data.price * 10400} uzs
                </h2>
                <h3 className={classes.ItemLocation}>
                  Ташкент, Ташкентская область, Юнусабадский район{" "}
                </h3>

                <ButtonWidthNumber
                  on={() => setHidden(!hidden)}
                  number={hidden ? "+998 95 400 ** **" : "+998 95 400 00 43"}
                  title="Покозать польностю"
                />
                <ButtonWidthNumber
                  number={hidden2 ? "+998 99 011 ** **" : "+998 99 011 60 00"}
                  on={() => setHidden2(!hidden2)}
                  title="Покозать польностю"
                />
                <p className={classes.AuthorProduct}>
                  Автор обьявлении: <span>Author author</span>
                </p>
                <div className={classes.btnGroup}>
                  <button className={classes.ActionsToAuth}>
                    Написать автору
                  </button>
                  <button className={classes.ActionsToAuth}>
                    Предложить свою цену
                  </button>
                </div>
                <p>{products.data.description}</p>
                <div className="">
                  <Table
                    columns={ProductCol}
                    dataSource={TableData}
                    bordered
                    title={() => `${products.data.title}`}
                    pagination={false}
                    className={classes.ProductTable}
                  />
                </div>
              </div>
            </div>
            <RelatedProducts products={products} />
          </>
        ) : (
          <div className="spinner">
            <Spin indicator={antIcon} />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Product;
