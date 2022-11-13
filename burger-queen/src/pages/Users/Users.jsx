import "./style.scss"
// import plus from '../../assets/images/plus.png'
import { Header } from "../../components/Header/Header";
// import { Modals } from '../../Modals/Modals'
import { useProductsContext } from "../../context/ProductsContext";
import { UsersTable } from "../../components/Users/UsersTable";
import { useUsersContext } from "../../context/UsersContext";

export const Users = () => {

    const { isOpenModal, openModal, closeModal} = useUsersContext()

    return (
        <div className="products">

            <Header />

            <div className="products_page">

                <h1 className="products_role">ADMINISTRADOR</h1>
                <div className="products_container">
                    {/* <Modals
                        isOpen={isOpenModal}
                        close={closeModal}
                        open={openModal}
                        element =
                        {<div className="products_button">
                            <img src={plus} alt="" className="products_button--plus" />
                            <span className="products_button--text"> Agregar Producto </span>
                        </div>}
                        content={<FormProduct element={{}}/>}
                    /> */}
                    <UsersTable/>
                </div>
            </div>
        </div>
    )
}
