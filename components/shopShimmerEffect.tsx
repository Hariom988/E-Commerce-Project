import { useEffect, useState } from "react";

const ShopCardShimmer = () => {
  const [shimmerCount, setShimmerCount] = useState(8);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1111) {
        setShimmerCount(16);
      } else if (window.innerWidth > 860) {
        setShimmerCount(12);
      } else if (window.innerWidth > 560) {
        setShimmerCount(8);
      } else {
        setShimmerCount(8); // Always 8 cards on smallest screens
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Banner Shimmer */}
      <div className="flex flex-col gap-4 items-center justify-center bg-gray-200 w-full min-h-[30vh] sm:min-h-[40vh] animate-pulse">
        <div className="h-10 sm:h-14 w-32 sm:w-40 bg-gray-300 rounded mb-3"></div>
        <div className="flex gap-2 items-center">
          <div className="h-4 w-12 bg-gray-300 rounded"></div>
          <div className="h-3 w-3 bg-gray-300 rounded-full"></div>
          <div className="h-4 w-12 bg-gray-300 rounded"></div>
        </div>
      </div>

      {/* Product Grid Shimmer */}
      <section className="flex mx-auto justify-center max-w-[1440px] p-4 sm:p-10 flex-col">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-7 w-full">
          {Array.from({ length: shimmerCount }).map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100"
            >
              {/* Image shimmer - Compact size */}
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
      </section>
    </>
  );
};

export default ShopCardShimmer;
