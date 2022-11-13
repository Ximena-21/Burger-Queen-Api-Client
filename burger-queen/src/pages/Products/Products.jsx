import "./style.scss"
import plus from '../../assets/images/plus.png'
import { Header } from "../../components/Header/Header";
import { Modals } from '../../Modals/Modals'
import { FormProduct} from "../../components/Products/FormProduct/FormProduct";
import { useProductsContext } from "../../context/ProductsContext";
import { ProductsTable } from "../../components/Products/ProductTable";

export const Products = () => {

    const { isOpenModal, openModal, closeModal} = useProductsContext()

    return (
        <div className="products">

            <Header />

            <div className="products_page">

                <h1 className="products_role">ADMINISTRADOR</h1>
                <div className="products_container">
                    <Modals
                        isOpen={isOpenModal}
                        close={closeModal}
                        open={openModal}
                        element =
                        {<div className="products_button">
                            <img src={plus} alt="" className="products_button--plus" />
                            <span className="products_button--text"> Agregar Producto </span>
                        </div>}
                        content={<FormProduct element={{}}/>}
                        // content={<ModalAddProduct onClose = {getListProducts}/>}
                    />
                    <ProductsTable/>
                    {/* <Table  /> */}
                    {/* <Table listElements={products} listFilterKeys={avaliablesKeys} /> */}
                </div>
            </div>
        </div>
    )
}
