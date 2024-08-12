import mask from "/images/home/mask.png";

import UserForm from "./Form";

function GetInTouch() {
  return (
    <>
      <div className=" mb-10 ">
        <div className="img ">
          <img src={mask} alt="" className="w-full z-0 h-64" />
        </div>
        <div className="sub relative -mt-32 bg-white z-30 w-3/4 mx-auto rounded-2xl opacity-100 h-auto">
          <UserForm />
        </div>
      </div>
    </>
  );
}
export default GetInTouch;
