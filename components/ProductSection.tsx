import { useEffect, useState } from "react";
import { useProductData } from "../hooks/useProductData";
import whiteHeartIcon from "../src/assets/white-heart-icon.svg";
import shareIcon from "../src/assets/share-icon.svg";
import ProductCardShimmer from "../components/productCardShimmer";

const ProductSection = () => {
  const [sliceCount, setSliceCount] = useState(4); // Changed default to 4
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1111) {
        setSliceCount(8);
      } else if (window.innerWidth > 860) {
        setSliceCount(6);
      } else if (window.innerWidth > 560) {
        setSliceCount(4);
      } else {
        setSliceCount(4); // Changed from 2 to 4 for smallest screens
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
      const products = data.slice(0, sliceCount).map((item: any) => ({
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
  }, [data, sliceCount]);

  if (isLoading) {
    return <ProductCardShimmer />;
  }

  return (
    <>
      <section className="flex mx-auto justify-center max-w-[1440px] p-4 sm:p-10 flex-col text-center">
        <h1 className="text-2xl sm:text-3xl font-bold">Our Products</h1>
        <div
          id="card-container"
          className="w-full gap-5 mt-6 sm:mt-10 items-center flex flex-col"
        >
          {/* Responsive grid: 2 cols for smallest screens, then scales up */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-7 w-full">
            {fetchedData.map((el) => {
              return (
                <div
                  key={el.id}
                  id="card"
                  className="p-1.5 sm:p-2 justify-center relative group h-64 sm:h-80 grid grid-flow-row bg-[#D9D9D9]"
                >
                  <div className="absolute group-hover:cursor-pointer flex flex-col gap-2 sm:gap-3 h-full w-full bg-black/40 items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div
                      id="button"
                      className="w-[80%] items-center flex justify-center h-8 sm:h-10 text-xs sm:text-base text-[#B88E2F] bg-[#D9D9D9]"
                    >
                      <p>Add to Cart</p>
                    </div>
                    <div
                      id="icons"
                      className="flex justify-between items-center text-white gap-6 sm:gap-12 text-xs sm:text-base"
                    >
                      <div className="flex justify-between gap-1 sm:gap-2 items-center">
                        <img
                          className="w-4 h-4 sm:w-5 sm:h-5"
                          src={whiteHeartIcon}
                          alt=""
                        />
                        <p>Like</p>
                      </div>
                      <div className="flex justify-between gap-1 sm:gap-2 items-center">
                        <img
                          className="w-4 h-4 sm:w-5 sm:h-5"
                          src={shareIcon}
                          alt=""
                        />
                        <p>Share</p>
                      </div>
                    </div>
                  </div>
                  <div className="h-44 sm:h-60 w-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={el.imgSrc}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col gap-1 sm:gap-2">
                    <h2 className="text-left text-xs sm:text-base truncate">
                      {el.title}
                    </h2>
                    <div className="flex text-xs sm:text-sm items-center justify-between">
                      <p>₹{el.price}</p>
                      <p>⭐{el.rating}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            className="w-40 sm:w-56 text-sm sm:text-base duration-300 hover:cursor-pointer hover:bg-[#B88E2F] hover:text-white hover:transition-all h-10 sm:h-12 border-2 font-bold flex items-center justify-center text-[#B88E2F] border-[#B88E2F]"
            id="show-more-btn"
          >
            <button>Show More</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductSection;
