import 'remixicon/fonts/remixicon.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notfound from './components/Notfound';
import Product from './components/Admin/Products';
import Layout from './components/Admin/Layout';
import Orders from './components/Admin/Orders';
import Dashboard from './components/Admin/Dashboard';
import Customers from './components/Admin/Customers';
import Payments from './components/Admin/Payments';
import Settings from './components/Admin/Settings';
import Home from './components/Home';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />}/>
        <Route path="/admin" element={<Layout />}/>
        <Route path="/admin">
          <Route path="products" element={<Product />}/>
          <Route path="orders" element={<Orders />}/>
          <Route path="dashboard" element={<Dashboard />}/>
          <Route path="customers" element={<Customers />}/>
          <Route path="payments" element={<Payments />}/>
          <Route path="settings" element={<Settings />}/>
        </Route>
        <Route path="*" element={<Notfound />}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App;