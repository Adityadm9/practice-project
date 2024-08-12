import React, { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import icon from "/images/home/chooseus/icon.png";
import left from "/images/home/chooseus/left.png";
import right from "/images/home/chooseus/right.png";
import CustomButton from "./CustomButton";

function ChooseUs() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="bg-gray-200 sm:py-16 mt-4 py-4">
      <h1 className="text-center font-nunito sm:text-4xl text-3xl lg:text-5xl font-bold text-gray-900 mb-7 pt-6">
        Reason to Choose{" "}
        <span className="underline decoration-custom-yellow decoration-4 underline-offset-1">
          Us
        </span>
      </h1>
      <div className="text-center tracking-normal font-lora sm:text-xl text-sm text-gray-900 mb-12 xl:leading-loose">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been <br />
        the industry's standard dummy text ever since the 1500s, when an unknown
        printer took a galley of <br />
        type and scrambled it to make a type specimen book. It has survived not
        only five centuries,
      </div>
      <Tabs.Root
        className="TabsRoot"
        value={activeTab}
        onValueChange={(value) => setActiveTab(value)}
      >
        <Tabs.List className="TabsList" aria-label="market research">
          <div className="md:flex-wrap md:justify-center text-center mx-auto mb-10 lg:space-x-8">
            <Tabs.Trigger value="tab1">
              <CustomButton
                text="Market Research"
                isActive={activeTab === "tab1"}
                onClick={() => setActiveTab("tab1")}
              />
            </Tabs.Trigger>
            <Tabs.Trigger value="tab2">
              <CustomButton
                text="Branding"
                isActive={activeTab === "tab2"}
                onClick={() => setActiveTab("tab2")}
              />
            </Tabs.Trigger>
            <Tabs.Trigger value="tab3">
              <CustomButton
                text="Reporting"
                isActive={activeTab === "tab3"}
                onClick={() => setActiveTab("tab3")}
              />
            </Tabs.Trigger>
            <Tabs.Trigger value="tab4">
              <CustomButton
                text="Data Analysis"
                isActive={activeTab === "tab4"}
                onClick={() => setActiveTab("tab4")}
              />
            </Tabs.Trigger>
          </div>
        </Tabs.List>
        <Tabs.Content className="TabsContent" value="tab1">
          <div className="bottom mx-7 px-2 bg-white md:py-8 rounded-3xl md:flex">
            <div className="left md:pl-6 md:w-1/2 mb-2">
              <img src={left} alt="Left" className="md:h-full" />
            </div>
            <div className="right my-10 text-center md:w-1/2">
              <div className="sub1 flex justify-center">
                <img src={right} alt="Right" className="mr-0" />
                <h1 className="font-nunito font-bold text-3xl underline decoration-custom-yellow decoration-4 underline-offset-1 py-4">
                  Market Research
                </h1>
              </div>
              <div className="content md:pl-20 text-sm text-center">
                Lorem Ipsum is simply dummy text of the printing and <br />
                typesetting industry. Lorem Ipsum has been industry <br />
                unknown printer took a galley of type
              </div>
              <button className="bg-gray-900 text-white font-nunito font-bold text-sm sm:text-lg px-4 py-2 rounded-lg mt-10 mb-5 hover:scale-110">
                Read More
              </button>
            </div>
          </div>
        </Tabs.Content>
        <Tabs.Content className="TabsContent" value="tab2">
          <div className="bottom mx-7 px-2 bg-white md:py-8 rounded-3xl md:flex">
            <div className="left md:pl-6 md:w-1/2 mb-2">
              <img src={left} alt="Left" className="md:h-full" />
            </div>
            <div className="right my-10 text-center md:w-1/2">
              <div className="sub1 flex justify-center">
                <img src={right} alt="Right" className="mr-0" />
                <h1 className="font-nunito font-bold text-3xl underline decoration-custom-yellow decoration-4 underline-offset-1 py-4">
                  Branding
                </h1>
              </div>
              <div className="content md:pl-20 text-sm text-center">
                Lorem Ipsum is simply dummy text of the printing and <br />
                typesetting industry. Lorem Ipsum has been industry <br />
                unknown printer took a galley of type
              </div>
              <button className="bg-gray-900 text-white font-nunito font-bold text-sm sm:text-lg px-4 py-2 rounded-lg mt-10 mb-5 hover:scale-110">
                Read More
              </button>
            </div>
          </div>
        </Tabs.Content>
        <Tabs.Content className="TabsContent" value="tab3">
          <div className="bottom mx-7 px-2 bg-white md:py-8 rounded-3xl md:flex">
            <div className="left md:pl-6 md:w-1/2 mb-2">
              <img src={left} alt="Left" className="md:h-full" />
            </div>
            <div className="right my-10 text-center md:w-1/2">
              <div className="sub1 flex justify-center">
                <img src={right} alt="Right" className="mr-0" />
                <h1 className="font-nunito font-bold text-3xl underline decoration-custom-yellow decoration-4 underline-offset-1 py-4">
                  Reporting
                </h1>
              </div>
              <div className="content md:pl-20 text-sm text-center">
                Lorem Ipsum is simply dummy text of the printing and <br />
                typesetting industry. Lorem Ipsum has been industry <br />
                unknown printer took a galley of type
              </div>
              <button className="bg-gray-900 text-white font-nunito font-bold text-sm sm:text-lg px-4 py-2 rounded-lg mt-10 mb-5 hover:scale-110">
                Read More
              </button>
            </div>
          </div>
        </Tabs.Content>
        <Tabs.Content className="TabsContent" value="tab4">
          <div className="bottom mx-7 px-2 bg-white md:py-8 rounded-3xl md:flex">
            <div className="left md:pl-6 md:w-1/2 mb-2">
              <img src={left} alt="Left" className="md:h-full" />
            </div>
            <div className="right my-10 text-center md:w-1/2">
              <div className="sub1 flex justify-center">
                <img src={right} alt="Right" className="mr-0" />
                <h1 className="font-nunito font-bold text-3xl underline decoration-custom-yellow decoration-4 underline-offset-1 py-4">
                  Data Analysis
                </h1>
              </div>
              <div className="content md:pl-20 text-sm text-center">
                Lorem Ipsum is simply dummy text of the printing and <br />
                typesetting industry. Lorem Ipsum has been industry <br />
                unknown printer took a galley of type
              </div>
              <button className="bg-gray-900 text-white font-nunito font-bold text-sm sm:text-lg px-4 py-2 rounded-lg mt-10 mb-5 hover:scale-110">
                Read More
              </button>
            </div>
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}

export default ChooseUs;
