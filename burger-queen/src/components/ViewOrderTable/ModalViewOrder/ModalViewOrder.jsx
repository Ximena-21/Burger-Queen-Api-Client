import { useViewOrderContext } from "../../../context/ViewOrderContext";
import "./style.scss";

export const ModalViewOrder = ({element}) => {
  
  // console.log('prod en modal viewOrder ',element);
  const {viewOrder} = useViewOrderContext()

  // viewOrder.map(element => element.products.map(product => console.log(product)))
  // console.log('viewOrderModal ',viewOrder);

  return (
    <table className="modalViewOrder">
      <thead className="modalViewOrder_header">
        <tr className="modalViewOrder_headerRow">
          <th className="modalViewOrder_headerColumn">Cantidad</th>
          <th className="modalViewOrder_headerColumn">Productos</th>
        </tr>
      </thead>
      <tbody className='modalViewOrder_body'>
        {
          viewOrder.map(order => {
            return(
           order.products.map((product, i) => {
            if(element.id === product.product.id){
              // console.log({id: element.id, id2: product.product.id});
              return(
              <tr className='modalViewOrder_rowBody' key={i}>
                <td className='modalViewOrder_columnBody'>{product.qty}</td>
                <td className='modalViewOrder_columnBody'>{product.product.name}</td>
              </tr>
              )
            }
            
           })
            )
          })
        }
      </tbody>

      <tfoot className='modalViewOrder_foot'>
        <tr className='modalViewOrder_footRow'>
            <th>Total</th>
            <th>0000</th>
        </tr>
      </tfoot>
    </table>
  );
};
