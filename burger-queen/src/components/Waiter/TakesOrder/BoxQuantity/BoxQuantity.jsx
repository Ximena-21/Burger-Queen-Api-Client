export const BoxQuantity = ({quantity, substract, add}) => {

  return (
    quantity > 0 ?
    <div className="cardProduct_boxQuantity">
      <button className="cardProduct_boxQuantity--subtract" onClick={()=> substract()}>-</button>
      <div className="cardProduct_boxQuantity--quantity">{quantity}</div>
      <button className="cardProduct_boxQuantity--add" onClick={() => add()}>+</button>
    </div> : ''
  );
};
