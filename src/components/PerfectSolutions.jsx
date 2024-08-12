import lefticon from "/images/home/perfectsolutions/righticon.png";
function ThirdPage() {
  return (
    <div className=" bg-white mt-4 md:flex py-4 ">
      <div className="left md:w-1/2 ">
        <img
          src={lefticon}
          alt=""
          className=" md:h-full mx-auto  md:w-auto h-96 "
        />
      </div>
      <div className="right   md:w-1/2 text-center my-auto ">
        <h1 className="font-nunito font-bold sm:text-4xl text-3xl text-gray-900 mb-4 leading-normal text-center lg:text-5xl">
          Perfect Solution For <br />
          Your{" "}
          <span className="underline decoration-custom-yellow decoration-4 underline-offset-1">
            Bussiness
          </span>
        </h1>
        <p className="content mb-10 font-lora  text-sm sm:text-lg text-gray-900  text-center xl:leading-loose">
          Lorem Ipsum is simply dummy text of the printing <br />
          and typesetting industry. Lorem Ipsum has been the <br />
          industry's standard dummy text ever since the 1500s <br />, when an
          unknown printer took a galley of type and <br />
          scrambled it to make a type specimen book. It has <br />
          survived not only five centuries,
        </p>
        <button className="bg-yellow-400 text-white font-nunito font-bold text:sm sm:text-lg px-4 py-2 rounded-lg hover:scale-110">
          Read More
        </button>
      </div>
    </div>
  );
}
export default ThirdPage;
