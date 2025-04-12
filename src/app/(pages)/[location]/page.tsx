import Menu from "@/_component/Menu";
import Popup from "@/_component/Popup";
import { LocationSelector, OurPhilosophy, RestaurantPhoto } from "@/components";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";

export default async function Page({
  params,
}: {
  params: Promise<{ location: "fernie" | "nelson" | "castlegar" }>;
}) {
  const { location } = await params;
  return (
    <>
      <main className="flex flex-col gap-y-24">
        <Popup />
        <Hero />
        {/* Location Selector */}
        <section id="location">
          <div className="flex items-center justify-center flex-col bg-white py-16">
            <div className="relative w-full text-center">
              <span className="h-0 absolute -z-10 left-0 top-1/2 w-full md:h-0.5 bg-white" />
              <h2 className="pb-16 text-black text-3xl z-10 font-brandon-text uppercase tracking-wide w-40 md:w-fit md:px-8 mx-auto">
                Select Location
              </h2>
            </div>
            <LocationSelector />
          </div>
        </section>
        <OurPhilosophy />

        {/* TODO she writing her content here, so she wanted to comment it out for now */}
        {/* <section id="about" className="bg-white">
        <div className="none grid md:grid-cols-2">
          <figure className="h-full">
            <Image
              height={3200}
              width={4800}
              src={"/sushiwood/about-us.webp"}
              alt="Chef looking at the sushi closely in their hand"
              sizes="100vw"
              className="object-cover md:w-full md:h-full mx-auto"
            />
          </figure>

          <div className="text-black py-32 px-4 md:px-20 flex flex-col gap-10 text-lg">
            <h2 className="text-2xl font-bold lg:text-4xl lg:mb-6 ">
              Experience Japanese & Korean Flavors in Fernie, BC
            </h2>
            <p>
              Welcome to SushiWood Fernie, the newest restaurant in Fernie
              offering the best of Japanese and Korean cuisine. Located in the
              heart of Fernie, we bring you fresh ingredients, fusion of
              flavors, and modern culinary techniques to deliver a dining
              experience that’s both delicious and affordable. Whether
              you&apos;re looking for sushi in Fernie or other classic Fernie
              sushi options, we have something to satisfy every craving.
            </p>
            <p>
              At SushiWood Fernie, we pride ourselves on serving a wide variety
              of sushi, sashimi, and classic Japanese and Korean dishes, all
              crafted by our skilled chefs with the utmost care. Whether
              you&apos;re here for a quick and convenient takeout meal or a cozy
              dine-in experience, every dish is made with the highest quality
              ingredients.
            </p>
            <p>
              As a proud member of the Fernie restaurant community, we are
              committed to offering a welcoming atmosphere where both locals and
              visitors can enjoy fresh, vibrant flavors and friendly service.
              Come visit us and taste the sushi in Fernie—a local
              favorite for all your Japanese and Korean cravings!
            </p>
            <div className="flex flex-row-reverse gap-4">
              <Image
                height={100}
                width={100}
                src={"/sushiwood/restaurant-guru-2023.webp"}
                alt="Chef looking at the sushi closely in their hand"
                className="object-cover"
              />
              <Image
                height={100}
                width={100}
                src={"/sushiwood/restaurant-guru-2025.webp"}
                alt="Chef looking at the sushi closely in their hand"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section> */}
        <RestaurantPhoto />
        <Menu location={location} />
      </main>
      <Footer location={location} />
    </>
  );
}
