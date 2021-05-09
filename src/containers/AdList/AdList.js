import classes from './AdList.module.scss'
import { AddList } from "../../data/Adds";
import List from "../../components/List";
import Footertop from '../../components/Footer/Footer';
 
const AdList = () => {
    return (
        <>
      <div className={classes.Container}>
        <List.List>
          {AddList.map((el) => (
            <List.Item
              title={el.title}
              price={el.price}
              img={el.img}
              date={el.date}
              calls={el.calls}
              views={el.views}
            />
          ))}
        </List.List>
      </div>
        <Footertop />
        </>
    );
}

export default AdList
