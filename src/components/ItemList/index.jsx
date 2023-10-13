import { useEffect, useState } from "react";
import Cards from "../Cards"
import { Row, Spin } from 'antd';
import {getProductos} from '../../asyncMock'


const ItemList = ({productos}) => {

    const[loading, setLoading] = useState(true)

    useEffect(() => {
        getProductos()
            .then(response => {
                setLoading(false)                
            })
            .catch(error => {
                console.error(error);
            })
    }, [])

    return(
        <div className="ListadoProductos">
            <Row 
                gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
                }}
            >
            { loading ? (
                <div className="Spin">
                    <Spin />
                </div>
            ) : (    
                <>          
                    {productos.map(prod => <Cards key={prod.id} {...prod} />)}
                </>
            )}
            </Row>
        </div>
    )
}
export default ItemList