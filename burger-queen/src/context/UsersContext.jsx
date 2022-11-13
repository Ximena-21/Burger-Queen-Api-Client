import { useEffect } from "react";
import { useContext } from "react";
import { createContext, useState } from "react";
import { makeRequestGet } from "../lib/requests";
// import { DeleteModalProduct } from "../components/Products/DeleteModalProduct/DeleteModalProduct";
import { TableColumnOption } from "../components/DynamicTable/TableColumnOption";
// import { FormProduct } from "../components/Products/FormProduct/FormProduct";
// import { getProducts, makeRequestDelete, makeRequestPatch, makeRequestPost } from "../lib/requests";
import { useModal } from "../Modals/useModal";

const UsersContext = createContext();



//ProductsProvider (mostrar)
const UsersProvider = ({ children }) => {
    const [users, setUsers] = useState([])
    //no hacer nunca mas
    const columnKeys = ['id','name','email', 'opciones']
    //MODAL PARA CREAR
    const [isOpenModal, openModal, closeModal] = useModal(false);

    const avaliablesKeys = [
        {
            key: "id"
        },
        {
            key: "email"
        },
        {
            key: "role"
        },
        // {
        //     key: null, componente: BloqueProductPrice
        // },
        { key: null, componente: (element) => <TableColumnOption element={element} Add={()=><h1>Add</h1>} Delete={()=><h1>Delete</h1>} /> }
    ]

    async function getUsers() {
        const data = await makeRequestGet("users")
        setUsers(data);
        console.log(data)
    }


    useEffect(() => {
        getUsers();
    }, [])

    const data = { 
        users, 
        avaliablesKeys, 
        isOpenModal, 
        openModal,
        closeModal,
        columnKeys,
    }

    console.log("produtContext >>>> ", data)

    return <UsersContext.Provider value={data}>{children}</UsersContext.Provider>

}

const useUsersContext = () => useContext(UsersContext)

export { UsersProvider, useUsersContext }