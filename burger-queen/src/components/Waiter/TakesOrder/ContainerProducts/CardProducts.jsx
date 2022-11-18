import './style.scss'
import { useWaiterContext } from "../../../../context/WaiterContext"

// export const ContainerProducts = ({typeMenu}) =>{

//     const {products} = useWaiterContext(); //array de objeto


//     const element = products.map(element => {
//         return(
//             <div className="containerProducts">
//                 <p className="containerProducts_element">{menu[element.name]}</p>
//                 <p className="containerProducts_element">{menu[element.price]}</p>
//             </div>

//         )
//     })

//     return element
// }


export const CardProducts = ({typeMenu,quantity}) =>{

    const {products} = useWaiterContext(); //array de objeto

    return(
        <div className="cardProduct">{
            products.filter(element => {
            if(element.type === typeMenu)

            return(
            <div className="cardProduct_info">
                <h4 className='cardProduct_info--name'>{element.name}</h4>
                <h6 className='cardProduct_info--name'>{element.price}</h6>
            </div> 
            )
            })}
            {
                quantity > 0 ? (<div className="cardProduct_boxQuantity">
                <button className="cardProduct_boxQuantity--subtract">-</button>
                <div className="cardProduct_boxQuantity--quantity">{quantity}</div>
                <button className="cardProduct_boxQuantity--add">+</button>
                </div> ) : ''
            }

        </div>
    )
}