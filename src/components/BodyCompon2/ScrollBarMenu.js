import { IMG_URL } from "../utlities/constants.js";

const ScrollBarMenu = ({ imageId }) => {
  return (
    <>
      <div className="w-1/9 h-full mx-2 cursor-pointer">
        <img
          className="w-full h-full"
          src={
            imageId === undefined
              ? "https://cdn-icons-png.flaticon.com/512/16/16096.png"
              : IMG_URL + imageId
          }
          alt="Random image"
        />
      </div>
    </>
  );
};

export default ScrollBarMenu;
