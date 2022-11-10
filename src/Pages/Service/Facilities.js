export const Facilities = ({ facility }) => {
  return (
    <>
      <div className="flex flex-col justify-center overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
        <div className="py-2 px-4 flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10   rounded-full bg-indigo-50">
            <svg
              className="w-8 h-8 text-deep-purple-accent-400"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <p className="font-bold">{facility}</p>
        </div>
        <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
      </div>
    </>
  );
};
