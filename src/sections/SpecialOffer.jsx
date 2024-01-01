import Button from "../components/Button";
import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
  return (
    <div className="max-w-[1440px] mx-auto flex gap-8 flex-col-reverse lg:flex-row">
      <div className="flex-1 flex items-center justify-center">
        <img src={offer} alt="super quality shoes" />
      </div>
      <div className="flex flex-col flex-1 justify-center ">
        <h1 className="text-5xl font-bold font-palanquin lg:max-w-lg">
          <span className="text-orange-600"> Special </span>
          Offer
        </h1>
        <p className="text-slate-500 font-montserrat py-6 text-lg">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="text-slate-500 font-montserrat pb-10 text-lg">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="flex gap-4">
          <Button label="Shop now" iconUrl={arrowRight} />
          <Button label="Learn more" customClass='bg-white text-gray-700 border-1 border-gray-700 px-6'/>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
