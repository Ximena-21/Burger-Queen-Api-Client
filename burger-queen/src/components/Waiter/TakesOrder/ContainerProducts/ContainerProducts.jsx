import './style.scss'
import { useWaiterContext } from "../../../../context/WaiterContext"

export const ContainerProducts = () =>{

    const {products} = useWaiterContext(); //array de objeto
    // console.log(products);


    const element = products.map(element => {
        return(
            <div className="containerProducts">
                <p className="containerProducts_element">{element.name}</p>
                <p className="containerProducts_element">{element.price}</p>
            </div>
        )
    })

    return element
}