import trophyIcon from "../src/assets/shop-page/trophy-icon.svg";
import verifyIcon from "../src/assets/shop-page/verify-icon.svg";
import shipIcon from "../src/assets/shop-page/ship-icon.svg";
import supportIcon from "../src/assets/shop-page/customer-support-icon.svg";

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      icon: trophyIcon,
      title: "High Quality",
      description: "crafted from top materials",
    },
    {
      id: 2,
      icon: verifyIcon,
      title: "Warranty Protection",
      description: "Over 2 years",
    },
    {
      id: 3,
      icon: shipIcon,
      title: "Free Shipping",
      description: "Order over 150 $",
    },
    {
      id: 4,
      icon: supportIcon,
      title: "24 / 7 Support",
      description: "Dedicated support",
    },
  ];

  return (
    <section className="w-full bg-[#FAF3EA] py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex items-center gap-4 p-4 sm:p-0 bg-white sm:bg-transparent rounded-lg sm:rounded-none shadow-sm sm:shadow-none"
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col">
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-1">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-500">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
