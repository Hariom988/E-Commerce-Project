// pages/ProductDetail.tsx
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Breadcrumb from "./breadcrumb";
import ProductCard from "../components/productCard";
import { useProductData } from "../hooks/useProductData";

interface Product {
  id: number;
  title: string;
  name?: string;
  price: number;
  rating: number;
  category: string;
  image: string;
  description?: string;
  discount?: number;
  originalPrice?: number;
  brand?: string;
  material?: string;
  color?: string;
  dimensions?: string;
  reviews?: number;
  inStock?: boolean;
  stockQuantity?: number;
  weight?: string;
  tags?: string[];
}

const ProductDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product as Product | undefined;
  const allProducts = useProductData() as any[];
  const [quantity, setQuantity] = useState(0);
  const [selectedSize, setSelectedSize] = useState("L");
  const [selectedColor, setSelectedColor] = useState("purple");
  const [mainImage, setMainImage] = useState(product?.image || "");
  const [activeTab, setActiveTab] = useState("description");

  // Product images
  const productImages = [
    product?.image || "",
    product?.image || "",
    product?.image || "",
    product?.image || "",
  ];
  const sizes = ["L", "XL", "XS"];
  const colors = [
    { name: "purple", bg: "bg-purple-500" },
    { name: "black", bg: "bg-black" },
    { name: "gold", bg: "bg-yellow-600" },
  ];

  const relatedProducts = allProducts.slice(0, 4);
  // Handlers
  const handleQuantityChange = (action: "increase" | "decrease") => {
    if (action === "increase") {
      setQuantity(quantity + 1);
    } else if (action === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-gray-800">
            Product Not Found
          </h1>
          <button
            onClick={() => navigate("/shop")}
            className="px-6 py-2 bg-[#B88E2F] text-white rounded-md hover:bg-[#9a7628] transition-colors"
          >
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb productName={product.title} />

      {/* Product Detail Section */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Image Gallery */}
          <div className="flex flex-col-reverse sm:flex-row gap-4">
            {/* Thumbnail Images */}
            <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-visible">
              {productImages.slice(0, 4).map((img, index) => (
                <button
                  key={index}
                  onClick={() => setMainImage(img)}
                  className={`flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden border-2 transition-all ${
                    mainImage === img
                      ? "border-[#B88E2F]"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 bg-[#F9F1E7] rounded-lg overflow-hidden">
              <img
                src={mainImage}
                alt={product.title}
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="space-y-6">
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-900">
              {product.title}
            </h1>

            {/* Price */}
            <p className="text-2xl sm:text-3xl font-medium text-gray-500">
              Rs. {product.price.toLocaleString()}.00
            </p>

            {/* Rating & Reviews */}
            <div className="flex items-center gap-4 pb-4 border-b border-gray-200">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-lg ${
                      i < Math.floor(product.rating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="text-sm text-gray-400">|</span>
              <span className="text-sm text-gray-500">5 Customer Review</span>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed">
              {product.description ||
                "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound."}
            </p>

            {/* Size Selector */}
            <div className="space-y-3">
              <p className="text-sm text-gray-500">Size</p>
              <div className="flex items-center gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-10 h-10 rounded-md text-sm font-medium transition-all ${
                      selectedSize === size
                        ? "bg-[#B88E2F] text-white"
                        : "bg-[#F9F1E7] text-black hover:bg-gray-200"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selector */}
            <div className="space-y-3">
              <p className="text-sm text-gray-500">Color</p>
              <div className="flex items-center gap-3">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-10 h-10 rounded-full ${
                      color.bg
                    } transition-all ${
                      selectedColor === color.name
                        ? "ring-2 ring-offset-2 ring-gray-400"
                        : "hover:ring-2 hover:ring-offset-2 hover:ring-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Quantity & Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              {/* Quantity Selector */}
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden w-full sm:w-32">
                <button
                  onClick={() => handleQuantityChange("decrease")}
                  className="px-4 py-3 hover:bg-gray-100 transition-colors"
                >
                  -
                </button>
                <input
                  type="text"
                  value={quantity}
                  readOnly
                  className="flex-1 max-w-12 text-center border-x border-gray-300 py-3 focus:outline-none"
                />
                <button
                  onClick={() => handleQuantityChange("increase")}
                  className="px-4 py-3 hover:bg-gray-100 transition-colors"
                >
                  +
                </button>
              </div>

              {/* Add to Cart Button */}
              <button className="flex-1 py-3 px-6 border-2 border-black rounded-lg hover:bg-black hover:text-white transition-all font-medium">
                Add To Cart
              </button>

              {/* Compare Button */}
              <button className="flex-1 py-3 px-6 border-2 border-black rounded-lg hover:bg-black hover:text-white transition-all font-medium">
                + Compare
              </button>
            </div>

            {/* Product Meta Info */}
            <div className="border-t border-gray-200 pt-6 space-y-3 text-sm">
              <div className="flex items-start gap-12">
                <span className="text-gray-500 min-w-[80px]">SKU</span>
                <span className="text-gray-600">: SS001</span>
              </div>
              <div className="flex items-start gap-12">
                <span className="text-gray-500 min-w-[80px]">Category</span>
                <span className="text-gray-600">: {product.category}</span>
              </div>
              <div className="flex items-start gap-12">
                <span className="text-gray-500 min-w-[80px]">Tags</span>
                <span className="text-gray-600">: Sofa, Chair, Home, Shop</span>
              </div>
              <div className="flex items-start gap-12"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Description Tabs Section */}
      <section id="Description" className="border-t border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-12">
          {/* Tabs */}
          <div className="flex items-center justify-center gap-8 sm:gap-16 mb-8 flex-wrap">
            <button
              onClick={() => setActiveTab("description")}
              className={`text-lg px-4 py-2 rounded-2xl hover:cursor-pointer sm:text-2xl font-medium transition-colors ${
                activeTab === "description"
                  ? "text-white bg-black/80"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab("additional")}
              className={`text-lg px-4 py-2 rounded-2xl hover:cursor-pointer sm:text-2xl font-medium transition-colors ${
                activeTab === "additional"
                  ? "text-white bg-black/80"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              Additional Information
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={`text-lg px-4 py-2 rounded-2xl hover:cursor-pointer sm:text-2xl font-medium transition-colors ${
                activeTab === "reviews"
                  ? "text-white bg-black/80"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              Reviews [5]
            </button>
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl mx-auto">
            {activeTab === "description" && (
              <div className="space-y-6 text-gray-600">
                <p className="text-sm sm:text-base leading-relaxed">
                  {product.description ||
                    "Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road."}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-6">
                  <div className="bg-[#F9F1E7] rounded-lg overflow-hidden">
                    <img
                      src={product.image}
                      alt="Product detail 1"
                      className="w-full h-64 sm:h-80 object-cover"
                    />
                  </div>
                  <div className="bg-[#F9F1E7] rounded-lg overflow-hidden">
                    <img
                      src={product.image}
                      alt="Product detail 2"
                      className="w-full h-64 sm:h-80 object-cover"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "additional" && (
              <div className="text-gray-600 space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm sm:text-base">
                  {product.weight && (
                    <>
                      <p className="font-medium">Weight:</p>
                      <p>{product.weight}</p>
                    </>
                  )}
                  {product.dimensions && (
                    <>
                      <p className="font-medium">Dimensions:</p>
                      <p>{product.dimensions}</p>
                    </>
                  )}
                  {product.material && (
                    <>
                      <p className="font-medium">Material:</p>
                      <p>{product.material}</p>
                    </>
                  )}
                  {product.color && (
                    <>
                      <p className="font-medium">Color:</p>
                      <p>{product.color}</p>
                    </>
                  )}
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="text-gray-600 text-center">
                <p className="text-sm sm:text-base">
                  {product.reviews
                    ? `${product.reviews} Customer Reviews`
                    : "No reviews yet."}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl font-semibold text-center text-gray-900 mb-12">
            Related Products
          </h2>

          {/* Products Grid */}
          {relatedProducts.length > 0 ? (
            <div className="mb-12">
              <ProductCard fetchedData={relatedProducts} />
            </div>
          ) : (
            <p className="text-center text-gray-500 text-lg mb-12">
              No related products found.
            </p>
          )}

          {/* Show More Button */}
          <div className="flex justify-center">
            <button
              onClick={() => navigate("/shop")}
              className="px-16 hover:cursor-pointer py-4 border-2 border-[#B88E2F] text-[#B88E2F] text-lg font-semibold hover:bg-[#B88E2F] hover:text-white transition-all duration-300 rounded-md shadow-sm hover:shadow-md"
            >
              Show More
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
