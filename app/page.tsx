import CartalogueCard from "@/components/CartalogueCard";
import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import { carList } from "@/constants/constatnts";

export default function Home() {
  return (
    <main className="min-h-screen  overflow-hidden pt-3">
      <Hero />
      <div className="mt-4  w-max py-4 px-16 " id="discover">
        <div className="pb-3">
          <h3 className="font-extrabold text-4xl">Car Catalogue</h3>
          <p className="text-sm  font-thin text-[15px]">
            Explore the car you might like!
          </p>
        </div>
      </div>

      <div className="flex  md:flex-row flex-col w-full justify-between sm:px-16 px-6">
        <SearchBar />

        <div className="gap gap-2 flex flex-row">
          <CustomFilter />
          <CustomFilter />
        </div>
      </div>

      {/* Car cards */}
      <div className=" flex  flex-wrap gap gap-8 justify-center sm:px-16 px-6 my-5  w-full flex-row ">
        {carList.map((car, index) => (
          <CartalogueCard {...car} key={index} />
        ))}
      </div>
    </main>
  );
}
