import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './component/pages/Home.jsx'
import { Provider } from 'react-redux'
import store from './component/store/store.js'
import Cart from './component/pages/Cart.jsx'
import Login from './component/pages/Login.jsx'
import DetailProduct from './component/pages/DetailProduct.jsx'
import CheckOut from './component/pages/CheckOut.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/cart',
    element: <Cart />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/:id',
    element: <DetailProduct />
  },
  {
    path:  'cart/:id',
    element: <CheckOut />
  },
  {
    path: 'detailProduct/:id',
    element: <CheckOut />
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
