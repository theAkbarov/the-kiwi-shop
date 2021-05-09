import classes from './Error.module.scss'
import Bg from '../../assets/images/image-asset-removebg-preview.png'
import Footertop from '../../components/Footer/Footer'

const Error = () => {
    return (
        <>
      <div className={classes.ErrorPage}>
        <img src={Bg} alt="" />
        <div className={classes.Content}>
          <h1 className={classes.title}>Awww...Don’t Cry.</h1>
          <p className={classes.text}>
          It's just a 404 Error! <br/>
          What you’re looking for may have been misplaced in Long Term Memory.
          <br/><br/>&nbsp;
          </p>
        </div>
      </div>
      <Footertop />
      </>
    );
}

export default Error
