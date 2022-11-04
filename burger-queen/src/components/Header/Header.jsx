import "./style.scss"
import logo from '../../assets/images/logoHeader.png'
import menu from '../../assets/images/menu.png'
import user from '../../assets/images/user.png'
import { SideMenu } from "../SideMenu/SideMenu"
import { Modals } from "../../Modals/Modals"
import { useModal } from "../../Modals/useModal"


export const Header = () => {
    const [, openModalPortal, ,] = useModal(false)

    return (
        <header className="header">
            <Modals
                btnEdit=
                {<img src={menu} alt="" className="header_menu" />}

                modal={<SideMenu />}
            />
            
            <img src={logo} alt="" className="header_logo" />
            <div className="header_user">
                <img src={user} alt="" className="header_user--img" />
                <span className="header_user--name">Name User</span>
            </div>

        </header>
    )
}