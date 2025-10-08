import diningTable from "../src/assets/dining.png";
import livingRoom from "../src/assets/living-room.png";
import mark from "../src/assets/Mask.png";
const BrowserSection = () => {
  return (
    <section className="mt-14 mx-auto max-w-[1440px] flex flex-col items-center justify-center">
      <h1 className="text-lg media585:text-2xl sm:text-3xl font-bold">
        Browse the Range
      </h1>
      <p className="max-w-72 text-sm media585:max-w-max media585:text-lg text-center sm:text-2xl text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="flex flex-col media585:flex-row mt-15 gap-y-5 media585:gap-x-10 px-10">
        <div id="card" className="flex flex-col items-center gap-5">
          <img src={diningTable} className="w-52 media585:w-xs" alt="" />
          <p className="text-2xl font-medium">Dining</p>
        </div>
        <div id="card" className="flex flex-col items-center gap-5">
          <img src={livingRoom} className="w-52 media585:w-xs" alt="" />
          <p className="text-2xl font-medium">Living</p>
        </div>
        <div id="card" className="flex flex-col items-center gap-5">
          <img src={mark} className="w-52 media585:w-xs" alt="" />
          <p className="text-2xl font-medium">Bedroom</p>
        </div>
      </div>
    </section>
  );
};

export default BrowserSection;
