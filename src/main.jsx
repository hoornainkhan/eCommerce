import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProductProvider from './COMPONENTS/ProductContext.jsx'
import { CartProvider } from './COMPONENTS/CartContext.jsx'
import CartDetails from './COMPONENTS/CartDetails.jsx'
import ItemS from './categories/ItemS.jsx'
import ItemB from './categories/itemB.jsx'
import { BrowserRouter } from 'react-router-dom/dist/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
    <CartProvider>
 <React.StrictMode>
    {/* <BrowserRouter> */}
    <App />
    {/* </BrowserRouter> */}
   {/* <Switch>
          <Route path="/" exact component={ItemS} />
          <Route path="/itemB" component={ItemB} />
         </Switch>  */}
    </React.StrictMode>
    </CartProvider>
)
