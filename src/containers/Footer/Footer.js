import classes from "./Footer.module.scss"
import { Row, Col } from "antd";
import {
  Bussiness,
  Property,
  TransportLinks,
  Electronics,
  HomeAndGarderLinks,
  Construction,
  Private,
  Hobbies,
} from "../../data/FooterLinks";
import { Link } from "react-router-dom";
import Footertop from "../../components/Footer/Footer";


const Footer = () => {
    return (
      <footer className={classes.SiteFooter}>
      <Footertop />
        <div className={classes.bottom}>
          <div className={classes.Container}>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" span={6}>
                <div >
                  <p className={classes.FoooterLinkHeading}>Автомобили</p>
                  <div className={classes.mb4}>
                    {TransportLinks.map((el) => (
                      <Link
                        key={el.id + 6542}
                        to={el.path}
                        className={classes.FooterLink}
                      >
                        {el.title}
                      </Link>
                    ))}
                  </div>
                  <p className={classes.FoooterLinkHeading}>Дом и Сад</p>
                  <div className={classes.mb4}>
                    {HomeAndGarderLinks.map((i) => (
                      <Link
                        to={i.title}
                        key={i.id * 534}
                        className={classes.FooterLink}
                      >
                        {i.title}
                      </Link>
                    ))}
                  </div>
                  <p className={classes.FoooterLinkHeading}>Личные вещи </p>
                  <div className={classes.mb4}>
                    {Private.map((el) => (
                      <Link
                        className={classes.FooterLink}
                        to={el.path} 
                        key={el.id * 8}
                      >
                        {el.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div>
                  <p className={classes.FoooterLinkHeading}> Бизнес и услуги</p>
                  <div className={classes.mb4}>
                    {Bussiness.map((el) => (
                      <Link
                        key={el.id + 465}
                        to={el.path}
                        className={classes.FooterLink}
                      >
                        {el.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div>
                  <p className={classes.FoooterLinkHeading}>Электроника</p>
                  <div className={classes.mb4}>
                    {Electronics.map((el,index) => (
                      <Link
                        to={el.path}
                        key={el.index + 154}
                        className={classes.FooterLink}
                      >
                        {el.title}
                      </Link>
                    ))}
                  </div>
                  <p className={classes.FoooterLinkHeading}>
                    Товары стройки и ремонта
                  </p>
                  <div className={classes.mb4}>
                    {Construction.map((i) => (
                      <Link
                        to={i.path}
                        className={classes.FooterLink}
                        key={i.id * 25}
                      >
                        {i.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div>
                  <p className={classes.FoooterLinkHeading}>Недвижимость</p>
                  <div className={classes.mb4}>
                    {Property.map((el) => (
                      <Link
                        to={el.path}
                        key={el.id + 9}
                        className={classes.FooterLink}
                      >
                        {el.title}
                      </Link>
                    ))}
                  </div>
                  <p className={classes.FoooterLinkHeading}>
                    Хобби, Отдых и Спорт{" "}
                  </p>
                  <div className={classes.mb4}>
                    {Hobbies.map((el) => (
                      <Link
                        className={classes.FooterLink}
                        to={el.path}
                        key={el.id + 6 }
                      >
                        {el.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </footer>
    );
}

export default Footer
