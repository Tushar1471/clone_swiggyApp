import { useRef, useEffect } from "react";
import MenuList from "../ItemLists/MenuList";
const RestuarantAcc = ({ data, itemCards, showIndex, setShowIndex, index }) => {
  const accordionRef = useRef();
  const handleToggle = () => {
    setShowIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  useEffect(() => {
    if (showIndex === index && accordionRef.current) {
      accordionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [showIndex, index]);
  // console.log(accordionRef);
  return (
    <>
      <div className="w-7/12 border-t-[2px] mx-auto"></div>
      <div
        ref={accordionRef}
        className={`w-7/12 px-3 py-4 mx-auto flex justify-between cursor-pointer ${
          showIndex === index ? "bg-gray-200" : ""
        }`}
        onClick={handleToggle}
      >
        <span className="text-black text-lg font-bold">
          {data.title}({itemCards.length})
        </span>
        {showIndex === index ? (
          <span className="material-symbols-outlined">keyboard_arrow_up</span>
        ) : (
          <span className="material-symbols-outlined">expand_more</span>
        )}
      </div>
      <div className="w-full h-full relative -top-4">
        {showIndex === index && (
          <MenuList key={data.type} itemCards={itemCards} />
        )}
      </div>
      <div className="w-7/12 border-b-[8px] mx-auto"></div>
    </>
  );
};

export default RestuarantAcc;
