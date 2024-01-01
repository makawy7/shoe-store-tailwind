import Button from "../components/Button";

const Subscribe = () => {
  return (
    <div className="max-w-[1440px] mx-auto grid sm:grid-cols-[repeat(auto-fit,minmax(30rem,1fr))] gap-y-8 gap-x-14 justify-center items-center">
      <h1 className="text-4xl sm:text-5xl font-bold font-palanquin max-lg:text-center leading-normal">
        Sign Up for<span className="text-orange-600"> Updates </span>&
        Newsletter
      </h1>
      <div className="w-full border p-2 pl-4 items-center border-gray-700 rounded-full flex">
        <input
          className="w-full h-full rounded-full outline-none"
          type="text"
          placeholder="subscribe@nike.com"
        />
        <Button label="Sign up" customClass="whitespace-nowrap" />
      </div>
    </div>
  );
};

export default Subscribe;
