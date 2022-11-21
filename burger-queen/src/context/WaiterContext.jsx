import { useContext, useEffect } from "react";
import { createContext, useState } from "react";
import { getProducts } from "../lib/requests";

// const WaiterContext = createContext();

// const WaiterProvider = ({children}) => {

//     const [products, setProducts] = useState([])
//     const [quantity, setQuantity] = useState(0)

//     async function getListProducts() {
//         const dataProducts = await getProducts('products')
//         setProducts(dataProducts);
//     }

//     useEffect(() => {
//         getListProducts();
//     }, [])


//     const addQuantity = () => {

//             const newQuantity = quantity + 1
//             setQuantity(newQuantity)
        
//     }

//     const substractQuantity = () => {
//         const newQuantity = quantity - 1
//         setQuantity(newQuantity)
//     }


//     const data = {
//         products,
//         addQuantity,
//         substractQuantity,
//         quantity
//     }

//     console.log('waiterContext ',data);

//     return <WaiterContext.Provider value={data}>{children}</WaiterContext.Provider>

// }

// const useWaiterContext = () => useContext(WaiterContext)

// export { WaiterProvider, useWaiterContext }


const WaiterContext = createContext();

const WaiterProvider = ({children}) => {

    const [products, setProducts] = useState([])

    async function getListProducts() {
        const dataProducts = await getProducts('products')
        setProducts(dataProducts);
    }

    useEffect(() => {
        getListProducts();
    }, [])


    const newProduct = products.map(product => ({...product, amount: 0}))

    const data = {
        newProduct,
    }
    
    console.log('waiterContext ',data);

    return <WaiterContext.Provider value={data}>{children}</WaiterContext.Provider>

}

const useWaiterContext = () => useContext(WaiterContext)

export { WaiterProvider, useWaiterContext }
