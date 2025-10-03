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
      <div className="w-full ">
        <header className="flex mx-auto max-w-[1440px]  w-full px-5 items-center justify-between lg:px-7 py-4 shadow-sm">
          <div id="logo-container" className="flex max-w-[1440px] items-center">
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
      </div>
      <main className="flex justify-end items-center px-11  bg-[url('../src/assets/hero-img.png')] max-w-[1440px] mx-auto  bg-cover min-h-screen bg-no-repeat">
        <div className="flex w-sm h-66  media381:h-63 media454:h-58 p-3 media454:p-5 flex-col gap-3  sm:gap-6 bg-[#FFF3E3] sm:w-lg sm:h-96 sm:px-13 sm:py-10 ">
          <p className="font-bold">NEW ARRIVAL</p>
          <h1 className="text-2xl sm:text-5xl font-bold text-[#B88E2F]">
            Discover Our New Collection
          </h1>
          <p className="text-sm sm:text-[16px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
            accusantium optio facere voluptates voluptatibus.
          </p>
          <div className="text-xs cursor-pointer flex items-center justify-center w-24 sm:w-48 h-6 sm:h-12 bg-[#B88E2F] font-bold text-white ">
            BUY NOW
          </div>
        </div>
      </main>
    </>
  );
};

export default Header;
