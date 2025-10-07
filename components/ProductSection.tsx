// import { productData, setProductData } from "../hooks/useProductData";
import { useEffect, useState } from "react";
import { useProductData } from "../hooks/useProductData";
import whiteHeartIcon from "../src/assets/white-heart-icon.svg";
import shareIcon from "../src/assets/share-icon.svg";
const ProductSection = () => {
  const [sliceCount, setSliceCount] = useState(1);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1111) {
        setSliceCount(8);
      } else if (window.innerWidth > 860) {
        setSliceCount(6);
      } else if (window.innerWidth > 560) {
        setSliceCount(4);
      } else {
        setSliceCount(2);
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
      const first8Products = data.slice(0, sliceCount).map((item: any) => ({
        title: item.name,
        id: item.id,
        category: item.category,
        price: item.price,
        rating: item.rating,
        imgSrc: item.image || "",
      }));
      setFetchedData(first8Products);
    }
  }, [data, sliceCount]);
  return (
    <section className="flex mx-auto justify-center max-w-[1440px] p-10 flex-col text-center">
      <h1 className="text-3xl font-bold">Our Products</h1>
      <div
        id="card=container"
        className="w-full gap-5 mt-10 items-center flex flex-col"
      >
        <div className="grid  grid-flow-col  grid-rows-2 items-center gap-7 justify-items-stretch">
          {fetchedData.map((el) => {
            return (
              <div
                key={el.id}
                id="card"
                className="p-2 justify-center relative group justify-items-stretch h-80 grid grid-flow-row bg-[#D9D9D9]"
              >
                <div className="absolute group-hover:cursor-pointer flex flex-col gap-3 h-full w-full bg-black/40 items-center justify-center group-hover:bottom-0   opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div
                    id="button"
                    className="w-[80%] items-center flex justify-center h-10 text-[#B88E2F] bg-[#D9D9D9]"
                  >
                    <p>Add to Cart</p>
                  </div>
                  <div
                    id="icons"
                    className="flex justify-between items-center text-white gap-12"
                  >
                    <div className="flex justify-between gap-2 items-center">
                      <img src={whiteHeartIcon} alt="" />
                      <p>Like</p>
                    </div>
                    <div className="flex justify-between gap-2 items-center">
                      <img src={shareIcon} alt="" />
                      <p>Share</p>
                    </div>
                  </div>
                </div>
                <div className="h-60 w-56 overflow-hidden">
                  <img
                    className="w-full h-full overflow-hidden"
                    src={el.imgSrc}
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-left">{el.title}</h2>
                  <div className="flex text-sm items-center justify-between">
                    <p>₹{el.price}</p>
                    <p>⭐{el.rating}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className="w-56 duration-300 hover:cursor-pointer hover:bg-[#B88E2F] hover:text-white hover:transition-all  h-12 border-2 font-bold flex items-center justify-center text-[#B88E2F] border-[#B88E2F]"
          id="show-more-btn"
        >
          <button>Show More</button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
