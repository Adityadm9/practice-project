import logo from "/images/home/frustationofclients/question.png";
import icon from "/images/home/frustationofclients/icon.svg";
import icon1 from "/images/home/frustationofclients/icon1.png";

function SecondPage(){
   return(
    <div className=" bg-gray-100  md:flex py-20">
        <div className="left border-box md:my-14 md:w-1/2  ">
            <h1 className="font-nunito font-bold sm:text-4xl text-3xl mb-6 lg:text-5xl text-gray-900 text-center lg:text-start py-4">Frustation of <span className="underline decoration-custom-yellow decoration-4 underline-offset-0">Clients</span></h1>
            <div className="font-lora text-sm sm:text-xl text-justify p-2 text-gray-900 mb-6">Lorem Ipsum is simply dummy text of the printing and typesetting 
             industry. Lorem Ipsum has been the industry's standard dummy dum dum
              text ever since the 1500s,</div>
            <ul className="font-lora   text-gray-900 ml-2  ">
                <li className="mb-3 text-sm sm:text-xl"> <img src={logo} className="inline-block" alt="" />&nbsp;&nbsp;Loren rasion gravida auem is bibenua tase</li>
                <li className="mb-3 text-sm sm:text-xl"> <img src={logo} className="inline-block" alt="" />&nbsp;&nbsp;  Lorem Ipsum is simply dummy text of the.</li>
                <li className="mb-3 text-sm sm:text-xl"> <img src={logo} className="inline-block" alt="" />&nbsp;&nbsp;  Printing and typesetting industry. Lorem Ipsum</li>
                <li className="text-sm sm:text-xl"> <img src={logo} className="inline-block" alt="" />&nbsp;&nbsp; When an unknown printer took a galley of type and <br />scrambled it</li>
            </ul>
        </div>  
        <div className=" right  container md:w-1/2 md:my-auto">
       
            <img src={icon} alt="" className="relative z-20 h-80 w-96 mx-auto md:h-auto md:w-auto"/>
            <img src={icon1} alt="" className=" relative h-36   w-60 -mt-44  mx-auto lg:h-auto lg:w-auto lg:ml-16 2xl:ml-72 2xl:-mt-60 xl:ml-56 xl:-mt-56" />
        </div>
       
    </div> 
   )
}
export default SecondPage;