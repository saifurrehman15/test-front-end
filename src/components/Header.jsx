import { Menu, X } from "lucide-react";
import logo from "../assets/images/logo.png";
import Sidebar from "./side-bar";
import { useState } from "react";
import { motion } from "framer-motion";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="header">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8 col-md-10 col-12">
            <div className="row align-items-center header-bg mx-lg-0 mx-2">
              <div className="col-lg-3 col-md-6 col-6">
                <div className="logo-area">
                  <img src={logo} className="img-fluid" alt="Logo" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12 d-lg-block d-none">
                <ul className="lists">
                  <li className="list-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="list-item">
                    <a href="#">Template</a>
                  </li>
                  <li className="list-item">
                    <a href="#">Pricing</a>
                  </li>
                  <li className="list-item">
                    <a href="#">About</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 col-6 col-end">
                <div className="btn-area text-end">
                  <a href="#" className="primary-btn try-btn">
                    Try it now
                  </a>
                  <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="menu-btn"
                  >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
