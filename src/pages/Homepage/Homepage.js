import Navbar from "../../components/Navbar/Navbar";
import classes from "./Homepage.module.scss";
import "antd/dist/antd.css";
import News from "../../containers/News/News";
import Latest from "../../containers/News/Latest";
import { useEffect, useState } from "react";
import { request } from "../../api/request";
import Brands from "../../containers/Brands/Brands";
import Recommendation from "../../containers/Recommendation";
import Footer from "../../containers/Footer/Footer";

const Homepage = () => {

  const [page, setPage] = useState(true);
  
  const [products, setProducts] = useState({
    isFetched: false,
    data: [],
    error: null,
  });

  useEffect(() => {
    request
      .get("/products")
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
    <div className={classes.HomePage}>
      {/* <Appbar /> */}
      <Navbar data={products}/>
      <div className={classes.container}>
        <div className={classes.content}>
          <div className={classes.SortLink}>
            <button
              onClick={() => setPage(!page)}
              className={`${classes.SortLinkItem} ${page ? "" : "ActivePage"}`}
            >
              Новые объявления
            </button>
            <button
              onClick={() => setPage(!page)}
              className={`${classes.SortLinkItem} ${page ? "ActivePage" : " "}`}
            >
              Лучщие предложение
            </button>
          </div>
          <div className={classes.CardsWrapper}>
            {page ? (
              <News products={products} />
            ) : (
              <Latest products={products} />
            )}
          </div>
          <div className={classes.viewMoreBtn}>
            <button>
              Покозать еще <span>{">"}</span>
            </button>
          </div>
        </div>
      </div>
        <Brands />
        <Recommendation products={products}/>
        <Footer />
    </div>
  );
};

export default Homepage;
