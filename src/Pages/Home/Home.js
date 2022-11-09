import { Banner } from "./Banner";
import { ServiceHome } from "./ServicesHome";
import { Slider } from "./Slider";

export const Home = () => {
  return (
    <>
      <div className="relative flex bg-slate-300 flex-col-reverse px-4 py-16 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full">
        <div className="absolute inset-x-0 bottom-0">
          <svg
            viewBox="0 0 224 12"
            fill="currentColor"
            className="w-full -mb-1 text-slate-200"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
          </svg>
        </div>
        <Banner />
      </div>
      <Slider />
      <ServiceHome />
    </>
  );
};
