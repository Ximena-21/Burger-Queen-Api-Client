import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './AppStyles.scss'
import { Login } from './pages/login/Login'
import {Products} from "./pages/Products/Products";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          < Route path="/" element={<Login />}/>
          < Route path="/products" element={<Products />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
