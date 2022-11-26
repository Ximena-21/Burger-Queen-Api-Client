import { useEffect } from "react";
import { useContext } from "react";
import { createContext, useState } from "react";
import { ModalViewOrder } from "../components/ViewOrderTable/ModalViewOrder/ModalViewOrder";
import { OpenOrder } from "../components/ViewOrderTable/OpenOrder/OpenOrder";
import { makeRequestDelete, makeRequestGet } from "../lib/requests";
import { useModal } from "../Modals/useModal";

const viewOrderContext = createContext();

//viewOrderProvider (mostrar)
const ViewOrderProvider = ({ children }) => {

    const [viewOrder, setViewOrder] = useState([])

    //no hacer nunca mas
    const columnKeys = ['Orden', 'Tiempo', 'Estado', '']
    //MODAL PARA CREAR
    const [isOpenModal, openModal, closeModal] = useModal(false);

    const avaliablesKeys = [
        {
            key: "client"
        },
        {
            key: "dateEntry"
        },
        {
            key: "status"
        },
        { key: null, componente: (element) =>
            <OpenOrder type="view-orders" element={element}
             Add={ModalViewOrder}  /> }
    ]

    //actualizar
    async function getOrders() {
        const data = await makeRequestGet("orders")
        setViewOrder(data);
        console.log(data)
    }

    //eliminar
    async function deleteOrder(id){
        await makeRequestDelete("orders", id)
        await getOrders()
    }


    useEffect(() => {
        getOrders();
    }, [])

    const data = { 
        viewOrder, 
        columnKeys,
        avaliablesKeys, 
        deleteOrder,
        isOpenModal, 
        openModal,
        closeModal,
    }

    console.log("view Order Context >>>> ", data)

    return <viewOrderContext.Provider value={data}>{children}</viewOrderContext.Provider>

}

const useViewOrderContext = () => useContext(viewOrderContext)

export { ViewOrderProvider , useViewOrderContext }