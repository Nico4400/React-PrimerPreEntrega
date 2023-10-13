import React from 'react'

import { Link, NavLink } from 'react-router-dom';

import CartWidget from '../CartWidget'
import Usuario from '../Usuario';
import Logo from '../../assets/logoMarron.png'

import { DownOutlined, HeartOutlined, HomeOutlined, UserOutlined, WhatsAppOutlined } from '@ant-design/icons';
import { Button, Dropdown, Space } from 'antd';

import './styles.css'

const items = [
  {
    key: '1',
    label: (     
      <NavLink to={'/category/Componentes'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Componentes</NavLink>      
    ),
  },
  {
    key: '2',
    label: (      
      <NavLink to={'/category/Periféricos'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Periféricos</NavLink>      
    ),
  },
  {
    key: '3',
    label: (      
      <NavLink to={'/category/Almacenamiento'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Almacenamiento</NavLink>      
    ),
  },
  {
    key: '4',
    label: (      
      <NavLink to={'/category/Audio'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Audio</NavLink>      
    ),
  },
]

const NavBar = () => {
  return (
    <div className="NavBar">
        <ul className='Logo'>
          <Link to='/'>
            < img src={Logo} width={100} alt="Logo-ecommerce" />
            <h2>Ecommerce</h2>
          </Link>
        </ul>

        <ul className="secciones">
          <Link to='/'>
            <Button type="primary">Inicio <HomeOutlined /></Button>
          </Link>
          <Button type="primary">Favoritos <HeartOutlined /></Button> 

          <Dropdown menu={{ items }} trigger={['click']}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <Button type="primary">
                  Categorias
                  <DownOutlined />
                </Button>
              </Space>
            </a>
          </Dropdown>

          <Button type="primary">Usuario <UserOutlined /></Button>
          <Button type="primary">Contacto <WhatsAppOutlined /></Button>            
        </ul>

        <ul className='Personal'>
          <CartWidget />
          <Usuario />
        </ul>
        
    </div>
  )
}

export default NavBar