'use client';
import CustomButton from "./CustomButton";

const Hero = () => {
const handleScroll =()=>{
    console.log("Scrolling to explore cars!")
}
  return (
    <div className="flex  xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto ">
      <div className="flex-1  pt-20 px-10">
        <h1 className=" 2xl:text-[60px] sm:text-[50px] text-[40px] font-extrabold">
          Find, book,or rent a car ,-quickly and easily!
        </h1>
        <p className="text-sm font-thin text-[18px] pb-2">
            streamline your car rental experiance with our efficient booking process!
        </p>
        <CustomButton title="Explore Cars" containersStyle="bg-blue-300" onclick={handleScroll}/>
      </div>
    </div>
  );
};

export default Hero;
