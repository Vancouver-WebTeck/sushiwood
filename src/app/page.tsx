import Menu from "@/_component/Menu";
import Popup from "@/_component/Popup";
import { LocationSelector, OurPhilosophy, RestaurantPhoto } from "@/components";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Image from "next/image";
export default function Home() {
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
        <section id="about" className="bg-white">
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
              What began as a small, cozy spot called Japanese Korean Barbecue has grown into one of Fernie’s favorite fusion dining experiences. Now known as SushiWood, the restaurant serves a mouthwatering blend of traditional Japanese and Korean dishes — from sizzling fried rice to fresh sushi — all made with passion and love.
            </p>
            <p>
              Located on 7th Avenue in Fernie, SushiWood is proudly owned and operated by Oyunaa, who first started working at the restaurant in 2018. After years of dedication and hands-on experience, she took over ownership in 2022. During this time, she also completed training at the Japanese Culinary Institute, bringing even more depth and expertise to the kitchen.
            </p>
            <p>
              Since then, SushiWood has expanded with additional locations in Cranbrook and Nelson. While these branches share the same brand and concept, each location is independently operated.
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
      </section>
        <RestaurantPhoto />
        <Menu location="fernie" />
      </main>
      <Footer location="fernie" />
    </>
  );
}
