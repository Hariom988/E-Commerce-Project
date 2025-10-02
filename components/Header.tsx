import logo from "../src/assets/logo.svg";
import Heart from "../src/assets/heart-icon.svg";
import Cart from "../src/assets/shopping-cart-icon.svg";
import Account from "../src/assets/account-icon.svg";
import Search from "../src/assets/search-icon.svg";
import MenuBtn from "../src/assets/menu-burger.svg";
import closeBtn from "../src/assets/menu-close-btn.svg";
import { useState } from "react";

const Header = () => {
  const [btnClicked, setBtnClicked] = useState("");
  return (
    <>
      <header className="flex relative px-5 items-center justify-between lg:px-7 py-4 shadow-sm">
        <div id="logo-container" className="flex  items-center">
          <img src={logo} alt="logo" />
          <p className="text-3xl lg:text-4xl font-bold ">Furniro</p>
        </div>
        <div
          id="menu-container"
          className="cursor-pointer flex md:hidden z-10 relative"
        >
          <div id="ham-burger-menu">
            <img
              src={MenuBtn}
              className="w-7"
              onClick={() => setBtnClicked("clicked")}
              alt=""
            />
          </div>

          {btnClicked && (
            <div className="absolute flex flex-col rounded-2xl bg-gray-50 w-40 h-100 right-0">
              <div id="ham-burger-menu" className="mt-1">
                <img
                  src={closeBtn}
                  onClick={() => setBtnClicked("")}
                  className="absolute  right-0 w-7"
                  alt=""
                />
              </div>
              <div className="flex flex-col mt-7 justify-between gap-4 px-5">
                <a href="#">Home</a>
                <a href="#Shop">Shop</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
                <div className="flex flex-col justify-between mt-7 gap-3">
                  <a
                    href="#account"
                    className="inline-flex gap-3 w-full justify-between"
                  >
                    <a href="#account">Account</a>
                    <img src={Account} alt="" />
                  </a>
                  <a
                    href="#wishList"
                    className="inline-flex gap-3 w-full justify-between"
                  >
                    <a href="#account">Wish List</a>
                    <img className="w-7" src={Heart} alt="" />
                  </a>
                  <a
                    href="#cart"
                    className="inline-flex gap-3 w-full justify-between"
                  >
                    <a href="#account">Cart</a>
                    <img className="w-7" src={Cart} alt="" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
        <div
          id="link-container"
          className="hidden md:flex justify-between w-[75%] lg:w-[70%]"
        >
          <nav className="flex gap-12 items-center justify-between lg:gap-17">
            <a href="#">Home</a>
            <a href="#Shop">Shop</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
          <div
            className="flex gap-5 items-center justify-between lg:gap-11"
            id="icons-section"
          >
            <a href="">
              <img className="w-7" src={Account} alt="" />
            </a>
            <a href="">
              <img src={Search} alt="" />
            </a>
            <a href="">
              <img className="w-7" src={Heart} alt="" />
            </a>
            <a href="">
              <img className="w-7" src={Cart} alt="" />
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
