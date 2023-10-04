
import { Badge } from 'antd';
// import cart from './assets/carritoBlanco.png'
import { ShoppingCartOutlined } from "@ant-design/icons"



const CartWidget = () => {
    return (
        <div>
            <Badge count={5}>
                <ShoppingCartOutlined style={{ fontSize: '50px',  color: 'white'}} />                         
            </Badge>           
        </div>
    )
}

export default CartWidget

