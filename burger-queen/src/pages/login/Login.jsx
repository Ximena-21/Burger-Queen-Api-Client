import "./style.scss"
import logo from "../../assets/images/logo.png"
import background from "../../assets/images/BackgroundLogin.jpg"
import { LoginForm } from "../../components/Login/LoginForm"

export function Login () {

    const user = JSON.parse(localStorage.getItem("dataUser")) || {}

    if(user.role) return <Navigate to={"/view-orders"} replace/>

    return (
        <div className="loginPage">
            <img className="loginPage_background" src={background} />
            <div className="loginPage_container">
                <img className="loginPage_logo" src={logo} />
                <LoginForm />
            </div>

        </div>
    )
}
