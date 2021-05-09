import { Link } from "react-router-dom"
import Slider from "react-slick"
import classes from "./Brands.module.scss"
import { BrandsConfig } from '../../data/CarouselConfig'
import { BrandsData } from '../../data/Brands'
const Brands = () => {
    return (
      <div className={classes.Brands}>
        <div className={classes.Container}>
          <Slider {...BrandsConfig}>
            {BrandsData.map((el) => (
              <Link
                key={el.id + 887}
                path={el.path}
                style={{ background: el.bgc }}
                className={`${classes.BrandsITem} ${el.bgc}`}
              >
                <h2 className={classes.BrandTitle}>{el.title}</h2>
                <p className={classes.BrandAmount}>{el.amount} обьявлениий</p>
                <img src={el.img} alt={el.title} className={classes.BrandImage}/>
              </Link>
            ))}
          </Slider>
        </div>
      </div>
    );
}

export default Brands
