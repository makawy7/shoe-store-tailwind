const Button = ({ label, iconUrl, customClass }) => {
  console.log(customClass?.border);
  return (
    <div
      className={`flex justify-center items-center 
                  gap-3 py-4 leading-none
                  text-lg  self-start rounded-full
                  cursor-pointer font-montserrat border
                  ${customClass?.bgColor ? customClass?.bgColor : "bg-orange-600"} 
                  ${customClass?.textColor ? customClass?.textColor : "text-white"} 
                  ${customClass?.border ? customClass?.border : " border-orange-700"}
                  ${customClass?.paddingX ? customClass?.paddingX : "px-8"}
                  ${customClass?.whiteSpaceNoWrap && customClass?.whiteSpaceNoWrap}`}
    >
      {label} {iconUrl && <img src={iconUrl} alt="icon" />}
    </div>
  );
};

export default Button;
