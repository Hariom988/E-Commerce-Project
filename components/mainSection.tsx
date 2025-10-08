const MainSection = () => {
  return (
    <main className="flex justify-end items-center px-11 bg-[url('../src/assets/hero-img.png')] max-w-[1440px] mx-auto bg-cover min-h-[100vh] bg-no-repeat">
      <div className="flex w-sm h-66  media381:h-63 media454:h-58 p-3 media454:p-5 flex-col gap-3  sm:gap-6 bg-[#FFF3E3] sm:w-lg sm:h-96 sm:px-13 sm:py-10 ">
        <p className="font-bold">NEW ARRIVAL</p>
        <h1 className="text-2xl sm:text-5xl font-bold text-[#B88E2F]">
          Discover Our New Collection
        </h1>
        <p className="text-sm sm:text-[16px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
          accusantium optio facere voluptates voluptatibus.
        </p>
        <div className="text-xs cursor-pointer flex items-center justify-center w-24 sm:w-48 h-6 sm:h-12 bg-[#B88E2F] font-bold text-white ">
          BUY NOW
        </div>
      </div>
    </main>
  );
};

export default MainSection;
