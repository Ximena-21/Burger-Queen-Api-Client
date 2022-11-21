import './style.scss'
import { BoxQuantity } from '../BoxQuantity/BoxQuantity';
import { useOrderContext } from '../../../../context/OrderContext';

export const CardProducts = ({element}) => {

        const {addItemToOrder, deleteItemToOrder } =  useOrderContext()

        console.log('element from cardProducts ',element);

        return(
            <div className="cardProduct"  >
                <div className="cardProduct_info" onClick={() => addItemToOrder(element)}>
                    <h4 className='cardProduct_info--name'>{element.name}</h4>
                    <h4 className='cardProduct_info--name'>${element.price}</h4>
                </div>
                    < BoxQuantity element={element.amount} substract={() => deleteItemToOrder(element)} add={ () => addItemToOrder(element)}/>
            </div>
        
            )
}

// export const CardProducts = ({element, option}) => {

//     const { quantity, addQuantity} = useWaiterContext()
//     console.log('element card ',element);

//     return(
//         <div className="cardProduct"  >
//             <div className="cardProduct_info" key={element.id} onClick={(e) =>  
//                 {   element.id && addQuantity()
//                    }}>
//                 <h4 className='cardProduct_info--name'>{element.name}</h4>
//                 <h6 className='cardProduct_info--name'>{element.price}</h6>
//             </div>
//             < BoxQuantity />
//         </div>
    
//         )
// }