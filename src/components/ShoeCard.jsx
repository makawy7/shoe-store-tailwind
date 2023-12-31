const ShoeCard = ({ bigShoe, mainShoe, setMainShoe }) => {
  return (
    <div
      onClick={() => setMainShoe(bigShoe)}
      className={`border-2 cursor-pointer w-25 h-35 sm:w-40 sm:h-40 flex
     justify-center items-center
     ${mainShoe === bigShoe && "border-orange-600"}  p-4 bg-card
       bg-cover bg-center rounded-xl`}
    >
      <img
        src={bigShoe}
        alt="shoe preview"
        height={113}
        width={127}
        className="object-contain"
      />
    </div>
  );
};

export default ShoeCard;
