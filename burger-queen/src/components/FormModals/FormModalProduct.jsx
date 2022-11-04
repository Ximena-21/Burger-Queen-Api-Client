export const ModalAddProduct = () => {
    return(
    <div className="modalAddProduct">
        <form className="modalAddProduct_form">
            <div>
                <p>Nuevo producto</p>
            </div>
                <label htmlFor="name_product">Nombre del producto</label>
                <input type="text" name="name_product" className="modalAddProduct_input" />
                <label htmlFor="select_product">Tipo de menú:</label>
            <select name="select_product" className="modalAddProduct_input">
                <option selected='selected'>Seleccionar</option>
                <option >Desayuno</option>
                <option >Almuerzo</option>
            </select>
                <label htmlFor="name_product">Imagen del producto</label>
                <input type="file" name="image_product" className="modalAddProduct_input" />
                <label htmlFor="name_product">Precio del producto</label>
                <input type="number" name="price_product" className="modalAddProduct_input" />
            <button className="loginPage_btn">Guardar</button>
        </form>
    </div>
    )
}