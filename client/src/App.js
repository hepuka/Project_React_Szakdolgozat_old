//import tools
import "./App.css";

//import components
import NavBar from "./components/navbar.component";
import KunPaosCoffee from "./components/kunpaoscoffee";
import AllUser from "./components/allUser";
import AddUser from "./components/addUser.component";
import EditUser from "./components/editUser";
import AddDrink from "./components/addDrink.component";
import AddCoffee from "./components/addCoffee.component";
import AddCake from "./components/addCake-component";
import Products from "./components/products.component";
import Orders from "./components/order.component";

//import routers
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<KunPaosCoffee />} />
          <Route path="/all" element={<AllUser />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
          <Route path="/adddrink" element={<AddDrink />} />
          <Route path="/addcoffee" element={<AddCoffee />} />
          <Route path="/addcake" element={<AddCake />} />
          <Route path="/allproducts" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
