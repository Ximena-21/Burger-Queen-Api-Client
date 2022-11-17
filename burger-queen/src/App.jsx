import { useState } from "react";
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import "./AppStyles.scss";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { ProductsProvider } from "./context/ProductsContext";
import { UsersProvider } from "./context/UsersContext";
import { WaiterProvider } from "./context/WaiterContext";
import { Login } from "./pages/login/Login";
import { Products } from "./pages/Products/Products";
import { Users } from "./pages/Users/Users";
import { TakesOrder } from "./pages/Waiter/TakesOrder/TakesOrder";


function App() {

  const [user, setUser] = useState(null)

  const handleLogin = async () => {
    const dataUser = await JSON.parse(localStorage.getItem("dataUser"))
    setUser(dataUser)
  }

  handleLogin();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route exact path="/products" element={
            <ProtectedRoute redirectPath="/orders" isAllowed={!!user && !user.role.includes('admin')}>
              <ProductsProvider>
                <Products />
              </ProductsProvider>
            </ProtectedRoute> 
          } />
          <Route exact path="/users" element={
            <UsersProvider>
              <Users />
            </UsersProvider>
          } />
          <Route exact path="/orders" element={
          <WaiterProvider>
              <TakesOrder />
          </WaiterProvider>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
