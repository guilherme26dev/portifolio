import React from 'react'
import Text from '../../componets/Text'
import image from '../../assets/imagem1.png'
import style from './home.module.css';
import MenuIcon from '@mui/icons-material/Menu';

const Home = () => {
  return (
    <div className={style.body}>
      <div className={style.menu}>
        <div>
          <MenuIcon/>
        </div>
      </div>
      <div className={style.apresentation}>

        <div className={style.text}>
          <Text />
        </div>
        <div>
          <img className={style.image} src={image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home