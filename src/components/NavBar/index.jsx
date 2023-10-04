import React from 'react'

import CartWidget from '../CartWidget'
import Usuario from '../Usuario';

import { Button } from 'antd';

import './styles.css'
import Logo from '../../assets/logoMarron.png'

const NavBar = () => {
  return (
    <div className="navbar">
        <ul className='logo'>
          < img src={Logo} width={100} alt="Logo-ecommerce" />
          <h2>Ecommerce</h2>
        </ul>

        <ul className="secciones">
          <Button type="primary">Inicio </Button>
          <Button type="primary">Favoritos </Button>
          <Button type="primary">Carrito </Button>
          <Button type="primary">Usuario </Button>
          <Button type="primary">Contacto </Button>            
        </ul>

        <ul className='Personal'>
          <CartWidget />
          <Usuario />
        </ul>
        
    </div>
  )
}

export default NavBar