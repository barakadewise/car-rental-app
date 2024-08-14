import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <main className="min-h-screen  overflow-hidden pt-3">
      <Hero />
      <div className="mt-4  w-max py-4 px-16 " id="discover">
        <div className="pb-3">
          <h3 className="font-extrabold text-4xl">Car Cartalogue</h3>
          <p className="text-sm  font-thin text-[15px]">
            Explore the car you might like!
          </p>
        </div>
        </div>

        <div className="flex-1 justify-between bg-red-500  sm:px-16 px-6 gap-5">
          <SearchBar />
          
        <div className="flex gap-10">
          <CustomFilter />
          <CustomFilter />
        </div>
      </div>
      
    </main>
  );
}
