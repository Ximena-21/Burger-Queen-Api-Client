import "./style.scss"
import logo from '../../assets/images/logoHeader.png'
import menu from '../../assets/images/menu.png'
import user from '../../assets/images/user.png'
import { SideMenu } from "../SideMenu/SideMenu"
import { ModalsMenu } from "../../Modals/ModalMenu/ModalsMenu"

export const Header = () => {

    return (
        <header className="header">
            {/* <Modals
                btnEdit=
                {<img src={menu} alt="" className="header_menu" />}

                modal={<SideMenu />}
            /> */}
            <ModalsMenu 
            element={<img src={menu} alt="" className="header_menu" />}
            content={<SideMenu />}
            />
            {/* <img src={menu} alt="" className="header_menu" /> */}
            {/* <SideMenu /> */}
            <img src={logo} alt="" className="header_logo" />
            <div className="header_user">
                <img src={user} alt="" className="header_user--img" />
                <span className="header_user--name">Nombre de Usuario</span>
            </div>

        </header>
    )
}