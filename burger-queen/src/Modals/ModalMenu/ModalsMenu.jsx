import { ModalMenu } from "./ModalMenu";
import { useModal } from "../useModal"

export const ModalsMenu = ({isOpen, open, close, element, content, elementClose}) =>{

    // const [isOpen, open, close] = useModal(false);

    return(
        <div>
            <div onClick={open}>
                {element}
            </div>
            <ModalMenu isOpen={isOpen} closeModal={close}>
                {content}
                {elementClose}
            </ModalMenu>
        </div>
    )
}