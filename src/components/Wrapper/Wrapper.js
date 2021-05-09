import classes from './Wrapper.module.scss'

const Wrapper = ({children}) => {
    return (
        <div className={classes.Wrapper}>
            {children}
        </div>
    )
}

export default Wrapper
