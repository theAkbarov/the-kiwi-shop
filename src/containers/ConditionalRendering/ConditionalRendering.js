import Card from '../../components/Card/Card'
import classes from './ConditionalRendering.module.scss'
import { ChevronDown } from "../../assets/icons/Base_icons";
const ConditionalRendering = ({products,page}) => {
    return (
      <>
        <div className={classes.dFlex}>
          {products.isFetched && page === "Просмотренные" ? (
            products.data
              .slice(0, 4)
              .map((el) => (
                <Card
                  title={el.title}
                  img={el.image}
                  cost={el.price}
                  id={el.id + 984}
                  upload_time={el.category}
                  key={el.id}
                />
              ))
          ) : (
            <></>
          )}
          {products.isFetched && page === "Выбор редакции" ? (
            products.data
              .slice(4, 8)
              .map((el) => (
                <Card
                  title={el.title}
                  img={el.image}
                  id={el.id + 99}
                  cost={el.price}
                  upload_time={el.category}
                  key={el.id}
                />
              ))
          ) : (
            <></>
          )}
          {products.isFetched && page === "Сниженные цены" ? (
            products.data
              .slice(8, 12)
              .map((el) => (
                <Card
                  title={el.title}
                  id={el.id}
                  img={el.image}
                  cost={el.price}
                  upload_time={el.category}
                  key={el.id + 82}
                />
              ))
          ) : (
            <></>
          )}
        </div>
        <div className={classes.BtnWrapper}>
          <button>
            Покозать еще
              <ChevronDown />
          </button>
        </div>
      </>
    );
}

export default ConditionalRendering
