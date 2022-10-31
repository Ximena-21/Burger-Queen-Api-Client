import "./style.scss"
import logo from "../../assets/images/logo.png"
import background from "../../assets/images/BackgroundLogin.jpg"

export function Login () {
    return (
        <div className="loginPage">

            <img className="loginPage_background" src={background} />

            <div className="loginPage_container">
                <img className="loginPage_logo" src={logo} />

                <form action="" className="loginPage_form">
                
                    <input type="email" name="email" id="email" className="loginPage_input" placeholder="Correo"/>
                    <input type="password" name="password" id="password" className="loginPage_input" placeholder="Contraseña"/>
                    
                    <button className="loginPage_btn" id="btnForm">Iniciar Sesión</button>
                </form>
            </div>

        </div>
    )
}