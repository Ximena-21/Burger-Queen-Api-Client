import { useOrderContext } from '../../../../context/OrderContext';
import './style.scss';

//   // export const BoxQuantity = ({quantity, substract, add}) => {
  
//   const {quantity, addQuantity, substractQuantity} = useWaiterContext()

//   return (
//     quantity > 0 ?
//     <div className="cardProduct_boxQuantity">
//       <button className="cardProduct_bosxQuantity--subtract" onClick={()=> substractQuantity()}>-</button>
//       <div className="cardProduct_boxQuantity--quantity">{quantity}</div>
//       <button className="cardProduct_boxQuantity--add" onClick={() => addQuantity()}>+</button>
//     </div> : ''
//   );
// };

  export const BoxQuantity = ({substract, add, element}) => {

    // console.log('boxquantity element ', element);

      return (
        element > 0 ?
        <div className="cardProduct_boxQuantity">
          <p className="cardProduct_boxQuantity--substract" onClick={()=> substract(element)}>-</p>
          {/* <button className="cardProduct_boxQuantity--subtract" onClick={()=> substract(element)}>-</button> */}
          <div className="cardProduct_boxQuantity--quantity">{element}</div>
          <p className="cardProduct_boxQuantity--add" onClick={() => add(element)}>+</p>
          {/* <button className="cardProduct_boxQuantity--add" onClick={() => add(element)}>+</button> */}
        </div> : ''
      );
  };
