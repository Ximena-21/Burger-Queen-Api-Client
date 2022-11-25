import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useWaiterContext } from "./WaiterContext";

const OrderContext = createContext();

const OrderProvider = ({ children }) => {

  const { newProduct } = useWaiterContext();

  const [orderItems, setOrderItem] = useState([]);

  useEffect(() => {
    newProduct;
  }, [orderItems]);

  //Aumenta la cantidad del producto seleccionado
  const addItemToOrder = (product) => {
    const inOrder = orderItems.find((item) => item.id === product.id);

    if (inOrder) {
      console.log("si está en la orden y suma uno ", orderItems);

      setOrderItem(
        orderItems.map((productInOrder) => {
          if (productInOrder.id === product.id) {
            console.log("entra al condicional una vez después de clickeado");
            return { ...product, amount: (product.amount += 1) };
          } else {
            return productInOrder;
          }
        })
      );
    } else {
      console.log("no está en la orden");
      setOrderItem([...orderItems, { ...product, amount: 1 }]);
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

  console.log("OrderCOntext >>>>>>>", data);

  return <OrderContext.Provider value={data}>{children}</OrderContext.Provider>;
};

const useOrderContext = () => useContext(OrderContext);

export { useOrderContext, OrderProvider };
