import "./style.scss"
import { useEffect, useReducer, useState } from "react";
import ProductsHeaders from "../../components/Products/ProductsHeaders"
import { Table } from "../../components/Table/Table";
import { getProducts } from "../../lib/requests";
import plus from '../../assets/images/plus.png'
import { Header } from "../../components/Header/Header";
import { SideMenu } from "../../components/SideMenu/SideMenu";


export const Products = () => {

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

            <Header/>

            {/* <SideMenu/> */}
            
            <div className="products_page">

                <h1 className="products_role">ADMINISTRADOR</h1>

                <div className="products_container">

                    <div className="products_button">
                        <img src={plus} alt="" className="products_button--plus"/>
                        <span className="products_button--text"> Agregar Producto</span>
                    </div>

                    <Table listElements={products} listFilterKeys={avaliablesKeys} />
                </div>
            </div>

            
        </div>
    )
}

