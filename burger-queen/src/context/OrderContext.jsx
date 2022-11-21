import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useWaiterContext } from "./WaiterContext";

const OrderContext = createContext();

const OrderProvider = ({ children }) => {
  
  const { newProduct } = useWaiterContext();


  const productsInStorage = () => {
    const productsInLocalStorage = localStorage.getItem("orderProducts");
    return productsInLocalStorage ? JSON.parse(productsInLocalStorage) : [];
  }

  const [orderItems, setOrderItem] = useState(productsInStorage());


  useEffect(() => {
    localStorage.setItem("orderProducts", JSON.stringify(orderItems));
  }, [orderItems]);

  //Aumenta la cantidad del producto seleccionado
  const addItemToOrder = (product) => {

    //Buscar el producto en la orden
    const inOrder = newProduct.find(
      (productInOrder) => productInOrder.id === product.id
    );

    // Si lo encuentra se le suma 1
    if (inOrder) {
      setOrderItem(
        newProduct.map((productInOrder) => {
          if (productInOrder.id === product.id) {
            return { ...product, amount: (product.amount += 1) };
          } else {
            return productInOrder;
          }
        })
      );
      // si no lo encuentra es porque apenas se va a agregar a la orden
    } else {
      setOrderItem({ ...product, amount: 1 });
    }
  };

  // Disminuye la cantidad del producto seleccionado
  const deleteItemToOrder = (product) => {

    //Busca si el producto está en la orden
    const inOrder = newProduct.find(
      (productInOrder) => productInOrder.id === product.id
    );

    // si la cantidad del producto es uno o más, se le resta 
    if (inOrder.amount > 0) {
      setOrderItem(
        newProduct.map((productInOrder) => {
          if (productInOrder.id === product.id) {
            return { ...product, amount: (product.amount -= 1) };
          } else {
            return productInOrder;
          }
        })
      );
    } 
  };

  const data = {
    orderItems,
    addItemToOrder,
    deleteItemToOrder,
  };

  return <OrderContext.Provider value={data}>{children}</OrderContext.Provider>;
  
};

const useOrderContext = () => useContext(OrderContext);

export { useOrderContext , OrderProvider };
