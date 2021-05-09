import classes from './Module.module.scss'

const ButtonWidthNumber = ({number, title,on}) => {
    return (
      <button onClick={on} className={classes.ClientNumber}>
        {number}
        <span>{title}</span>
      </button>
    );
}

export default ButtonWidthNumber

