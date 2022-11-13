import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import "./AppStyles.scss";
import { ProductsProvider } from "./context/ProductsContext";
import { UsersProvider } from "./context/UsersContext";
import { Login } from "./pages/login/Login";
import { Products } from "./pages/Products/Products";
import { Users } from "./pages/Users/Users";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route exact path="/products" element={
            <ProductsProvider>
              <Products />
            </ProductsProvider>
          } />
          <Route exact path="/users" element={
            <UsersProvider>
              <Users />
            </UsersProvider>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
