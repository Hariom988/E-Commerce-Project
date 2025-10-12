import { useEffect, useState } from "react";
import { useProductData } from "../hooks/useProductData";
import ProductCardShimmer from "../components/productCardShimmer";
import ProductCard from "../components/productCard";
import { Link } from "react-router-dom";

const ProductSection = () => {
  const [sliceCount, setSliceCount] = useState(4);
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
        setSliceCount(4);
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
        id: item.id,
        title: item.name,
        name: item.name,
        category: item.category,
        price: item.price,
        originalPrice: item.originalPrice,
        discount: item.discount,
        rating: item.rating,
        reviews: item.reviews,
        description: item.description,
        imgSrc: item.image || "",
        image: item.image || "",
        brand: item.brand,
        material: item.material,
        color: item.color,
        dimensions: item.dimensions,
        inStock: item.inStock,
        stockQuantity: item.stockQuantity,
        tags: item.tags,
        weight: item.weight,
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
      <section className="flex items-center  mx-auto justify-center max-w-[1440px] p-4 sm:p-10 flex-col text-center">
        <h1 className="text-2xl sm:text-3xl font-bold">Our Products</h1>
        <ProductCard fetchedData={fetchedData} />
        <Link
          className="w-40 sm:w-56 text-sm sm:text-base duration-300 hover:cursor-pointer hover:bg-[#B88E2F] hover:text-white hover:transition-all h-10 sm:h-12 border-2 font-bold flex items-center justify-center text-[#B88E2F] border-[#B88E2F] rounded-md mt-4"
          id="show-more-btn"
          to={"./shop"}
        >
          Show More
        </Link>
      </section>
    </>
  );
};

export default ProductSection;
