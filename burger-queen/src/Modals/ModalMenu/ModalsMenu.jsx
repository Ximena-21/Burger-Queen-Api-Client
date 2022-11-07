import { ModalMenu } from "./ModalMenu";
import { useModal } from "../useModal"

export const ModalsMenu = ({element, content, elementClose}) =>{

    ModalMenu
    const [isOpenMenu, openModalMenu, closeModalMenu] = useModal(false);

    return(
        <div>
            <div onClick={openModalMenu}>
                {element}
            </div>
            <ModalMenu isOpen={isOpenMenu} closeModal={closeModalMenu}>
                {content}
                    <div onClick={closeModalMenu}>
                        {elementClose}
                    </div>
            </ModalMenu>
        </div>
    )
}