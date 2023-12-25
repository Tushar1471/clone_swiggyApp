import React from "react";

const ResMenuShimmer = () => {
  return (
    <>
      <div className="w-full h-screen">
        <div className="w-7/12 h-[80%] mx-auto">
          <div className="w-full h-1/6 bg-slate-300"></div>
          <div className="w-full h-4/6 mt-14 flex">
            <div className="w-6/12 h-full mr-2">
              <div className="w-full h-3/6 bg-slate-300 rounded-md"></div>
              <div className="w4/6 h-2/6 mt-4">
                <div className="w-4/6 h-16  flex flex-col justify-between">
                  <div className="w-3/6 h-5 bg-slate-300"></div>
                  <div className="w-2/6 h-5 bg-slate-300"></div>
                  <div className="w-1/6 h-5 bg-slate-300"></div>
                </div>
                <div className="w-full h-6 flex justify-end">
                  <div className="w-1/6 h-full bg-slate-300"></div>
                </div>
              </div>
            </div>
            <div className="w-6/12 h-full mr-2">
              <div className="w-full h-3/6 bg-slate-300 rounded-md"></div>
              <div className="w4/6 h-2/6 mt-4">
                <div className="w-4/6 h-16  flex flex-col justify-between">
                  <div className="w-3/6 h-5 bg-slate-300"></div>
                  <div className="w-2/6 h-5 bg-slate-300"></div>
                  <div className="w-1/6 h-5 bg-slate-300"></div>
                </div>
                <div className="w-full h-6 flex justify-end">
                  <div className="w-1/6 h-full bg-slate-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResMenuShimmer;
