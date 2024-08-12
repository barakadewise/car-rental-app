"use client";
import CustomButton from "./CustomButton";
import Image from "next/image";

const Hero = () => {
  const handleButton = () => {
    console.log("Scrolling to explore cars!");
  };
  return (
    <div className="flex  xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto">
      <div className="flex-1  pt-20 px-10">
        <h1 className=" 2xl:text-[60px] sm:text-[50px] text-[40px] font-extrabold">
          Find, book,or rent a car ,-quickly and easily!
        </h1>
        <p className="text-sm font-thin text-[15px] pb-2">
            Streamline your car rental experiance with our efficient booking
          process!
        </p>
        <CustomButton
          title="Explore Cars"
          btnType="button"
          buttonStyle="bg-blue-600 rounded-full py-1 px-2 text-white"
          handleOnclick={handleButton}
        />
      </div>
      <div className=" flex-1  xl:w-[500px] xl:h-[500px]  h-[400px] w-screen ">
        <div className="h-full flex justify-center items-center">
          <Image
            src="/hero_image.png"
            alt="hero_image"
            width={400}
            height={350}
            className=" object-contain h-auto w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
