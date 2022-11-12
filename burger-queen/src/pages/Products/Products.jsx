import "./style.scss"
import { useContext, } from "react";
import { Table } from "../../components/Table/Table";
import plus from '../../assets/images/plus.png'
import { Header } from "../../components/Header/Header";
import { Modals } from '../../Modals/Modals'
import { ModalAddProduct } from "../../components/FormModals/FormModalProduct";
import  TableContext from "../../context/TableContext";
import { useEffect } from "react";

export const Products = () => {

    // const [products, setProducts] = useState([])
    // const avaliablesKeys = ['image', 'name', 'price', 'id', 'type']

    // useEffect(() => {
    //     getListProducts();
    // }, [])

    // async function getListProducts() {
    //     const dataProducts = await getProducts('products')
    //     setProducts(dataProducts);
    // }
    const {products, avaliablesKeys, onClose} = useContext(TableContext)
    // console.log('product de products ', setProducts);

    return (
        <div className="products">

            <Header />

            <div className="products_page">

                <h1 className="products_role">ADMINISTRADOR</h1>
                <div className="products_container">
                    <Modals
                        element =
                        {<div className="products_button">
                            <img src={plus} alt="" className="products_button--plus" />
                            <span className="products_button--text"> Agregar Producto </span>
                        </div>}
                        content={<ModalAddProduct element={{}}/>}
                        // content={<ModalAddProduct onClose = {getListProducts}/>}
                    />
                    <Table  />
                    {/* <Table listElements={products} listFilterKeys={avaliablesKeys} /> */}
                </div>
            </div>
        </div>
    )
}

