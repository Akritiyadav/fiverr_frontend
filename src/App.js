import {React } from 'react'
import Navbar from './components/navbar/Navbar'
import {RouterProvider, createBrowserRouter,Outlet} from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import Footer from './components/footer/Footer'
import Gigs from './pages/gigs/Gigs.jsx'
import Gig from './pages/gig/Gig.jsx'
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import Add from './pages/add/Add.jsx'
import Orders from './pages/orders/Orders.jsx'
import Messages from './pages/messages/Messages.jsx'
import Message from './pages/message/Message.jsx'
import MyGigs from './pages/myGigs/MyGigs.jsx'
import Pay from "./pages/pay/Pay.jsx"
import Success from './pages/success/Success'
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import './App.scss'

function App() {
  const queryClient = new QueryClient();
  const Layout =()=>{
    return (
      <div className="app">
             <QueryClientProvider client={queryClient}>
          <Navbar />
          <Outlet />
          <Footer />
        </QueryClientProvider>

      </div>
    )
  }


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children :[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/gigs",
          element:<Gigs/>
        },
        
        {
          path:"/gig/:id",
          element:<Gig/>
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path:"/orders",
          element:<Orders/>
        },
        {
          path:"/myGigs",
          element:<MyGigs/>
        },
        {
          path:"/add",
          element:<Add/>
        },
        {
          path:"/messages",
          element:<Messages/>
        },
        {
          path:"/message/:id",
          element:<Message/>
        },
        {
          path:"/pay/:id",
          element:<Pay/>
        },
        {
          path:"/success",
          element:<Success/>
        },
      ]
    },
  ])
  
  return (
    <div>
     {/* <Navbar/> */}
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
