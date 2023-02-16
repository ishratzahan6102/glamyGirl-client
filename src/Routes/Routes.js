import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Categories from "../Pages/Categories/Categories";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import PageNotFound from "../Pages/PageNotFound";
import Signup from "../Pages/Signup/Signup";
import OrderList from "../Dashboard/OrderList/OrderList";
import DashboardLayout from "../Layout/DashboardLayout";
import Dashboard from "../Dashboard/Dashboard";
import Shop from "../Pages/Categories/Shop/Shop";
import AddProduct from "../Dashboard/AddProduct/AddProduct";
import AddCustomer from "../Dashboard/AddCustomer/AddCustomer";
import Products from "../Dashboard/Products/Products";
import Customers from "../Dashboard/Customers/Customers";




export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            { path: '/', element: <Home></Home> },
            { path: '/categories', element: <Categories></Categories> },
            { path: '/products/:brand', element: <Shop></Shop>, loader: ({ params }) => fetch(`https://glamy-girl-server.vercel.app/products/${params.brand}`) },
            { path: '/login', element: <Login></Login> },
            { path: '/signup', element: <Signup></Signup> },
            // { path: '*', element: <PageNotFound></PageNotFound> },
        ]
    },
    {
        path: '/dashboard',
        element:  <DashboardLayout></DashboardLayout>,
        children: [
            { path: '/dashboard/addProduct', element: <AddProduct></AddProduct> },
            { path: '/dashboard/product', element:  <Products></Products> },
            { path: '/dashboard/addCustomer', element: <AddCustomer></AddCustomer> },
            { path: '/dashboard/customer', element: <Customers></Customers> },
            { path: '/dashboard/order', element: <OrderList></OrderList> },
        ]
    },
])