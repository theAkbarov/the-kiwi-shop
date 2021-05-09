import classes from "./Messages.module.scss"
import { ArrowRight, LinkICon, MoreIcon, ShareIcon } from "../../assets/icons/Base_icons"
import { UsersList } from "../../data/Adds";
const Messages = () => {
    return (
      <div>
        <div className={classes.Container}>
          <div className={classes.MessagenrApp}>
            <div className={classes.UsersList}>
              <ul className={classes.ListWrapper}>
                {UsersList.map((el) => (
                  <li className={classes.List}>
                    <img src={el.img} alt="something about this pic" />
                    <div className={classes.UserInfo}>
                      <h4>{el.name}</h4>
                      <h3>{el.purchasedItem}</h3>
                    </div>
                    <div className={classes.ListActions}>
                      <button>
                        <LinkICon />
                      </button>
                      <p>{el.purchasedDate}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className={classes.ChatLayout}>
              <div className={classes.ChatHeader}>
                <div className={classes.dFlex}>
                  <img src={UsersList[0].img} alt="" className="UserImg" />
                  <h3 className={classes.username}>contact@jakubwp.com</h3>
                </div>
                <div className={classes.btnGroup}>
                  <button>
                    <ShareIcon />
                  </button>
                  <button>
                    <MoreIcon />
                  </button>
                </div>
              </div>
              <div className={classes.chatContent}></div>
              <div className={classes.chatInput}>
                <textarea className={classes.TextArea} name="" id="" cols="30" rows="10"></textarea>
                <div className={classes.chatControl}>
                  <button className={classes.UploadFile}>
                    <LinkICon />
                  </button>
                  <button type="submit" className={classes.SendBtn}>Отправить<ArrowRight /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Messages
