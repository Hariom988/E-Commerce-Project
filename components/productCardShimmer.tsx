import { useEffect, useState } from "react";

const ProductCardShimmer = () => {
  const [shimmerCount, setShimmerCount] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1111) {
        setShimmerCount(8);
      } else if (window.innerWidth > 860) {
        setShimmerCount(6);
      } else if (window.innerWidth > 560) {
        setShimmerCount(4);
      } else {
        setShimmerCount(4); // Always 4 cards on smallest screens
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="flex mx-auto justify-center max-w-[1440px] sm:p-10 p-4 flex-col text-center">
      <div className="h-9 sm:w-48 w-32 mx-auto bg-gray-300 animate-pulse rounded mb-10"></div>

      {/* Same responsive grid: 2 cols mobile, 3 cols tablet, 4 cols desktop */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-7 w-full">
        {Array.from({ length: shimmerCount }).map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100"
          >
            {/* Image shimmer - Updated to match new compact size */}
            <div className="h-40 sm:h-56 w-full bg-gray-300 animate-pulse"></div>

            {/* Product info shimmer */}
            <div className="p-2.5 sm:p-4">
              {/* Title shimmer */}
              <div className="h-4 sm:h-5 w-3/4 bg-gray-300 animate-pulse rounded mb-2"></div>

              {/* Category shimmer */}
              <div className="h-3 w-1/2 bg-gray-300 animate-pulse rounded mb-3"></div>

              {/* Price and rating shimmer */}
              <div className="flex justify-between items-center">
                <div className="h-4 sm:h-5 w-20 bg-gray-300 animate-pulse rounded"></div>
                <div className="h-6 w-12 bg-gray-200 animate-pulse rounded-md"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More button shimmer */}
      <div className="sm:w-56 w-40 sm:h-12 h-10 mx-auto sm:mt-10 mt-6 bg-gray-300 animate-pulse rounded"></div>
    </section>
  );
};

export default ProductCardShimmer;
