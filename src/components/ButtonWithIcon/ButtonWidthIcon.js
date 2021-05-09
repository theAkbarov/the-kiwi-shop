import classes from './a.module.scss'
const ButtonWidthIcon = ({
    title,
    icon,
    danger,
    margin
  }) => {
    return (
      <button
        className={`${danger ? classes.AddFundsBtnRed : classes.AddFundsBtn} ${margin ? 'me2' : ''}`}
      >
        <span>{icon}</span>
        {title}
      </button>
    );
}

export default ButtonWidthIcon
