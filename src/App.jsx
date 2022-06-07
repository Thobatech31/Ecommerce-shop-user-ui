import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import Register from "./pages/Register";
 import Cart from "./pages/Cart";
import {useSelector} from "react-redux";
import PublicRoute from "./routers/PublicRoute";
import PrivateRoute from "./routers/PrivateRoute";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

const App = () => {
    const user = useSelector(state=>state.user.currentUser)
    return(
       <Router>
           <Routes>
               <Route exact path="/"
                      element={
                          <PublicRoute>
                              <Login />
                          </PublicRoute>
                      }
               />
               <Route exact path="/login"
                      element={
                          <PublicRoute>
                              <Login />
                          </PublicRoute>
                      }
               />
               <Route exact path="/register"
                      element={
                          <PublicRoute>
                              <Register />
                          </PublicRoute>
                      }
               />
               <Route exact path="/home"
                      element={
                          <PrivateRoute>
                              <Home />
                          </PrivateRoute>
                      }
               />
               <Route exact path="/product/:id"
                      element={
                          <PrivateRoute>
                              <Product />
                          </PrivateRoute>
                      }
               />
               <Route exact path="/products/:category"
                      element={
                          <PrivateRoute>
                              <ProductList />
                          </PrivateRoute>
                      }
               />
               <Route exact path="/cart"
                      element={
                          <PrivateRoute>
                              <Cart />
                          </PrivateRoute>
                      }
               />

               {/*<Route path="/login" element={user ? <Navigate to={'/'} />  : <Login/>} />*/}
               {/*<Route path="/register" element={user ? <Navigate to={'/'} />  :  <Register/>} />*/}
               {/*<Route exact path="/" element={<Home/>} />*/}
               {/*<Route path="/product/:id" element={<Product/>} />*/}
               {/*<Route path="/products/:category" element={<ProductList/>} />*/}
               {/*<Route path="/cart" element={<Cart/>} />*/}

           </Routes>
       </Router>
   )
};

export default App;