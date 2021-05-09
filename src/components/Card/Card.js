import { Link } from 'react-router-dom';
import classes from './Card.module.scss'

const Card = ({
    title,
    cost,
    img,
    upload_time,
    id
}) => {
    return (
      <Link to={`/product/${id}`} className={classes.Card}>
        <img className={classes.CardImage} src={img} alt="title" />
        <div className={classes.CardBody}>
          <h3 className={classes.CardTitle}>{title}</h3>
          <span className={classes.UploadTime}>{upload_time}</span>
          <p className={classes.price}>{cost * 10400 + ' so\'m'}</p>
        </div>
      </Link>
    );
}

export default Card
