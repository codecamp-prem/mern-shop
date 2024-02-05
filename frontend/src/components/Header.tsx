import { useEffect, useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import siteLogo from "../assets/react.svg";
import useWindowSize from "../hooks/useWindowSize";
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

  return (
    <nav className="relative container mx-auto p-6">
      {/* flex container for all items */}
      <div className="flex items-center justify-between">
        {/* logo & menu */}
        <div className="flex items-center space-x-20">
          <img src={siteLogo} alt="logo" />
          {/* <div className="hidden space-x-8 font-bold lg:flex">
            <a
              href="#"
              className="text-grayishVoilet hover:text-veryDarkVoilet"
            >
              Products
            </a>
            <a
              href="#"
              className="text-grayishVoilet hover:text-veryDarkVoilet"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-grayishVoilet hover:text-veryDarkVoilet"
            >
              Resources
            </a>
          </div> */}
        </div>
        {/* right button menu */}
        <div className="rightButtonMenu">
          <div className="hover:text-veryDarkViolet">
            <CiShoppingCart className="w-full h-10" />
          </div>
          <div className="hover:text-veryDarkViolet">Login</div>
          <a href="#" className="signUp">
            Sign Up
          </a>
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
            Features
          </a>
          <a href="#" className="w-full text-center">
            Pricing
          </a>
          <a href="#" className="w-full text-center">
            Resources
          </a> */}
          <a href="#" className="w-full text-center ">
            Your Cart <CiShoppingCart className="w-full h-14" />
          </a>
          <a
            href="#"
            className="w-full text-center pt-6 border-t border-gray-400"
          >
            Login
          </a>
          <a href="#" className="w-full text-center py-3 rounded-full bg-cyan">
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
