import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createBrowserRouter, createRoutesFromElements, Route ,RouterProvider} from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from './app/store';


import Home from "./components/home/Home";
import Products from "./components/product/Products";
import Summary from "./components/cart/Summary";
import Checkout from './components/checkout/Checkout';




const defaultTheme = createTheme();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>

        <Route path='' element={<Home />} />
        <Route path='products' element={<Products />} />
        <Route path='orderSummary' element={<Summary />} />
        <Route path="checkOut" element={<Checkout />}/>

    </Route>
  )
);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={store}>
     <ThemeProvider theme={defaultTheme}>
    <RouterProvider router={router} />
    </ThemeProvider>
    </Provider>
  </React.StrictMode>
);


