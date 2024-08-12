import react from "react";

function CustomButton({ text, isActive, onClick }) {
  return (
    <button className="flex hover:scale-110 " onClick={onClick}>
      <div
        className={`dot w-5 mt-4 h-5 rounded-full bg-white ease-in duration-300  ${
          isActive ? "bg-yellow-400" : "bg-white"
        }`}
      ></div>
      <div
        className={`line w-4  h-1 mt-6 ease-in duration-300 bg-white ${
          isActive ? "bg-yellow-400" : "bg-white"
        }`}
      ></div>
      <div
        className={`h-12 w-40 py-3  font-bold text-lg rounded-lg ease-in duration-300 font-nunito bg-white text-gray-500  ${
          isActive ? "bg-yellow-400" : "bg-white"
        }`}
      >
        {text}
      </div>
    </button>
  );
}

export default CustomButton;
