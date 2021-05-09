import classes from './StyleModule.module.scss'

const List = ({children}) => {
    return (
        <ul className={classes.UnorderedList}>
            {children}
        </ul>
    )
}

export default List
