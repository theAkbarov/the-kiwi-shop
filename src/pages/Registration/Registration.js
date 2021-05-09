import { Kiwi } from '../../assets/icons/Base_icons';
import Footertop from '../../components/Footer/Footer'
import classes from './Registration.module.scss'

const Registration = () => {
    return (
      <div className={classes.Registration}>
        <div className={classes.Container}>
          <div className={classes.RegPage}>
            <div className={classes.Left}>
              <div className="">
                <h2 className={classes.LoginHeader}>Бесплатная регистрация</h2>
              </div>
              <form className={classes.Form}>
                <input type="text" placeholder="Темиров Зухриддин" />
                <button className={classes.Submit}>Далее</button>
              </form>
              <p className={classes.Or}>Or</p>
              <button className={classes.RestorePsw}>
                Войдите в систему, если у вас уже есть аккаунт kivi.uz
              </button>
            </div>

            <div className={classes.Right}>
              <div className={classes.content}>
                <span>
                  <Kiwi />
                </span>
                <p className={classes.contentText}>
                  Откройте для себя целую плошадку для продаже
                </p>
                <button className={classes.Button}>Как это делать?</button>
              </div>
            </div>
          </div>
        </div>
        <Footertop />
      </div>
    );
}

export default Registration
