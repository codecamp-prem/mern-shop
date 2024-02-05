import siteLogo from "../assets/logo.png";
import FbSocial from "../assets/socials/icon-facebook.svg";
import InstaSocial from "../assets/socials/icon-instagram.svg";
import PiSocial from "../assets/socials/icon-pinterest.svg";
import XSocial from "../assets/socials/icon-twitter.svg";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="py-16 bg-veryDarkViolet">
      <div className="container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start">
        {/* logo */}
        <img src={siteLogo} alt="logo" />
        {/* MenuS container */}
        <div className="flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0">
          {/* menu1 */}
          <div className="flex flex-col items-center w-full md:items-start">
            <div className="mb-5 font-bold text-white capitalize">Features</div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <a
                href="#"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                products
              </a>
              <a
                href="#"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                categories
              </a>
              <a
                href="#"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                AI Suggests
              </a>
            </div>
          </div>
          {/* menu2 */}
          <div className="flex flex-col items-center w-full md:items-start">
            <div className="mb-5 font-bold text-white capitalize">
              Resources
            </div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <a
                href="#"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                blog
              </a>
              <a
                href="#"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                developers
              </a>
              <a
                href="#"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                support
              </a>
            </div>
          </div>
          {/* menu3 */}
          <div className="flex flex-col items-center w-full md:items-start">
            <div className="mb-5 font-bold text-white capitalize">Company</div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <a
                href="#"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                about
              </a>
              <a
                href="#"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                our team
              </a>
              <a
                href="#"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                careers
              </a>
              <a
                href="#"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                contact
              </a>
            </div>
          </div>
        </div>
        {/* social */}
        <div className="flex space-x-6">
          <a href="#">
            <img src={FbSocial} alt="facebook" className="ficon" />
          </a>
          <a href="#">
            <img src={InstaSocial} alt="instagram" className="ficon" />
          </a>
          <a href="#">
            <img src={PiSocial} alt="pinterest" className="ficon" />
          </a>
          <a href="#">
            <img src={XSocial} alt="twitter" className="ficon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
