import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getData } from "../../lib/requests";

const LoginForm = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const [postResult, setPostResult] = useState([]);
  
  /* Cambio de rutas*/
  const navigate = useNavigate(); 

  async function handleSubmit(event) {
    event.preventDefault();

    const data = {
      email: email,
      password: password,
    };

      const dataLogin = await getData('login', data)
      if(dataLogin !== null){
        const token = dataLogin.accessToken
        window.localStorage.setItem("loginToken", token);
        navigate('/products')
      }
      else{
        alert('Validación incorrecta, intenta nuevamente');
      }
    
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
}

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
}

  return (
    <form
      className="loginPage_form"
      onSubmit={handleSubmit}
    >
      <input
        type="email"
        name="email"
        className="loginPage_input"
        placeholder="Correo"
        value={email}
        onChange={handleEmailChange}
      />
      <input
        type="password"
        name="password"
        className="loginPage_input"
        placeholder="Contraseña"
        value={password}
        onChange={handlePasswordChange}
      />
      <button className="loginPage_btn">
        Iniciar Sesión
      </button>
    </form>
  );
};

export default LoginForm;
