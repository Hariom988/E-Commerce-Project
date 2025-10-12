import { Link } from "react-router-dom";
import arrow from "../src/assets/shop-page/right-arrow.svg";
import { useProductData } from "../hooks/useProductData";
import { useEffect, useState } from "react";
import ShopCardShimmer from "../components/shopShimmerEffect";
import FeaturesSection from "../components/FeaturesSection";
import ProductCard from "../components/productCard";

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

  // ⭐ KEY CHANGE: Pass only current page products to ProductCard
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

      <section
        id="shop-section"
        className="flex mx-auto justify-center max-w-[1440px] p-4 sm:p-10 flex-col"
      >
        <ProductCard fetchedData={currentProducts} />

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
