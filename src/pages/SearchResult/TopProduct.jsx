import classes from './main.module.scss'
import Card from '../../components/Card'
import { request } from '../../api/request'
import { useEffect, useState } from 'react';

import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const SearchResult = ({match})=>{
    
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
    //   console.log(products);
      console.log(match.params.category);
      console.log(match.params)
  }, [match.params]);
    return (
      <div className={classes.topProduct}>
        <div className={classes.container}>
          <div className={classes.searchHolder}>
            <form action="">
              <input
                type="search"
                placeholder="Введите название обявления или  выберите из списка"
                value={match.params.item}
              />
            </form>
          </div>

          <div className={classes.buttons}>
            <span className={classes.one}>Интерсное</span>
            <span className={classes.two}>Топ</span>
            <span className={classes.three}>Отличные предложение</span>
            <span className={classes.four}>Супер цена</span>
            <span className={classes.ones}>г.Ташкент</span>
            <span className={classes.ones}>г.Термез</span>
            <span className={classes.ones}>г.Самарканд</span>
          </div>

          <div className={classes.rubirke}>
            <span className={classes.title}>Вы сейчас в рубрике</span>
            <div className={classes.class}>
              <span className={classes.ele}>{match.params.citycategory}</span>
              <span className={classes.mon}>{match.params.city}</span>
            </div>
          </div>

          <div className={classes.inputRange}>
            <div className={classes.left}>
              <span>Выберите цену от и до</span>
            </div>
            <div className={classes.right}>
                <input type="range" step={15}/>
            </div>
          </div>

          <div className={classes.selectHolder}>
            <form action="">
              <select name="" id="">
                <option value="">Состояние</option>
                <option value="">Состояние</option>
                <option value="">Состояние</option>
              </select>

              <select name="" id="">
                <option value="">Тип объявщика</option>
                <option value="">Тип объявщика</option>
                <option value="">Тип объявщика</option>
              </select>

              <select name="" id="">
                <option value="Ташкент"> Мирза улугбекский район</option>
                <option value="Ташкент"> Мирза улугбекский район</option>
                <option value="Ташкент"> Мирза улугбекский район</option>
              </select>
              <button>Применить</button>
            </form>
          </div>
        </div>
        <hr />
        <div className={classes.container}>
          <div className={classes.topRate}>
            {products.isFetched ? (
              products.data
                .slice(0, 4)
                .map((el) => (
                  <Card
                    title={el.title}
                    cost={el.price}
                    upload_time={el.categories}
                    key={el.id + 89}
                    id={el.id}
                    img={el.image}
                  />
                ))
            ) : (
              <div className="spinner">
                <Spin indicator={antIcon} />
              </div>
            )}
          </div>

          <div className={classes.topproductImages}>
            {products.isFetched ? (
              products.data
                .slice(8, 12)
                .map((el) => (
                  <Card
                    title={el.title}
                    cost={el.price}
                    upload_time={el.categories}
                    key={el.id + 89}
                    id={el.id}
                    img={el.image}
                  />
                ))
            ) : (
              <div className="spinner">
                <Spin indicator={antIcon} />
              </div>
            )}
          </div>

          <div className={classes.searchResult}>
            <h2>СЕЙЧАС ИЩУТ</h2>

            <div className={classes.searches}>
              <div className={classes.div}>
                <span>купить Мясная продукция</span>
                <span className={classes.Alone}>2 часа назад</span>
              </div>
              <div className={classes.div}>
                <span>купить Мясная продукция</span>
                <span className={classes.Alone}>2 часа назад</span>
              </div>
              <div className={classes.div}>
                <span>купить Мясная продукция</span>
                <span className={classes.Alone}>2 часа назад</span>
              </div>
              <div className={classes.div}>
                <span>купить Мясная продукция</span>
                <span className={classes.Alone}>2 часа назад</span>
              </div>
            </div>
          </div>

          <div className={classes.finishBlock}>
            <h2>САМОЕ ИНТЕРЕСНОЕ</h2>

            <div className={classes.finish}>
              {products.isFetched ? (
                products.data
                  .slice(14, 18)
                  .map((el) => (
                    <Card
                      title={el.title}
                      cost={el.price}
                      upload_time={el.categories}
                      key={el.id + 89}
                      id={el.id}
                      img={el.image}
                    />
                  ))
              ) : (
                <div className="spinner">
                  <Spin indicator={antIcon} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
}

export default SearchResult

