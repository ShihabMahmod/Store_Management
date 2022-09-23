import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './Header';
import Login from './Login';
import Registration from './Registration';
import AddProduct from './AddProduct';
import Update from './Update';
import Productlist from './Productslist';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/productlist" element={<Productlist />}></Route>
          <Route path="/addProduct" element={<AddProduct />}></Route>
          <Route path="/update/:id" element={<Update />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/registratrion" element={<Registration />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
