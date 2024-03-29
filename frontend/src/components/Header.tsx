import { useEffect, useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import siteLogo from "../assets/logo.png";
import useWindowSize from "../hooks/useWindowSize";
import { logout } from "../store/slices/authSlice";
import { useLogoutMutation } from "../store/slices/usersApiSlice";
import ProfileCard from "./ProfileCard";
import "./header.css";

const Header = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const screenSize = useWindowSize();
  useEffect(() => {
    if (screenSize.width >= 1024) {
      //default breakpoints of tailwindCSS
      setIsMobileMenu(false);
    }
  }, [screenSize]);

  const handleMobileMenuOption = () => {
    setIsMobileMenu(!isMobileMenu);
  };

  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();
  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <nav className="relative container mx-auto p-6">
      {/* flex container for all items */}
      <div className="flex items-center justify-between">
        {/* logo & menu */}
        <div className="flex items-center space-x-20">
          <Link to="/">
            <img
              src={siteLogo}
              alt="logo"
              className="bg-veryDarkViolet rounded-xl"
            />
          </Link>
          {/* <div className="hidden space-x-8 font-bold lg:flex">
            <a
              href="#"
              className="text-grayishVoilet hover:text-veryDarkVoilet"
            >
              Products
            </a>
          </div> */}
        </div>
        {/* right button menu */}
        <div className="rightButtonMenu">
          <div className="hover:text-veryDarkViolet relative">
            <CiShoppingCart className="w-full h-14" />
            {cartItems.length > 0 && (
              <Link to="/cart" className="absolute -mt-6 ml-4">
                <span className="p-1 text-xs text-black bg-yellow-400 rounded-lg">
                  {cartItems.reduce((a, c) => a + c.productQty, 0)}
                </span>
              </Link>
            )}
          </div>
          {userInfo ? (
            <ProfileCard user={userInfo} logoutHandler={logoutHandler} />
          ) : (
            <>
              <div className="hover:text-veryDarkViolet">
                <Link to="/login">Login</Link>
              </div>
              <Link to="/signup" className="signUp">
                Sign Up
              </Link>
            </>
          )}
        </div>
        {/* Hamburger Button(mobile) */}
        <div className="lg:hidden">
          <button
            className={`block hamburger lg:hidden focus:outline-none ${
              isMobileMenu && "open"
            }`}
            id="menu-btn"
            type="button"
            onClick={handleMobileMenuOption}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        id="menu"
        className={`mobileMenu ${isMobileMenu ? "flex" : "hidden"}`}
      >
        <div className="mobileMenuList">
          {/* <a href="#" className="w-full text-center">
            Products
          </a> */}
          <Link to="/cart" className="w-full text-center ">
            Your Cart{" "}
            <div className="relative">
              <CiShoppingCart className="w-full h-14" />
              {cartItems.length > 0 && (
                <span className="absolute -mt-8 p-1 ml- text-xs text-black bg-yellow-400 rounded-lg">
                  {cartItems.reduce((a, c) => a + c.productQty, 0)}
                </span>
              )}
            </div>
          </Link>
          {userInfo ? (
            <ProfileCard user={userInfo} />
          ) : (
            <>
              <Link
                to="/login"
                className="w-full text-center pt-6 border-t border-gray-400"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="w-full text-center py-3 rounded-full bg-cyan"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
