import { Link } from "react-router-dom";
import arrow from "../src/assets/shop-page/right-arrow.svg";
import { useProductData } from "../hooks/useProductData";
import { useEffect, useState } from "react";
import whiteHeartIcon from "../src/assets/white-heart-icon.svg";
import shareIcon from "../src/assets/share-icon.svg";
import ShopCardShimmer from "../components/shopShimmerEffect";
import FeaturesSection from "../components/FeaturesSection";

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(16);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1111) {
        setProductsPerPage(16);
      } else if (window.innerWidth > 860) {
        setProductsPerPage(12);
      } else if (window.innerWidth > 560) {
        setProductsPerPage(8);
      } else {
        setProductsPerPage(8);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const data = useProductData() as any[];
  const [fetchedData, setFetchedData] = useState<any[]>([]);

  useEffect(() => {
    if (data && data.length > 0) {
      const products = data.map((item: any) => ({
        title: item.name,
        id: item.id,
        category: item.category,
        price: item.price,
        rating: item.rating,
        imgSrc: item.image || "",
      }));
      setFetchedData(products);
      setIsLoading(false);
    }
  }, [data]);

  // Pagination Logic
  const totalPages = Math.ceil(fetchedData.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = fetchedData.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Generate page numbers
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 3;

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 2) {
        pageNumbers.push(1, 2, 3);
      } else if (currentPage >= totalPages - 1) {
        pageNumbers.push(totalPages - 2, totalPages - 1, totalPages);
      } else {
        pageNumbers.push(currentPage - 1, currentPage, currentPage + 1);
      }
    }

    return pageNumbers;
  };

  if (isLoading) {
    return <ShopCardShimmer />;
  }

  return (
    <>
      {/* Banner Section */}
      <div
        id="banner"
        className="flex flex-col gap-4 items-center justify-center bg-[url('../src/assets/shop-page/shop-banner.png')] bg-cover bg-center bg-no-repeat w-full min-h-[30vh] sm:min-h-[40vh] relative before:absolute before:inset-0 before:bg-black/10"
      >
        <div className="relative z-10 px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Shop
          </h1>
          <div className="flex flex-row gap-2 items-center justify-center text-gray-700 text-sm sm:text-base">
            <Link to={"/"}>Home</Link>
            <img className="w-2 opacity-60" src={arrow} alt="arrow" />
            <Link to={""} className="font-medium text-[#B88E2F]">
              Shop
            </Link>
          </div>
        </div>
      </div>

      {/* Product Grid Section */}
      <section
        id="shop-section"
        className="flex mx-auto justify-center max-w-[1440px] p-4 sm:p-10 flex-col"
      >
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-7 w-full">
          {currentProducts.map((el) => {
            return (
              <div
                key={el.id}
                id="card"
                className="relative group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 ease-in-out cursor-pointer border border-gray-100"
              >
                <div className="relative h-40 sm:h-56 overflow-hidden bg-gray-50">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    src={el.imgSrc}
                    alt={el.title}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center gap-2 sm:gap-3 p-3 sm:p-4">
                    <button className="w-full max-w-[85%] py-2 sm:py-2.5 px-3 sm:px-4 bg-white text-[#B88E2F] font-semibold text-xs sm:text-sm rounded-md hover:bg-[#B88E2F] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg">
                      Add to Cart
                    </button>
                    <div className="flex gap-3 sm:gap-6 text-white text-xs sm:text-sm font-medium">
                      <button className="flex items-center gap-1 sm:gap-1.5 hover:scale-110 transition-transform duration-200">
                        <img
                          className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                          src={shareIcon}
                          alt="share"
                        />
                        <span>Share</span>
                      </button>
                      <button className="flex items-center gap-1 sm:gap-1.5 hover:scale-110 transition-transform duration-200">
                        <img
                          className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                          src={whiteHeartIcon}
                          alt="like"
                        />
                        <span>Like</span>
                      </button>
                    </div>
                  </div>

                  {el.discount && (
                    <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-red-500 text-white text-xs font-bold px-2 py-0.5 sm:py-1 rounded-full shadow-lg">
                      -{el.discount}%
                    </div>
                  )}
                </div>

                <div className="p-2.5 sm:p-4 bg-white">
                  <h2 className="text-sm sm:text-base font-semibold text-gray-800 mb-1 truncate group-hover:text-[#B88E2F] transition-colors duration-300">
                    {el.title}
                  </h2>
                  <p className="text-xs text-gray-500 mb-1.5 sm:mb-2 truncate">
                    {el.category}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm sm:text-lg font-bold text-[#B88E2F]">
                      ₹{el.price.toLocaleString()}
                    </p>
                    <div className="flex items-center gap-0.5 sm:gap-1 bg-amber-50 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md">
                      <span className="text-amber-500 text-xs sm:text-sm">
                        ⭐
                      </span>
                      <span className="text-xs font-medium text-gray-700">
                        {el.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination Component */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-10 sm:mt-16">
            {/* Previous Button */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`cursor-pointer px-3 sm:px-4 py-2 rounded-md text-sm sm:text-base font-medium transition-all duration-300 ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-[#F9F1E7] text-gray-700 hover:bg-[#B88E2F] hover:text-white"
              }`}
            >
              Prev
            </button>

            {/* Page Numbers */}
            {getPageNumbers().map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={`w-8 h-8 sm:w-10 hover:cursor-pointer sm:h-10 rounded-md text-sm sm:text-base font-medium transition-all duration-300 ${
                  currentPage === pageNumber
                    ? "bg-[#B88E2F] text-white shadow-lg"
                    : "bg-[#F9F1E7] text-gray-700 hover:bg-[#B88E2F] hover:text-white"
                }`}
              >
                {pageNumber}
              </button>
            ))}

            {/* Next Button */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`cursor-pointer px-3 sm:px-4 py-2 rounded-md text-sm sm:text-base font-medium transition-all duration-300 ${
                currentPage === totalPages
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-[#F9F1E7] text-gray-700 hover:bg-[#B88E2F] hover:text-white"
              }`}
            >
              Next
            </button>
          </div>
        )}
      </section>
      <FeaturesSection />
    </>
  );
};

export default Shop;
