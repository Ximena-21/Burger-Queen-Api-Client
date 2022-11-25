import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const OrderContext = createContext();

const OrderProvider = ({ children }) => {

  const [productsOrder, setProductsOrder] = useState([]);
  const [quantity, setQuantity] = useState(0)

  //Aumenta la cantidad del producto seleccionado
  const addItemToOrder = (product) => {

    const inOrder = productsOrder.find((item) => item.product.id === product.id);

    if (inOrder) {

      setProductsOrder(
        productsOrder.map((productInOrder) => {
          if (productInOrder.product.id === product.id) {
            return { ...productInOrder,  qty : (productInOrder.qty += 1) };
          } else {
            return productInOrder;
          }
        })
      );
    } else {
      setProductsOrder([...productsOrder, {product : product, qty: 1 }]);
    }
  };


  // Disminuye la cantidad del producto seleccionado
  const deleteItemToOrder = (product) => {
    //Busca si el producto está en la orden
    const inOrder = productsOrder.find(
      (productInOrder) => productInOrder.id === product.id
    );
    // si la cantidad del producto es uno o más, se le resta
    if (inOrder.amount > 0) {
      setProductsOrder(
        productsOrder.map((productInOrder) => {
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
    productsOrder,
    quantity,
    addItemToOrder,
    deleteItemToOrder,
  };

  console.log("OrderCOntext >>>>>>>", data);

  return <OrderContext.Provider value={data}>{children}</OrderContext.Provider>;
};

const useOrderContext = () => useContext(OrderContext);

export { useOrderContext, OrderProvider };
