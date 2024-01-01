const Button = ({ label, iconUrl, customClass }) => {
  return (
    <div
      className={`flex justify-center items-center 
      gap-3 py-4 border border-orange-700 px-8 leading-none
    text-white text-lg bg-orange-600 self-start rounded-full font-montserrat ${customClass}`}
    >
      {label} {iconUrl && <img src={iconUrl} alt="icon" />}
    </div>
  );
};

export default Button;
