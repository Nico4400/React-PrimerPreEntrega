import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { getProductos, getProductoByCategory } from '../../asyncMock'
import ItemList from '../ItemList'

import { Spin } from 'antd';

import styles from './styles.module.css'


const ItemListContainer = ({ greating }) => {
    
    const[productos, setProductos] = useState([])
    const[loading, setLoading] = useState(true)
    const { categoryId } = useParams()
    
    useEffect(() => {
        
        const asyncFunc = categoryId ? getProductoByCategory : getProductos

        asyncFunc(categoryId)
            .then(response => {
                setProductos(response)
                console.log(categoryId);             
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => setLoading(false))
    }, [categoryId])
    
    return (
        <>
            { loading ? (
                <div className={styles.Spin}>
                    <Spin size="large"/>
                </div>
                ) : (
                <div className={styles.Productos}>
                    <h1>
                        {greating} - {categoryId}                        
                    </h1>
                    <ItemList productos={productos} />                    
                </div>  
            )}
        </>      
    )
}
export default ItemListContainer