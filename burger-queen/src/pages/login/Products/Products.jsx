import { useEffect, useState } from "react";
import ProductsHeaders from "../../../components/Login/Products/ProductsHeaders"
import Table from "../../../components/Login/Table/Table";
import { getProducts } from "../../../lib/requests";

const Products = () => {

    const [products, setProducts] = useState([])
   const avaliablesKeys = ['image', 'name', 'price']

   async function getListProducts(){
    const dataProducts = await getProducts('products')
    setProducts(dataProducts);
   }

   useEffect(()=> {
    getListProducts();
 }, [])
   console.log(products)

    return(
        <div>
            < Table listElements={products}
            listProducts={avaliablesKeys}
            />
            <ProductsHeaders />
        </div>
    )
}

export default Products;