import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen  overflow-hidden pt-3">
      <Hero />
      <div className="mt-4  w-max py-4 px-16">
        <h3 className="font-extrabold text-4xl">Car Cartalogue</h3>
        <p className="text-sm  font-thin text-[15px]">Explore the car you might like!</p>
      </div>
    </main>
  );
}
