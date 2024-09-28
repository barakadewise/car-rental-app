"use client";

import { CarProps } from "@/types";
import CustomButton from "./CustomButton";
import Image from "next/image";

const CartalogueCard = (carProps: CarProps) => {
  const { make, model, path, transmission, fuel_type, driver } = carProps;

  return (
    <div className="border rounded-lg p-2 w-[300px] flex flex-col bg-blue-100 bg-opacity-5 shadow-md hover:shadow-xl hover:cursor-pointer hover:bg-slate-100">
      <h3 className="text-[22px] font-extrabold justify-center text-xl">
        {make} {model}
      </h3>
      <div className="py-1  flex">
        <p className="flex mt-2 text-[20px] font-semibold">
          <span className="self-start text-[14px] font-medium">$</span>
          54
          <span className="self-start text-[14px] font-medium mt-4">/day</span>
        </p>
      </div>
      <div className="my-2 w-full object-contain h-36 relative">
        {/* Car image */}
        <Image
          src={path}
          alt={`${make} ${model} image`}
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="relative justify-between w-full  flex p-2">
        <div className="flex flex-col">
          <Image
            src="/steering_wheel.png"
            height={20}
            width={20}
            className="object-contain"
            alt="steering_wheel"
          />
          {/* Transmission */}
          <h2 className="text-sm font-normal text-[12px]">{transmission}</h2>
        </div>
        <div className="flex flex-col">
          <Image
            src="/oil_type.png"
            height={20}
            width={20}
            className="object-contain"
            alt="oil_type"
          />
          {/* Fuel type */}
          <h2 className="text-sm font-normal text-[12px]">
            {fuel_type === 1 ? "Petrol" : "Diesel"}
          </h2>
        </div>
        <div className="flex flex-col">
          <Image
            src="/drive_type.png"
            height={20}
            width={20}
            className="object-contain"
            alt="drive_type"
          />
          {/* Drive type */}
          <h2 className="text-sm font-normal text-[12px]">{driver}</h2>
        </div>
      </div>
    </div>
  );
};

export default CartalogueCard;
