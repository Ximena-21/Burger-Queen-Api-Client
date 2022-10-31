import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const url = "http://localhost:8080/login";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [postResult, setPostResult] = useState([]);
  
  /* Cambio de rutas*/
  const navigate = useNavigate(); 

  async function postData() {

    let data = {
      email: email,
      password: password,
    };

    console.log("data entrando", data);
    
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.status >= 400) {
      alert("Validación incorrecta, intenta nuevamente");
    } else {
      const response = await res.json();
      window.localStorage.setItem("loginToken", response.accessToken);
      console.log("respuesta json ", response);
      setPostResult(data);
      navigate("/products");
    }
  }

  return (
    <form
      action=""
      className="loginPage_form"
      onSubmit={(e) => {
        e.preventDefault();
        console.log("input enviados ", email, password);
        setEmail("");
        setPassword("");
      }}
    >
      <input
        type="email"
        name="email"
        id="email"
        className="loginPage_input"
        placeholder="Correo"
        value={email}
        onChange={(ev) => setEmail(ev.target.value)}
      />
      <input
        type="password"
        name="password"
        id="password"
        className="loginPage_input"
        placeholder="Contraseña"
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
      />
      <button className="loginPage_btn" id="btnForm" onClick={postData}>
        Iniciar Sesión
      </button>
    </form>
  );
};

export default LoginForm;
