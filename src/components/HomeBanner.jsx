
function HomeBanner() {
   return (
      <>
            <section className="sub container  flex lg:bg-[url('/images/home/Banner-section.jpg')]  sm:w-full sm:bg-cover rounded-r-[50px]">
               <div className="md:py-20 txt  md:ml-24 mx-auto flex-col py-10 text-center lg:py-64">
                  <h1 className="font-nunito font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-7 sm:tracking-widest tracking-normal text-center ">
                     <span className="">Get Business</span> <br /> Solutions With The Firm.
                  </h1>
                  <p className="font-lora sm:text-lg font-normal text-gray-900 px-2 sm:tracking-widest tracking-widers text-sm text-center">
                     Lorem Ipsum is simply dummy text of the printing <br />
                     and <span className="font-lora-roman mb-7">typesetting</span> industry. Lorem Ipsum has been <br />
                     the industry's standard dummy.
                  </p>
                  <button className='bg-yellow-400 px-2 py-2 rounded-md text-white mt-8 font-nunito font-bold text-sm sm:text-lg h-12 w-40 hover:scale-110'>
                     Get In Touch
                  </button>
               </div>
            </section>
      
      </>
   );
}

export default HomeBanner;


