import React from 'react'
import imageAvatar from '../images/image-avatar.png'
import carrito from '../images/icon-cart.svg'
import s from '../css/Navbar.module.css'
import logo from '../images/logo.svg'
const Nabar = () => {
  return (
    <div className={s.conteiner}>
        <div className={s.lista}>
            <img src={logo}/>
            <ul >
                <li >Collections</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className={s.conteinerImg}>
            <img className={s.svg} src={carrito}/>
            <img className={s.img} src={imageAvatar}/>
        </div>
    </div>
  )
}

export default Nabar