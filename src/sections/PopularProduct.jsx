import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";

const PopularProduct = () => {
  return (
    <section id="products" className="max-w-[1440px] mx-auto">
      <h1 className="text-5xl font-bold font-palanquin">
        Our <span className="text-orange-600">Popular</span> Products
      </h1>
      <p className="text-slate-600 sm:max-w-lg py-8">
        Experience top-notch quality and style with our sought-after selections.
        Discover a world of comfort, design, and value
      </p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8">
        {products.map((product, index) => (
          <PopularProductCard {...product} key={index} />
        ))}
      </div>
    </section>
  );
};

export default PopularProduct;
