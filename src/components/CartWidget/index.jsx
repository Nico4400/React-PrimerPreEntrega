
import { Badge } from 'antd';
import { ShoppingCartOutlined } from "@ant-design/icons"


const CartWidget = () => {
    return (
        <div>
            <Badge count={4}>
                <ShoppingCartOutlined style={{ fontSize: '50px',  color: 'white'}} />                         
            </Badge>               
        </div>
    )
}

export default CartWidget

