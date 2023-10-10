// import "./shimmer.css";

const Shimmer = () =>{
  return(
    <>
     <div className="w-3/5 h-full mx-auto mt-5 pt-10 pb-10">
     <p className="text-gray-800 text-3xl font-sans font-bold mb-5">WELCOME50</p>
      <div className="w-full h-12 flex justify-center items-center">
        <input className="border-none outline-none w-2/5 indent-1 h-8 mr-2.5 bg-gray-200 rounded-xl" type="text" name="search" placeholder="Filter by cards" />
        <button className="bg-gray-200 p-1 rounded-xl">Search</button>
      </div>
      <div>
        <h1 className="text-3xl">Loading..............</h1>
      </div>
       {/* <div className="w-full flex flex-wrap justify-between items-center">
          <div className="w-2/6 h-72 "></div>
          <div className="w-2/6 h-72 "></div>
          <div className="w-2/6 h-72 "></div>
          <div className="w-2/6 h-72 "></div>
          <div className="w-2/6 h-72 "></div>
          <div className="w-2/6 h-72 "></div>
          <div className="w-2/6 h-72 "></div>
          <div className="w-2/6 h-72 "></div>
          <div className="w-2/6 h-72 "></div>
          
       </div> */}
     </div>
    </>
  )
}

export default Shimmer;
