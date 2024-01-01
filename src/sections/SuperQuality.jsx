import Button from "../components/Button";
import { shoe8 } from "../assets/images";
const SuperQuality = () => {
  return (
    <div className="max-w-[1440px] mx-auto flex gap-8 flex-col lg:flex-row">
      <div className="flex flex-col flex-1 justify-center ">
        <h1 className="text-5xl font-bold font-palanquin lg:max-w-lg leading-[55px]">
          We Provide You<span className="text-orange-600"> Super Quality </span>
          Shoes
        </h1>
        <p className="text-slate-400 font-palanquin sm:max-w-lg py-8 text-xl">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="text-slate-400 font-palanquin sm:max-w-lg pb-8 text-xl">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <Button label="View details" />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <img src={shoe8} alt="super quality shoes" />
      </div>
    </div>
  );
};

export default SuperQuality;
