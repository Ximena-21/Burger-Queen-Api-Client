import { ModalPortal } from "./ModalPortal"
import { useModal } from "./useModal"

export const Modals = ({element, content, elementClose}) =>{

    const [isOpenPortal, openModalPortal, closeModalPortal] = useModal(false);

    return(
        <div>
            <div onClick={openModalPortal}>
                {element}
            </div>
            <ModalPortal isOpen={isOpenPortal} closeModal={closeModalPortal}>
                {content}
                    <div onClick={closeModalPortal}>
                        {elementClose}
                    </div>
            </ModalPortal>
            {/* <button className="btnModals" onClick={openModalPortal}>{btnEdit}</button>
            <ModalPortal isOpen={isOpenPortal} closeModal={closeModalPortal}>
                {modal}
            </ModalPortal >

            <button className="btnModals" onClick={openDelet}>{btnDelet}</button>
            <ModalPortal isOpen={isOpenDelet} closeModal={closeDelet}>
                <DeletModal btnAbort={ <button onClick={closeDelet}>CANCELAR</button>}/>
            </ModalPortal > */}
        </div>
    )
}