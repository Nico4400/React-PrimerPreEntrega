import React from 'react';

import { Link } from 'react-router-dom';

import { Card, Col, Button } from 'antd';
import { HeartOutlined } from '@ant-design/icons';


const { Meta } = Card;

const Cards = ({id, producto, imagen, precio, categoria}) => (
  <Col
      xs={{
        span: 5,
        offset: 1,
      }}
      lg={{
        span: 6,
        offset: 2,
      }}
    >
    <Card
      // style={{
      //   width: 300,
      //   height: 5000,
      // }}
      cover={
        <img className='ProductoImg'
          alt={producto || "No Disponible"}
          src={imagen || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMOM5VF1DLrm1Wt6w3AVGeztqrJrEyg1tWYkC2K74aAQoytFi-pRQreSz2aeCkElwn0x0&usqp=CAU"}
        />
      }
      actions={[
        <Link to={`/item/${id}`}>
          <Button className="Boton" >Ver Mas</Button>
        </Link>,
        <Button>
          <HeartOutlined />
        </Button>
      ]}
    >
      <p>$ {precio || "No Disponible"}</p>    
      <Meta          
        title={producto || "No Disponible"}
        description= {`Categoria : ${categoria || "No Disponible"}`}
      />    
    </Card> 
  </Col>  
);
export default Cards;