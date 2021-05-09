import { MoreIcon, UpArrow } from "../../assets/icons/Base_icons";
import ButtonWidthIcon from "../ButtonWithIcon/ButtonWidthIcon";
import classes from "./StyleModule.module.scss";

const Item = ({
    img,
    title,
    date,
    price,
    views,
    calls
    }) => {
    return (
      <li className={classes.ListItem}>
        <div className={classes.top}>
          <div className={classes.col}>
            <img src={img} className={classes.AddImg} alt={title} />
            <h3 className={classes.AddTitle}>{title}</h3>
          </div>

          <div className={classes.col}>
            <h4>
              <p className={classes.PriceList}>{price.min}</p>
              <p className={classes.PriceList}>{price.max}</p>
            </h4>
          </div>

          <div className={classes.col}>
            <p>{date}</p>
          </div>

          <div className={classes.col}>
            <ButtonWidthIcon
              icon={<UpArrow />}
              danger={false}
              title="Поднять"
              margin={true}
            />
            <ButtonWidthIcon
              icon={<UpArrow />}
              margin={true}
              danger={true}
              title="Рекламировать"
            />
            <button className={classes.ListAction}>
              <MoreIcon />
            </button>
          </div>
        </div>

        <div className={classes.bottom}>
          <p className={classes.statistics}>Статистика </p>
          <p>Просмотры: {views}</p>
          <p>Тел.: {calls}</p>
          <p>В Избранном: 0</p>
        </div>
      </li>
    );
}

export default Item
