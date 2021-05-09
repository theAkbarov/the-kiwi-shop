import classes from "./Navbar.module.scss";
import Slider from "react-slick";
import { AppbarConfig } from "../../data/CarouselConfig";
import Wrapper from '../Wrapper/Wrapper'
import { AppbarMenus } from "../../data/AppbarMenus";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = ({data}) => {

  const [dropdown, setDropdown] = useState('')
  
  return (
    <>
      <nav className={classes.Navbar}>
        <Slider {...AppbarConfig}>
          {AppbarMenus.map((el) => (
            <>
              <button
                onClick={() => setDropdown(el.path)}
                key={el.path}
                className={classes.NavbarItem}
              >
                <div
                  className={classes.imgholder}
                  style={{ background: `${el.bgc}` }}
                >
                  {el.icon}
                </div>
                <span>{el.title}</span>
              </button>
              {dropdown === el.path ? (
                <Wrapper>
                  {AppbarMenus.map((el) => (
                    <Link>{el.title}</Link>
                  ))}
                </Wrapper>
              ) : (
                <></>
              )}
            </>
          ))}
        </Slider>
      </nav>
    </>
  );
};

export default Navbar;
