import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { PlusIcon } from '../../assets/icons/Base_icons'
import classes from './AppbarFilter.module.scss'

const AppbarFilter = () => {
  const [filter, setFilter] = useState({
    category: '',
    city: '',
    item: ''
  })
  const categoryRef = useRef(null)
  const cityRef = useRef(null)
  const itemRef = useRef(null)

  const SearchHandler = () => {
    setFilter({
      category: categoryRef.current.value,
      city: cityRef.current.value,
      item: itemRef.current.value,
    });
  }
  return (
    <div className={classes.Container}>
      <div className={classes.Right}>
        <select
          className={classes.AppBarFormItem}
          name="category"
          id="category"
          defaultValue="Любая категория"
          ref={categoryRef}
        >
          <option value="Любая категория">Любая категория</option>
          <option value="cars">Автомобили</option>
          <option value="store">Недвижимость</option>
          <option value="electronics">Электроника</option>
          <option value="jobs">Работа</option>
          <option value="private">Личные вещи</option>
          <option value="homeAndGarden">Стройка и ремонт</option>
          <option value="hobby">Хобби и Спорт</option>
          <option value="bussiness">Бизнес и услуги</option>
        </select>
        <input
          className={classes.AppBarFormItem}
          ref={itemRef}
          type="search"
          name=""
          placeholder="Что будем искать ?"
          id=""
        />
        <select
        ref={cityRef}
          name="location"
          id="location"
          className={classes.AppBarFormItem}
          defaultValue="По всей Узбекистану"
        >
          <option value="По всей Узбекистану">По всей Узбекистану</option>
          <option value="Tashkent">Tashkent</option>
          <option value="Kokand">Kokand</option>
          <option value="Samarkand">Samarkand</option>
          <option value="Andijan">Andijan</option>
          <option value="Namangan">Namangan</option>
          <option value="Navoiy">Navoiy</option>
          <option value="Termiz">Termiz</option>
          <option value="Buxoro">Buxoro</option>
          <option value="Xorazm">Xorazm</option>
          <option value="Guliston">Guliston</option>
        </select>
          <Link Link to = {
            `/search/${filter.city}/${filter.category}/${filter.item}`
          }
          onClick = {
            SearchHandler
          } >
        <button className={classes.SearchButton}>
            Найти
        </button>
          </Link>
      </div>
      <div className={classes.Left}>
            <Link to="/new">
        <button className={classes.ItemAdderBtn}>
          <span className={classes.plusIcon}>
            <PlusIcon />
          </span>
          <span>
              Добавить обьявления
          </span>
        </button>
            </Link>
      </div>
    </div>
  );
}

export default AppbarFilter
