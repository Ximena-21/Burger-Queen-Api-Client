import { DeletModal } from "../components/DeletModal/DeletModal"
import { ModalAddProduct } from "../components/FormModals/FormModalProduct"
import { ModalPortal } from "./ModalPortal"
import { useModal } from "./useModal"

export const Modals = ({btnEdit, btnDelet}) =>{

    const [isOpenPortal, openModalPortal, closeModalPortal] = useModal(false);
    const [isOpenDelet, openDelet, closeDelet] = useModal(false);

    return(
        <div>
            <button onClick={openModalPortal}>{btnEdit}</button>
            <ModalPortal isOpen={isOpenPortal} closeModal={closeModalPortal}>
                <ModalAddProduct />
            </ModalPortal >

            <button onClick={openDelet}>{btnDelet}</button>
            <ModalPortal isOpen={isOpenDelet} closeModal={closeDelet}>
                <DeletModal btnAbort={ <button onClick={closeDelet}>CANCELAR</button>}/>
            </ModalPortal >
        </div>
    )
}