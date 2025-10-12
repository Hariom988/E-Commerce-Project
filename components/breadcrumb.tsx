// components/Breadcrumb.jsx
import { Link, useLocation } from "react-router-dom";
interface BreadcrumbProps {
  productName?: string;
}
const Breadcrumb = ({ productName }: BreadcrumbProps) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="bg-[#F9F1E7] py-6 sm:py-8 px-4 sm:px-6 lg:px-10">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-center flex-wrap gap-3 sm:gap-4 text-sm sm:text-base">
          {/* Home Link */}
          <Link
            to="/"
            className="text-gray-500 hover:text-black transition-colors"
          >
            Home
          </Link>

          {/* Arrow after Home */}
          <span className="text-black text-lg font-light">›</span>

          {/* Shop Link */}
          <Link
            to="/shop"
            className="text-gray-500 hover:text-black transition-colors"
          >
            Shop
          </Link>

          {/* Vertical Pipe Separator | Product Name (if exists) */}
          {productName && (
            <>
              <span className="text-gray-400 text-2xl font-thin">|</span>
              <span className="text-black font-normal">{productName}</span>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Breadcrumb;
