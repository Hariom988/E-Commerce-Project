import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand Section */}
          <div className="col-span-2 sm:col-span-1 space-y-3">
            <h2 className="text-xl font-bold text-gray-900">Funiro.</h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
          </div>

          {/* Links Section */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-gray-400 uppercase">
              Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-900 hover:text-[#B88E2F] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="text-sm text-gray-900 hover:text-[#B88E2F] transition-colors"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-gray-900 hover:text-[#B88E2F] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-gray-900 hover:text-[#B88E2F] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-gray-400 uppercase">
              Help
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/payment"
                  className="text-sm text-gray-900 hover:text-[#B88E2F] transition-colors"
                >
                  Payment
                </Link>
              </li>
              <li>
                <Link
                  to="/returns"
                  className="text-sm text-gray-900 hover:text-[#B88E2F] transition-colors"
                >
                  Returns
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-sm text-gray-900 hover:text-[#B88E2F] transition-colors"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section - Compact */}
          <div className="col-span-2 sm:col-span-1 space-y-3">
            <h3 className="text-xs font-semibold text-gray-400 uppercase">
              Newsletter
            </h3>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-1.5 text-xs sm:text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#B88E2F]"
              />
              <button className="px-3 py-1.5 bg-[#B88E2F] text-white text-xs font-medium rounded hover:bg-[#9a7628] transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Compact */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-3">
          <p className="text-xs sm:text-sm text-gray-600 text-center">
            2025 Funiro. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
