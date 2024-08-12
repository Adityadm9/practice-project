import Card from "./Card";
import first from "/images/home/cards/first.png";
import firstimg from "/images/home/cards/firstimg.png";
import second from "/images/home/cards/second.png";
import secondimg from "/images/home/cards/secondimg.png";
import third from "/images/home/cards/third.png";
import thirdimg from "/images/home/cards/thirdimg.png";
function SixthPage() {
  return (
    <>
      <div className="container mx-auto bg-gray-200 ">
        <div className="hd">
          <h1 className="font-nunito font-bold  text-3xl  lg:text-5xl sm:text-4xl text-gray-900 text-center py-10 ">
            Our{" "}
            <span className="underline decoration-custom-yellow decoration-4 underline-offset-1 ">
              Blogs
            </span>
          </h1>
        </div>

        <div className="cards flex-wrap flex justify-evenly  text-center">
          <Card
            imageSrc={firstimg}
            title="Lorem Ipsum is "
            description={`good personLorem Ipsum is simply  text of the printing and type setting industry. make a type specimen. `}
            buttonText="read more"
            smallImg={first}
            imgTxt="Alex Lioness"
            btnclr="bg-gray-900"
          ></Card>
          <Card
            imageSrc={secondimg}
            title="Lorem Ipsum is "
            description={`good personLorem Ipsum is simply  text of the printing and type setting industry. make a type specimen. `}
            buttonText="read more"
            smallImg={second}
            imgTxt="Alex Lioness"
            btnclr="bg-yellow-400"
          ></Card>
          <Card
            imageSrc={thirdimg}
            title="Lorem Ipsum is "
            description={`good personLorem Ipsum is simply  text of the printing and type setting industry. make a type specimen. `}
            buttonText="read more"
            smallImg={third}
            imgTxt="Alex Lioness"
            btnclr="bg-gray-900"
          ></Card>
        </div>
        <div className="btn text-center py-8">
          <button className="bg-yellow-400 text-white font-nunito font-bold text-sm sm:text-lg px-4 py-2 rounded-lg mx-auto hover:scale-110">
            View More
          </button>
        </div>
      </div>
    </>
  );
}
export default SixthPage;
