import { useEffect } from "react";
import { useContext } from "react";
import { createContext, useState } from "react";
import { StatusOrder } from "../components/Orders/StatusOrder/StatusOrder";
import { ModalViewOrder } from "../components/ViewOrderTable/ModalViewOrder/ModalViewOrder";
import { OpenOrder } from "../components/ViewOrderTable/OpenOrder/OpenOrder";
import { makeRequestDelete, makeRequestDeleteOrder, makeRequestGet, makeRequestPatch } from "../lib/requests";
import { useModal } from "../Modals/useModal";

const viewOrderContext = createContext();

//viewOrderProvider (mostrar)
const ViewOrderProvider = ({ children }) => {

    const [viewOrder, setViewOrder] = useState([])

    //no hacer nunca mas
    const columnKeys = ['', 'Orden', 'Tiempo', 'Estado', '']
    //MODAL PARA CREAR
    const [isOpenModal, openModal, closeModal] = useModal(false);

    const avaliablesKeys = [
        {
            key: null, componente: (element) =>  <StatusOrder element={element}/>
        },
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
        // await makeRequestDelete("orders", id)
        await makeRequestDeleteOrder(id)
        await getOrders()
    }

    const changeStatusDelivered = async (id, data) => {
        await makeRequestPatch('orders', id, data)
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
        changeStatusDelivered
    }

    console.log("view Order Context >>>> ", data)

    return <viewOrderContext.Provider value={data}>{children}</viewOrderContext.Provider>

}

const useViewOrderContext = () => useContext(viewOrderContext)

export { ViewOrderProvider , useViewOrderContext }