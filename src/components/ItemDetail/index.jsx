import React from 'react';

import { Card } from 'antd';
import Contador from '../Contador';

const { Meta } = Card;

const ItemDetail = ({id, producto, imagen, precio, stock, categoria, marca, descripcion}) => (
    <Card
      style={{
        width: 400,        
      }}
      cover={
        <img className='ProductoImg'
          alt={producto || "No Disponible"}
          src={imagen || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMOM5VF1DLrm1Wt6w3AVGeztqrJrEyg1tWYkC2K74aAQoytFi-pRQreSz2aeCkElwn0x0&usqp=CAU"}
        />
      }
      actions={[
          <Contador initial={1} stock={stock} onAdd={(contador) => console.log(`Cantidad agregada ${contador}`)}/>
      ]}
    >
      <p>$ {precio || "No Disponible"}</p>    
      <Meta          
        title={producto || "No Disponible"}
        description= {`Stock : ${stock || "No Disponible"} Un.`}
      />
      <p>Categoria: {categoria || "No Disponible"}</p> 
      <p>Marca: {marca || "No Disponible"}</p>   
      <p>{descripcion || "No Disponible"}</p>   
    </Card>   
);
export default ItemDetail;