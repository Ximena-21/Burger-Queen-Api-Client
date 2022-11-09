import { makeRequestDelete } from "../../lib/requests"


export const BtnDelet = () => {
    return (
        <button>CANCELAR</button>
    )
}


export const DeletModal = ({ element, onClose }) => {
    return (
        <div>
            <h1>Eliminación</h1>
            <p>La información del producto no podrá ser recuperada</p>
            <p>¿Está seguro de eliminar el producto?</p>
            <button onClick={() => {
                makeRequestDelete('products', element.id)
                onClose()
                }}>ELIMINAR</button>
        </div>
    )
}
