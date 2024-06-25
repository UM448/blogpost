import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy, useEffect,useState } from "react";
import { useDispatch,useSelector } from "react-redux";

import { Alert, Snackbar, Button  } from '@mui/material';

///testing git////
const Home = lazy(() => import("./CMS/Home/Home")); 

const HomeSignIn= lazy(()=>import("./CMS/Home/homeSignIn"));
const HomeSignUp= lazy(()=>import("./CMS/Home/homeSignUp"));
const Header = lazy(() => import("./Layout/Header/Header"));
const Footer = lazy(() => import("./Layout/Footer/Footer"));
const RegistrationBlog = lazy(() => import("./Auth/registration/registrationBlog"));
const RegistrationUser = lazy(() => import("./Auth/registration/registrationUser"));
const Login = lazy(() => import("./Auth/login/login"));


const ProductCreate =lazy(()=>import("./CMS/productList/createProduct"))
const ProductList =lazy(()=>import("./CMS/productList/productList"))
const ProductUpdate =lazy(()=>import("./CMS/productList/updateList"))
const DraftBlogs=lazy(()=>import("./CMS/productList/draftBlogs"))
const UserDashboard=lazy(()=>import("./Auth/user/userDashboard"))
const UpdatePassword=lazy(()=>import("./Auth/user/updatePassword")) 
const ForgetPassword=lazy(()=>import("./Auth/user/forgetPassword"))



const Card =lazy(()=>import("./CMS/productList/card"))

function App() {
  const dispatch = useDispatch();
  const { isUserLogin,isBlogLogin } = useSelector((state) => state.Auth);

  function PrivateRoute({ children }) {
   
   

    const [navigate, setNavigate] = useState(false);
    const token =
      localStorage.getItem("token") || localStorage.getItem("token2") ||sessionStorage.getItem("token");

 
 const [alertOpen, setAlertOpen] = useState(false);
      useEffect(() => {
        if (!token) {
          const timer = setTimeout(() => {
            setAlertOpen(true);
          }, 1000); 
    
          return () => clearTimeout(timer); 
        }
      }, [token]);

      const handleClose = () => {
        setAlertOpen(false);
        setNavigate(true);
      };
       


      setTimeout(() => {
        setNavigate(true);
      }, 5000); 
    
    
     

    return token !== null && token !== undefined ? (
      children
    ) : (
      <>
    {navigate && <Navigate to="/homesignin" />}
        <Snackbar
        open={alertOpen}
        onClose={handleClose}
        autoHideDuration={null} 
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
       
        <Alert severity="error" sx={{ mt: 2 }}  action={
            <Button color="inherit" size="small" onClick={handleClose}>
              OK
            </Button>
          } >
        Please go for login, otherwise you can't access this page.
      </Alert>
      </Snackbar>
      </>
    )
  }
 

  const PublicRouteNames = [
    {
      path: "/regblog",
      Component: <RegistrationBlog />,
    },
    {
      path: "/reguser",
      Component: <RegistrationUser />,
    },
    {
      path: "/login",
      Component: <Login />,
    },
    {
      path: "/",
      Component: <Home />,
    },
    
    {
      path: "homesignin",
      Component: <HomeSignIn />,
    },
    {
      path: "homesignup",
      Component: <HomeSignUp />,
    },

    
    {
      path: "/card",
      Component: <Card />,
    },
   
    
    
  ];

  const PrivateRouteNames = [
   
{path:"/createproduct",
Component:<ProductCreate/>},

  {
    path: "/productlist",
    Component: <ProductList />,
  },
  {
    path: "/productupdate/:id",
    Component: <ProductUpdate />,
  },
  {
    path: "/draftblogs",
    Component: <DraftBlogs />,
  },

  {path:"/user",
    Component:<UserDashboard/>},
    {
        path: "/updatepassword/:id",
        Component: <UpdatePassword />,
      },

      {
        path: "/forgetpassword",
        Component: <ForgetPassword />,
      },
     
     
      
    
  ];
    

 
  return (





    


    <Suspense fallback={<h2>Loading.....</h2>}>
      <Router>
        <Header />
        <Routes>
          {PublicRouteNames?.map((route, index) => {
            return (
              <Route exact path={route.path} element={route.Component} />
            );
          })}

          {PrivateRouteNames?.map((route, index) => {
            return (
              <Route
                path={route.path}
                element={<PrivateRoute>{route.Component}</PrivateRoute>}
              />
            );
          })}
          

        </Routes>
        <Footer />
      </Router>
    </Suspense>




  )
}

export default App;
