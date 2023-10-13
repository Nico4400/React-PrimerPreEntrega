import { useEffect, useState } from 'react'
import { getProductos, getProductoByCategory } from '../../asyncMock'
import ItemList from '../ItemList'
import { useParams } from 'react-router-dom'
import './styles.css'


const ItemListContainer = ({ greating }) => {
    
    const[productos, setProductos] = useState([])
    const { categoryId } = useParams()
    
    useEffect(() => {
        
        const asyncFunc = categoryId ? getProductoByCategory : getProductos

        asyncFunc(categoryId)
            .then(response => {
                setProductos(response)                
            })
            .catch(error => {
                console.error(error);
            })
    }, [categoryId])
    
    return (
        <div className='titulo'>
            <h1>
                {greating}
            </h1>
            <ItemList productos={productos} />
        </div>        
    )
}
export default ItemListContainer