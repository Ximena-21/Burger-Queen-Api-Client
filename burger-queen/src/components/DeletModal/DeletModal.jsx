export const DeletModal = ({btnAbort}) =>{

return(
    <div>
        <h1>Eliminación</h1>
        <p>La información del producto no podrá ser recuperada</p>
        <p>¿Está seguro de eliminar el producto?</p>
        <button>ELIMINAR</button>
        <button>{btnAbort}</button>
    </div>
)
}