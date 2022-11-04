import "./style.scss"
import logo from '../../assets/images/logoHeader.png'
import menu from '../../assets/images/menu.png'
import user from '../../assets/images/user.png'

export const Header = () => {
    return (
        <header className="header">
            <img src={menu} alt="" className="header_menu"/>
            <img src={logo} alt="" className="header_logo"/>
            <div className="header_user">
                <img src={user} alt="" className="header_user--img" />
                <span className="header_user--name">Name User</span>
            </div>

        </header>
    )
}