import "./style.scss"
import { useEffect, useReducer, useState } from "react";
import ProductsHeaders from "../../components/Products/ProductsHeaders"
import { Table } from "../../components/Table/Table";
import { getProducts } from "../../lib/requests";

export const Products = () => {

    // const { user = {} } = props

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
                <div className="products_button"> + Agregar Producto</div>
                <Table listElements={products} listFilterKeys={avaliablesKeys} />
            </div>
            {/* <ProductsHeaders /> */}
        </div>
    )
}

