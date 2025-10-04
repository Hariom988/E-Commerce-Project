import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="flex mx-auto max-w-[1440px] text-white flex-col gap-y-10 px-3 md:px-10 py-10 md:py-15 items-center bg-[#333333]">
      <div className="flex gap-5 md:gap-5 flex-col md:flex-row w-full justify-between ">
        <div className="flex gap-x-10 md:gap-y-5 flex-row md:flex-col items-center md:items-start justify-between md:justify-normal">
          <div>
            <h1 className="font-bold text-2xl media454:text-3xl">Funiro.</h1>
          </div>
          <div className="text-gray-400">
            <p className=" text-xs media454:text-sm media585:text-[16px] max-w-3xs">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
          </div>
        </div>
        <div className="flex justify-between flex-row md:flex-col gap-5 items-center">
          <div className="text-gray-400">
            <Link to={"/"}>Links</Link>
          </div>
          <div className="flex text-xs media454:text-lg flex-row md:flex-col gap-8">
            <Link to={"/"}>Home</Link>
            <Link to={"/"}>Shop</Link>
            <Link to={"/"}>About</Link>
            <Link to={"/"}>Contact</Link>
          </div>
        </div>
        <div className="flex justify-between md:justify-normal flex-row md:flex-col gap-5 items-center">
          <div className="text-gray-400">
            <p>Help</p>
          </div>
          <div className="flex items-center text-xs media454:text-lg flex-row md:flex-col md:gap-8 gap-4">
            <Link to={"/"}>Payment Options</Link>
            <Link to={"/"}>Returns</Link>
            <Link to={"/"}>Privacy Policies</Link>
          </div>
        </div>
        <div className="flex flex-row md:flex-col  gap-12">
          <div className="text-gray-400">
            <p>Newsletter</p>
          </div>
          <div className="flex text-xs media454:text-lg gap-y-2 flex-col  items-center gap-x-4">
            <input
              type="email"
              className="text-xs media585:text-sm border-b-[2px] "
              placeholder="Enter Your Email Address   "
            />
            <p>SUBSCRIBE</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full gap-y-5">
        <hr />
        <p>2025 furino. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
