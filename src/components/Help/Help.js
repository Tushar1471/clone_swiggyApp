import "./help.css";
const Help = ()=>{
  return(
<>
<div className="mt-24 h-full p-2 w-4/12  mx-auto shadow-2xl"> 
  <h1 className="text-3xl text-gray-600 font-bold text-center mb-8">Help Desk Request Form</h1>
    <form>
    <div className="flex justify-evenly items-center">
      <label className="font-bold">Name:</label>
      <br/>
      <input className="border border-black indent-1" type="text" placeholder="First" />
      <input className="border border-black indent-1" type="text" placeholder="Last" />
    </div>
    <br/>
    <div className="flex justify-between">
      <label className="font-bold">Email:</label>
      <br/>
      <input className=" w-full border border-black" type="email" />
    </div>
    <br/>
    <div className="flex flex-col">
      <label className="font-bold">What's was the issue:</label>
      <select className="w-full h-8 border border-black">
        <option value="/">Please Select</option>
      </select>
    </div>
    <br/>
    <div>
      <label className="font-bold">Additional Details:</label>
      <br/>
      <textarea className="border border-black" cols="50" rows="5"></textarea>
    </div>
   <div className="w-full flex justify-center">
   <button className="bg-black text-white px-4 py-2 rounded-lg">Submit</button>
   </div>
    </form>
</div>
</>

  )
}

export default Help;