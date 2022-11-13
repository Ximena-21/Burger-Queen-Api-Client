import { ModalPortal } from "./ModalPortal"
import { useModal } from "./useModal"

export const Modals = ({isOpen, open, close,element, content, elementClose}) =>{

    // const [isOpenPortal, openModalPortal, closeModalPortal] = useModal(false);

    return(
        <div>
            <div onClick={open}>
                {element}
            </div>
            <ModalPortal isOpen={isOpen} closeModal={close}>
                {content}
                    {/* <div onClick={close}> */}
                {elementClose}
                    {/* </div> */}
            </ModalPortal>
        </div>
    )
}