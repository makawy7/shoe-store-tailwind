import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";

const Services = () => {
  return (
    <div className="flex flex-wrap xl:flex-nowrap gap-10 max-w-[1440px] mx-auto">
      {services.map((service, index) => (
        <ServiceCard {...service} key={index} />
      ))}
    </div>
  );
};

export default Services;
