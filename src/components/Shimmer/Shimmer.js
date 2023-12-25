// import "./shimmer.css";

const Shimmer = () => {
  return (
    <>
      <div className="w-full h-screen fixed top-0 bottom-0 left-0 right-0">
        <div className="w-full h-[60%] bg-indigo-950 flex justify-center items-end">
          <div className="w-6/12 h-52">
            <div className="w-full h-24 ">
              <div className="w-24 h-full mx-auto bd flex justify-center items-center"></div>
              <div>
                <span className="material-symbols-outlined size relative -top-[76px] left-[324px] text-white font">
                  icecream
                </span>
              </div>
            </div>
            <div className="w-full h-24">
              <h1 className="text-3xl text-center mt-1 font-semibold text-white">
                Looking for great food near you...
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full h-[40%] flex justify-end">
          <div className="w-11/12 h-full flex">
            <div className="w-3/12 h-full overflow-y-hidden border-l-2 border-r-2">
              <div className="w-full h-[85px] bg-slate-300 mt-12 flex justify-center items-center">
                <div className="w-11/12 h-16 flex justify-evenly items-center">
                  <div className="w-16 h-16 rounded-[100vh] bg-white"></div>
                  <div className="w-3/6 h-5 bg-white"></div>
                </div>
              </div>
              <div className="w-full h-[85px] flex justify-center items-center">
                <div className="w-11/12 h-16 flex justify-evenly items-center">
                  <div className="w-16 h-16 bg-slate-300 rounded-[100vh]"></div>
                  <div className="w-3/6 h-5 bg-slate-300"></div>
                </div>
              </div>
              <div className="w-full h-[85px] flex justify-center items-center">
                <div className="w-11/12 h-16 flex justify-evenly items-center">
                  <div className="w-16 h-16 bg-slate-300 rounded-[100vh]"></div>
                  <div className="w-3/6 h-5 bg-slate-300"></div>
                </div>
              </div>
            </div>
            <div className="w-9/12 h-full bg-white flex justify-end items-end overflow-y-hidden">
              <div className="w-11/12 h-full">
                <div className="w-full h-24 flex items-end">
                  <div className="w-2/12 h-4 bg-slate-300"></div>
                </div>
                <div className="w-11/12 h-80 flex justify-between mt-10">
                  <div className="w-3/12 h-48 bg-slate-300"></div>
                  <div className="w-3/12 h-48 bg-slate-300"></div>
                  <div className="w-3/12 h-48 bg-slate-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shimmer;
