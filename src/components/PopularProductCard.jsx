import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div>
      <img
        src={imgURL}
        alt="shoe preview"
        width={280}
        height={280}
        className="object-contain"
      />
      <div className="flex gap-2.5 mt-8">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="text-lg leading-normal font-montserrat text-slate-600">
          (4.5)
        </p>
      </div>
      <h3 className="text-2xl font-semibold font-palanquin mt-2">{name}</h3>
      <p className="text-2xl font-semibold font-montserrat mt-2 text-orange-600 leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
