import { arrowRight } from "../assets/icons";
import Button from "../components/Button";
import { statistics, shoes } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";

const Hero = () => {
  const [mainShoe, setMainShoe] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full mx-auto max-w-[1440px] gap-10 flex flex-col xl:flex-row min-h-screen"
    >
      <div className="w-full xl:w-2/5 pt-28 flex flex-col justify-center max-sm:px-8  max-xl:px-16">
        <p className="text-orange-500 text-xl font-montserrat">
          Our Summer collections
        </p>
        <h1 className="mt-8 font-palanquin max-sm:text-7xl max-sm:leading-tight text-8xl z-10 font-bold leading-[1.2]">
          <span className="xl:whitespace-nowrap xl:bg-white pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-orange-600">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-600 text-lg leading-8 mt-6 mb-14 max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconUrl={arrowRight} />
        <div className="flex flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-5xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 xl:min-h-screen max-xl:py-40 flex relative justify-center items-center bg-blue-200 bg-hero bg-cover bg-center">
        <img
          className="object-contain"
          src={mainShoe}
          alt="shiw collection"
          width={610}
          height={500}
        />
        <div className="absolute -bottom-[5%] max-sm:px-6 sm:left-[10%] flex gap-4 rounedd-md">
          {shoes.map((shoe, index) => (
            <ShoeCard
              onClick={() => console.log(shoe.bigShoe)}
              {...shoe}
              mainShoe={mainShoe}
              setMainShoe={setMainShoe}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
