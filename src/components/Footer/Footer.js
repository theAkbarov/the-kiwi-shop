import { AppleIcon, DarkLogo, GooglePlay } from "../../assets/icons/Base_icons";
import classes from './Foot.module.scss'

const Footertop = () => {
  return (
    <div className={classes.top}>
      <div className={classes.Container}>
        <div className={classes.footerLogo}>
          <DarkLogo />
          <h2 className={classes.footerTxt}>
            Продай, найди, купи все что ты пожелаешь{" "}
          </h2>
        </div>
        <p className={classes.QanaqadurText}>
          Веб сайт бесплатных обьявлений | на базе имеется 234 944 999 шт
          обяления
        </p>
        <button>
          <AppleIcon />
        </button>
        <button>
          <GooglePlay />
        </button>
      </div>
    </div>
  );
};

export default Footertop;
