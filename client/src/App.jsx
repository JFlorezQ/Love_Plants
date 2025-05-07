import "./App.css";
import ProductDetail from "./views/ProductDetail/ProductDetail";
import Home from "./views/Home/Home";
import Shoppingcart from "./views/Shoppingcart/Shoppingcart";
import UserProfile from "./views/UserProfile/UserProfile";
import EditUserProfile from "./views/UserProfile/editUserProfile";
import About from "./views/About/About";
import { Routes, Route, useLocation } from "react-router-dom";
import UserForm from "./Components/UserForm/UserForm";
import UserLogin from "./Components/UserLogin/Userlogin";
import Dashboard from "./views/Dashboard/Dashboard";
import NavBar from "./Components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { getProducts } from "./reduxToolkit/Product/productThunks";
import { useDispatch, useSelector } from "react-redux";
import CreateProduct from "./Components/DashboardComponents/CreateProduct/CreateProduct";
import RegisteredUser from "./Components/DashboardComponents/RegisteredUser/RegisteredUser";
import { getColor } from "./reduxToolkit/Color/colorThunks";
import ProductList from "./Components/DashboardComponents/ProductList/ProductList";
import EditProduct from "./Components/DashboardComponents/EditProduct/EditProduct";
import Favorites from "./views/Favorites/favorites";
import PaymentSuccess from "./views/Payment/PaymentSuccess";
import Payment from "./views/Payment/Payment";
import ShippingForm from "./views/Shoppingcart/ShippingForm";
import ValidateAddress from "./views/Shoppingcart/validateAddress";
import SelectPayment from "./views/Shoppingcart/SelectPayment";
import Footer from "./Components/Footer/Footer";
import PurchaseHistoryComponent from "./views/UserProfile/purchaseHistory";
import ShoppingHistory from "./Components/DashboardComponents/ShoppingHistory/ShoppingHistory";
import Creators from "./Components/Footer/Desarrolladores";
import ForgetPassword from "./Components/PasswordRecoveryComponents/ForgetPassword";
import OtpInput from "./Components/PasswordRecoveryComponents/OtpInput";
import VerificationSuccess from "./Components/PasswordRecoveryComponents/VerificationSuccess";
import NotFound from "./Components/404/NotFound";
import Cookies from "js-cookie";
import Statistics from "./Components/DashboardComponents/Statistics/Statistics";

function App() {
  const dispacth = useDispatch();
  const { login } = useSelector((state) => state.login);
  const { usersGoogle } = useSelector((state) => state.users);
  const userSessionFromCookies = Cookies.get("userSession");
  const userGoogleFromCookies = Cookies.get("userGoogle");
  const userSession = userSessionFromCookies
    ? JSON.parse(userSessionFromCookies)
    : null;
  const userGoogleSession = userGoogleFromCookies
    ? JSON.parse(userGoogleFromCookies)
    : null;

  const combinedUserSession =
    userSession && userSession.role
      ? userSession.role
      : login && login.userSession
      ? login.userSession.role
      : usersGoogle && usersGoogle.role
      ? usersGoogle.role
      : userGoogleSession && userGoogleSession.role
      ? userGoogleSession.role
      : null;
  const isAdmin = combinedUserSession === "admin";

  useEffect(() => {
    dispacth(getProducts());
    dispacth(getColor());
  }, [dispacth]);
  const location = useLocation();
  const isDashboardRoute = location.pathname.startsWith("/dashboard");

  const [actualPage, setActualPage] = useState(1);

  const handlePageChange = (newPage) => {
    setActualPage(newPage);
  };

  return (
    <div className="contents">
      {!isDashboardRoute && (
        <NavBar
          handlePageChange={handlePageChange}
          actualPage={actualPage}
          setActualPage={(num) => setActualPage(num)}
        />
      )}
      <div className=" bg-whiteSmoke min-h-screen dark:bg-onyx">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                handlePageChange={handlePageChange}
                actualPage={actualPage}
                setActualPage={(num) => setActualPage(num)}
              />
            }
          />
          <Route path="/detail/:id" element={<ProductDetail />} />
          {combinedUserSession && (
            <Route path="/shoppingcart" element={<Shoppingcart />} />
          )}
          {combinedUserSession && (
            <Route path="/shippingform" element={<ShippingForm />} />
          )}
          {combinedUserSession && (
            <Route path="/validateaddress" element={<ValidateAddress />} />
          )}
          {combinedUserSession && (
            <Route path="/selectpayment" element={<SelectPayment />} />
          )}
          <Route path="/favorites" element={<Favorites />} />
          {combinedUserSession && (
            <Route path="/userprofile/:id" element={<UserProfile />} />
          )}
          {combinedUserSession && (
            <Route path="/edituserprofile/:id" element={<EditUserProfile />} />
          )}
          <Route path="/userform" element={<UserForm />} />
          <Route path="/userlogin" element={<UserLogin />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/otpinput" element={<OtpInput />} />
          <Route
            path="/verificationsuccess"
            element={<VerificationSuccess />}
          />
          <Route path="/about" element={<About />} />
          {isAdmin && <Route path="/dashboard" element={<Dashboard />} />}
          {isAdmin && (
            <Route
              path="/dashboard/createProduct"
              element={<CreateProduct />}
            />
          )}
          {isAdmin && (
            <Route path="/dashboard/productList" element={<ProductList />} />
          )}
          {isAdmin && (
            <Route
              path="/dashboard/editProduct/:id"
              element={<EditProduct />}
            />
          )}
          {isAdmin && (
            <Route
              path="/dashboard/shoppingHistory"
              element={<ShoppingHistory />}
            />
          )}
          {isAdmin && (
            <Route
              path="/dashboard/registeredUser"
              element={<RegisteredUser />}
            />
          )}
          {isAdmin && (
            <Route path="/dashboard/productList" element={<ProductList />} />
          )}
          {isAdmin && (
            <Route path="/dashboard/statistics" element={<Statistics />} />
          )}
          {combinedUserSession && (
            <Route path="/payment/success" element={<PaymentSuccess />} />
          )}
          {combinedUserSession && (
            <Route path="/payment/:userId" element={<Payment />} />
          )}
          <Route
            path="/history/:userId"
            element={<PurchaseHistoryComponent />}
          />
          <Route path="/creators" element={<Creators />} />
          {/*SIEMPRE DEJAR LA RUTA NOT FOUND AL FINAL DE LA LISTA */}
          <Route path="*" element={<NotFound />} />
          {/*SIEMPRE DEJAR LA RUTA NOT FOUND AL FINAL DE LA LISTA */}
        </Routes>
      </div>
      {!isDashboardRoute && <Footer />}
    </div>
  );
}

export default App;
