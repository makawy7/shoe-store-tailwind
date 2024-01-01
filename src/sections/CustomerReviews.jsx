import { reviews } from "../constants";
import CustomerCard from "../components/CustomerCard";

const CustomerReviews = () => {
  return (
    <section className="max-w-[1440px] mx-auto">
      <h1 className="text-5xl font-bold text-center font-palanquin">
        What Our<span className="text-orange-600"> Customers </span>Say?
      </h1>
      <p
        className="text-slate-500 block mx-auto text-center 
      font-montserrat max-w-lg pt-6 text-lg info-text"
      >
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="flex gap-14 flex-wrap justify-evenly mt-24">
        {reviews.map((review, index) => (
          <CustomerCard {...review} key={index} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
