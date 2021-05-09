import {  NavLink, Route, Switch } from 'react-router-dom';
import ButtonWithIcon from "../../components/ButtonWithIcon/ButtonWidthIcon";
import { ProfileNav } from '../../data/AppbarMenus'
import classes from './Profile.module.scss'
import AdList from "../../containers/AdList/AdList";
import Messages from "../../containers/Messages/Messages";

const Profile = () => {
    return (
      <>
        <div className={classes.Headeer}>
          <div className={classes.ProfileAppbar}>
            <div className={classes.Container}>
              <h3 className={classes.UserName}>
                Здравствуйте Зухриддин Темиров
              </h3>
              <div className={classes.UserBalance}>
                <p className={classes.Balance}>Ваш счет: 2 3000 сум</p>
                <ButtonWithIcon icon="+" danger={false} title="Пополнить" />
              </div>
            </div>
          </div>
          <div className={classes.Container}>
            <div className={classes.AppbarNav}>
              {ProfileNav.map((el, index) => (
                <NavLink
                  activeClassName="activeNav"
                  className={classes.NavItem}
                  to={el.path}
                  key={index}
                >
                  {el.title}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
        <div className={classes.content}>
          <Switch>
            <Route  path="/profile/ads" component={AdList} />
            <Route  path="/profile/messages" component={Messages} />
          </Switch>
        </div>
      </>
    );
}

export default Profile
