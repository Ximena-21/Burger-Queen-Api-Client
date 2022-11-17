import "./style.scss"
import logo from "../../assets/images/logo.png"
import background from "../../assets/images/BackgroundLogin.jpg"
import { LoginForm } from "../../components/Login/LoginForm"




export function Login () {

    // async function getProducts() {
    //     const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdyYWNlLmhvcHBlckBzeXN0ZXJzLnh5eiIsImlhdCI6MTY2ODYxNzQ4MiwiZXhwIjoxNjY4NjIxMDgyLCJzdWIiOiIyIn0.At6oXWN6hnk1nXlND7zAr8YkweCpEPkBfUFwc6HMYm8"
    //     // const token = localStorage.getItem("loginToken")
    //     const url = `http://localhost:8080/users`
    //     const response = await fetch(url, {
    //       method: 'GET',
    //       headers: {
    //         'content-Type': 'application/json',
    //         'authorization': `Bearer ${token}`
    //       },
    //     });
      
    //     const responseData = await response.json()
      
    //     console.log('USUARIOS', responseData)
    //     return responseData
    //   }

    //   getProducts()

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



// feature/PageProducts
