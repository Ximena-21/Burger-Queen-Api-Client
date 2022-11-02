import { useEffect, useState } from "react";
import ProductsHeaders from "../../components/Products/ProductsHeaders"
import { Table } from "../../components/Table/Table";
import { getProducts } from "../../lib/requests";

export const Products = () => {

    // const { user = {} } = props

    const [products, setProducts] = useState([])
    const avaliablesKeys = ['image', 'name', 'price']


    useEffect(() => {
        getListProducts();
    }, [])

    async function getListProducts() {
        const dataProducts = await getProducts('products')
        setProducts(dataProducts);
    }
    console.log(products)

    return (
        <div>
            <Table listElements={products} listFilterKeys={avaliablesKeys} />
            <ProductsHeaders />
        </div>
    )
}

