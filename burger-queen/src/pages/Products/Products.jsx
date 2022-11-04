import "./style.scss"
import { useEffect, useReducer, useState } from "react";
import { Table } from "../../components/Table/Table";
import { getProducts } from "../../lib/requests";
import plus from '../../assets/images/plus.png'
import { Modals } from '../../Modals/Modals'
import { useModal } from '../../Modals/useModal'


export const Products = () => {

    const [,openModalPortal,,] = useModal(false)

    const [products, setProducts] = useState([])
    const avaliablesKeys = ['image', 'name', 'price' ]

    useEffect(() => {
        getListProducts();
    }, [])

    async function getListProducts() {
        const dataProducts = await getProducts('products')
        setProducts(dataProducts);
    }
    console.log(products)

    return (
        <div className="products">
            <h1 className="products_role">ADMINISTRADOR</h1>
            <div className="products_container">
                <Modals 
                btnEdit={<div className="products_button">
                     <img src={plus} alt="" className="products_button--plus"/>
                     <span className="products_button--text"> Agregar Producto</span>
                </div>}
                />
                <Table listElements={products} listFilterKeys={avaliablesKeys} />
            </div>
        </div>
    )
}

