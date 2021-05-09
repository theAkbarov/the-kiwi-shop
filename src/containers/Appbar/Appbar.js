import { SiteLogo } from "../../assets/icons/Base_icons"
import classes from "./Appbar.module.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import AppbarFilter from "../AppbarFilter/AppbarFilter";
import { useState } from "react";
import UserPic from '../../assets/images/use.png'

const Appbar = ({token,match}) => {
  const [lang, setLang] = useState(true)

    return (
      <div className={classes.Appbar}>
        <div className={classes.container}>
          <Link to="/">
            <SiteLogo />
          </Link>
          <div className={classes.btnGroup}>
            <div className={`${classes.langSwitcher} ${classes.dFlex}`}>
              <button
                onClick={() => setLang(!lang)}
                className={`${classes.LangBtn} btn-changer ${
                  lang ? "" : "active"
                }`}
              >
                Рус
              </button>
              <button
                onClick={() => setLang(!lang)}
                className={`${classes.LangBtn} btn-changer ${
                  lang ? "active" : ""
                }`}
              >
                O’z
              </button>
            </div>

            {token ? (
              <>
              
              <button className={classes.UserProfiel}>
                <Link to="/profile/ads">Темиров</Link>
                <img src={UserPic} alt=""/>
              </button>
              </>
            ) : (
              <div className={`${classes.LoginSide} ${classes.dFlex}`}>
                <button className={classes.btnLogin}>
                  <Link to="/login">Вход</Link>
                </button>
                <button className={classes.btnRegister}>
                  <Link to="/registration">Регистрация</Link>
                </button>
              </div>
            )}
          </div>
        </div>
        <AppbarFilter />
      </div>
    );
}

export default Appbar
