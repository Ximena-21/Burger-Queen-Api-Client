import "./style.scss"
import { useEffect, useState } from "react";
import { Table } from "../../components/Table/Table";
import { getProducts } from "../../lib/requests";
import plus from '../../assets/images/plus.png'
import { Header } from "../../components/Header/Header";
import { Modals } from '../../Modals/Modals'
import { ModalAddProduct } from "../../components/FormModals/FormModalProduct";


export const Products = () => {

    const [products, setProducts] = useState([])
    const avaliablesKeys = ['image', 'name', 'price', 'id']

    useEffect(() => {
        getListProducts();
    }, [])

    async function getListProducts() {
        const dataProducts = await getProducts('products')
        setProducts(dataProducts);
    }

    return (
        <div className="products">

            <Header />

            <div className="products_page">

                <h1 className="products_role">ADMINISTRADOR</h1>
                <div className="products_container">
                    <Modals
                        element =
                        {<div className="products_button">
                            <img src={plus} alt="" className="products_button--plus" />
                            <span className="products_button--text"> Agregar Producto </span>
                        </div>}
                        content={<ModalAddProduct />}
                    />
                    <Table listElements={products} listFilterKeys={avaliablesKeys} />
                </div>
            </div>
        </div>
    )
}

