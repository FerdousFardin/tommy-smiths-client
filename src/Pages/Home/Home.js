import { Banner } from "./Banner";
import { Slider } from "./Slider";

export const Home = () => {
  return (
    <div className="relative flex bg-neutral-300 flex-col-reverse px-4 py-16 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full">
      <Slider />
    </div>
  );
};
