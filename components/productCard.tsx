import { Link } from "react-router-dom";
import shareIcon from "../src/assets/share-icon.svg";
import whiteHeartIcon from "../src/assets/white-heart-icon.svg";

const ProductCard = ({ fetchedData }: { fetchedData: any[] }) => {
  return (
    <div
      id="card-container"
      className="w-full gap-5 mt-6 sm:mt-10 items-center flex flex-col"
    >
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-7 w-full">
        {fetchedData.map((el) => {
          return (
            <Link key={el.id} to={"/product-details"} state={{ product: el }}>
              <div
                key={el.id}
                id="card"
                className="relative group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 ease-in-out cursor-pointer border border-gray-100"
              >
                <div className="relative h-40 sm:h-56 overflow-hidden bg-gray-50">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    src={el.image}
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

                {/* Product Info - Reduced padding */}
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
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCard;
