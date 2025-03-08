import Calendar from "@/_component/Calendar";
import MaxWidthContent from "@/_component/MaxWidthContent";
import Popup from "@/_component/Popup";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, MapPin } from "lucide-react";
import Image from "next/image";

// Import all main homepage components
import { OurPhilosophy, LocationSelector, RestaurantPhoto } from "@/components";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-24">
      <Popup />

      {/* Hero section */}
      <section id="home">
        <MaxWidthContent className="mt-8 flex flex-col gap-y-12 pl-14 ">
          <h1 className="text-4xl flex tracking-widest absolute top-100 left-10 lg:left-36 z-20">
            <span className="-rotate-90 uppercase inline-block font-medium text-4xl mb-4 ">
              Sushiwood
            </span>
            <span className="flex flex-col font-bold -ml-52">
              <span className="text-7xl">寿</span>
              <span className=" text-7xl">司</span>
              <span className=" text-7xl">体</span>
              <span className=" text-7xl">験</span>
            </span>
            <span className="text-3xl self-end ml-2 tracking-wide ">
              Best <br />
              Sushi <br />
              Experience
            </span>
          </h1>

          <Button
            className="w-fit z-20 absolute bottom-10 left-1/3 -translate-x-1/2 md:hidden font-semibold text-base"
            style={{ marginRight: "20px" }}
            variant={"goldenborder"}
          >
            Reservations
          </Button>
          <Button
            className="w-fit z-20 absolute bottom-10 left-2/3 -translate-x-1/2 md:hidden font-semibold text-base"
            style={{ marginLeft: "20px" }}
            variant={"goldenborder"}
          >
            Order Now
          </Button>
        </MaxWidthContent>

        <figure className="w-full -mt-12 -z-20 ">
          <Image
            height={500}
            width={2000}
            src="/sushiwood/hero-img.webp"
            alt="long line of sushi"
            sizes="100vw"
            style={{
              objectFit: "cover",
              height: "900px",
            }}
            className="w-full"
          />
        </figure>
      </section>

      {/* Our Philosophy migrated to components folder*/}
      {/* <section id="ingredients">
        <MaxWidthContent className="flex items-center justify-center flex-col gap-10 px-14 py-12">
          <div className="relative w-full text-center">
            <span className="h-0 absolute -z-10 left-0 top-1/2 w-full md:h-0.5 bg-white" />
            <h2 className="text-3xl z-10 font-brandon-text uppercase tracking-wide w-40 md:w-fit md:bg-black md:px-8 mx-auto">
              OUR Philosophy
            </h2>
          </div>

          <p className="max-w-[634px] text-2xl text-center">
            At SushiWood Fernie, our philosophy is rooted in three key values:
            quality, tradition, and community.
          </p>

          <div className="flex items-center gap-10 flex-col md:flex-row">
            <div className="flex gap-8 flex-col">
              <figure className="flex-1">
                <Image
                  height={100}
                  width={100}
                  src={"/sushiwood/our-philosophy-1.webp"}
                  alt="Closer looks of sushi"
                  sizes="100vw"
                  className="h-80 w-80 rounded-full object-cover md:rounded-none md:w-full"
                />
              </figure>

              <div className="flex flex-col gap-2 text-center">
                <h3 className="text-xl uppercase">Quality</h3>
                <p>
                  We believe that great food starts with the finest ingredients.
                  From fresh seafood to carefully selected produce, we ensure
                  that every dish meets the highest standards of freshness and
                  flavor.
                </p>
              </div>
            </div>
            <div className="flex gap-8 flex-col">
              <figure className="flex-1">
                <Image
                  height={100}
                  width={100}
                  src={"/sushiwood/our-philosophy-2.webp"}
                  alt="sushi till area covered with flowers"
                  sizes="100vw"
                  className="h-80 w-80 rounded-full object-cover md:rounded-none md:w-full"
                />
              </figure>

              <div className="flex flex-col gap-2 text-center">
                <h3 className="text-xl uppercase">Tradition</h3>
                <p>
                  Honoring the rich culinary heritage of Japanese and Korean
                  cuisine, we craft each dish with authenticity while adding our
                  own modern touch. Whether it’s sushi, sashimi, or Korean
                  specialties, we stay true to time-honored techniques.
                </p>
              </div>
            </div>
            <div className="flex gap-8 flex-col">
              <figure className="flex-1">
                <Image
                  height={100}
                  width={100}
                  src={"/sushiwood/our-philosophy-3.webp"}
                  alt="Closer looks of sushi"
                  sizes="100vw"
                  className="h-80 w-80 rounded-full object-cover md:rounded-none md:w-full"
                />
              </figure>

              <div className="flex flex-col gap-2 text-center">
                <h3 className="text-xl uppercase">Community</h3>
                <p>
                  As a proud part of Fernie, we are more than just a
                  restaurant—we are a place where locals and visitors come
                  together to enjoy delicious food in a warm and welcoming
                  atmosphere.
                </p>
              </div>
            </div>
          </div>
        </MaxWidthContent>
      </section> */}
      <OurPhilosophy />

      {/* TODO fix this about shit its squeezing the page on mobile */}
      <section id="about" className="bg-white">
        <div className="none grid grid-cols-2">
          <figure className="h-full">
            <Image
              height={100}
              width={100}
              src={"/About-us.jpeg"}
              alt="Chef looking at the sushi closely in their hand"
              sizes="100vw"
              className="object-cover md:w-full md:h-full mx-auto"
            />
          </figure>

          <div className="text-black py-32 px-20 flex flex-col gap-10 text-lg">
            <h2 className="text-6xl mb-12 font-normal">
              Experience Japanese & Korean Flavors in Fernie, BC
            </h2>
            <p>
              Welcome to SushiWood Fernie, the newest restaurant in Fernie
              offering the best of Japanese and Korean cuisine. Located in the
              heart of Fernie, we bring you fresh ingredients, traditional
              flavors, and modern culinary techniques to deliver a dining
              experience that’s both delicious and affordable. Whether you're
              looking for sushi in Fernie or other classic Fernie sushi options,
              we have something to satisfy every craving.
            </p>
            <p>
              At SushiWood Fernie, we pride ourselves on serving a wide variety
              of sushi, sashimi, and classic Japanese and Korean dishes, all
              crafted by our skilled chefs with the utmost care. Whether you're
              here for a quick and convenient takeout meal or a cozy dine-in
              experience, every dish is made with the highest quality
              ingredients.
            </p>
            <p>
              As a proud member of the Fernie restaurant community, we are
              committed to offering a welcoming atmosphere where both locals and
              visitors can enjoy fresh, vibrant flavors, friendly service, and
              an unforgettable dining experience. Come visit us and taste the
              finest sushi in Fernie—a local favorite for all your Japanese and
              Korean cravings!
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

      {/* migrated to restuarantphoto.tsx in components */}
      {/* <section id="restaurant-photo">
        <MaxWidthContent className="flex items-center justify-center flex-col gap-10 px-14">
          <div className="grid grid-cols-2 md:grid-cols-3 md:gap-10">
            <figure className="flex items-center justify-center h-full">
              <Image
                height={100}
                width={100}
                src={"/sushiwood/9-1.webp"}
                alt="Closer looks of sushi"
                sizes="100vw"
                className="h-full w-full object-cover animate-blink"
                style={{ animationDelay: `1s` }}
              />
            </figure>
            <figure className="flex items-center justify-center h-full">
              <Image
                height={100}
                width={100}
                src={"/sushiwood/9-2.webp"}
                alt="Closer looks of sushi"
                sizes="100vw"
                className="h-full w-full object-cover animate-blink"
                style={{ animationDelay: `7s` }}
              />
            </figure>
            <figure className="flex items-center justify-center h-full">
              <Image
                height={100}
                width={100}
                src={"/sushiwood/9-3.webp"}
                alt="Closer looks of sushi"
                sizes="100vw"
                className="h-full w-full object-cover animate-blink"
                style={{ animationDelay: `3s` }}
              />
            </figure>
            <figure className="flex items-center justify-center h-full">
              <Image
                height={100}
                width={100}
                src={"/sushiwood/9-4.webp"}
                alt="Closer looks of sushi"
                sizes="100vw"
                className="h-full w-full object-cover animate-blink"
                style={{ animationDelay: `5s` }}
              />
            </figure>
            <figure className="flex items-center justify-center h-full">
              <Image
                height={100}
                width={100}
                src={"/sushiwood/9-5.webp"}
                alt="Closer looks of sushi"
                sizes="100vw"
                className="h-full w-full object-cover animate-blink"
                style={{ animationDelay: `11s` }}
              />
            </figure>
            <figure className="flex items-center justify-center h-full">
              <Image
                height={100}
                width={100}
                src={"/sushiwood/9-6.webp"}
                alt="Closer looks of sushi"
                sizes="100vw"
                className="h-full w-full object-cover animate-blink"
                style={{ animationDelay: `1s` }}
              />
            </figure>
            <figure className="flex items-center justify-center h-full">
              <Image
                height={100}
                width={100}
                src={"/sushiwood/9-7.webp"}
                alt="Closer looks of sushi"
                sizes="100vw"
                className="h-full w-full object-cover animate-blink"
                style={{ animationDelay: `7s` }}
              />
            </figure>
            <figure className="flex items-center justify-center h-full">
              <Image
                height={100}
                width={100}
                src={"/sushiwood/9-8.webp"}
                alt="Closer looks of sushi"
                sizes="100vw"
                className="h-full w-full object-cover animate-blink"
                style={{ animationDelay: `2s` }}
              />
            </figure>
            <figure className="flex items-center justify-center h-full">
              <Image
                height={100}
                width={100}
                src={"/sushiwood/9-9.webp"}
                alt="Closer looks of sushi"
                sizes="100vw"
                className="h-full w-full object-cover animate-blink"
                style={{ animationDelay: `5s` }}
              />
            </figure>
          </div>
        </MaxWidthContent>
      </section> */}
      <RestaurantPhoto />

      {/* Menu */}
      <section id="menu">
        <MaxWidthContent className="flex items-center justify-center flex-col gap-10 px-14">
          <div className="relative w-full text-center">
            <span className="h-0 absolute -z-10 left-0 top-1/2 w-full md:h-0.5 bg-white" />
            <h2 className="text-3xl z-10 font-brandon-text uppercase tracking-wide w-40 md:w-fit md:bg-black md:px-8 mx-auto">
              Our Menu
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 md:gap-10">
            {/* Individual menu items */}
            <div className="flex flex-col items-center">
              <h3 className="text-xl">Sushi 1</h3>
              <span className="text-muted-foreground">fish fish fish</span>
              <figure className="flex items-center justify-center h-full">
                <Image
                  height={100}
                  width={100}
                  src={"/Sushi1.png"}
                  alt="Closer looks of sushi"
                  sizes="100vw"
                  className="h-25 w-40 md:h-25 md:w-60"
                />
              </figure>
            </div>
            {/* Individual menu items */}
            <div className="flex flex-col items-center">
              <h3 className="text-xl">Sushi 2</h3>
              <span className="text-muted-foreground">fish fish fish</span>
              <figure className="flex items-center justify-center h-full">
                <Image
                  height={100}
                  width={100}
                  src={"/Sushi2.png"}
                  alt="Closer looks of sushi"
                  sizes="100vw"
                  className="h-25 w-40 md:h-25 md:w-60"
                />
              </figure>
            </div>
            {/* Individual menu items */}
            <div className="flex flex-col items-center">
              <h3 className="text-xl">Sushi 3</h3>
              <span className="text-muted-foreground">fish fish fish</span>
              <figure className="flex items-center justify-center h-full">
                <Image
                  height={100}
                  width={100}
                  src={"/Sushi3.png"}
                  alt="Closer looks of sushi"
                  sizes="100vw"
                  className="h-25 w-40 md:h-25 md:w-60"
                />
              </figure>
            </div>
            {/* Individual menu items */}
            <div className="flex flex-col items-center">
              <h3 className="text-xl">Sushi 4</h3>
              <span className="text-muted-foreground">fish fish fish</span>
              <figure className="flex items-center justify-center h-full">
                <Image
                  height={100}
                  width={100}
                  src={"/Sushi4.png"}
                  alt="Closer looks of sushi"
                  sizes="100vw"
                  className="h-25 w-40 md:h-25 md:w-60"
                />
              </figure>
            </div>
            {/* Individual menu items */}
            <div className="flex flex-col items-center">
              <h3 className="text-xl">Sushi 4</h3>
              <span className="text-muted-foreground">fish fish fish</span>
              <figure className="flex items-center justify-center h-full">
                <Image
                  height={100}
                  width={100}
                  src={"/Sushi5.png"}
                  alt="Closer looks of sushi"
                  sizes="100vw"
                  className="h-25 w-40 md:h-25 md:w-60"
                />
              </figure>
            </div>
            {/* Individual menu items */}
            <div className="flex flex-col items-center">
              <h3 className="text-xl">Sushi 6</h3>
              <span className="text-muted-foreground">fish fish fish</span>
              <figure className="flex items-center justify-center h-full">
                <Image
                  height={100}
                  width={100}
                  src={"/Sushi6.png"}
                  alt="Closer looks of sushi"
                  sizes="100vw"
                  className="h-25 w-40 md:h-25 md:w-60"
                />
              </figure>
            </div>
          </div>
        </MaxWidthContent>
      </section>

      {/* Pricing */}
      <section id="pricing">
        <MaxWidthContent className="flex items-center justify-center flex-col gap-10 px-14">
          <div className="relative w-full text-center">
            <span className="h-0 absolute -z-10 left-0 top-1/2 w-full md:h-0.5 bg-white" />
            <h2 className="text-3xl z-10 font-brandon-text uppercase tracking-wide w-40 md:w-fit md:bg-black md:px-8 mx-auto">
              Pricing
            </h2>
          </div>
          <figure className="md:order-2 w-full h-full">
            <Image
              height={100}
              width={100}
              src={"/menu-pricing.png"}
              alt="Menu Pricing"
              style={{
                objectFit: "contain",
                height: "900px",
              }}
              sizes="100vw"
              className="h-80 w-80 object-cover md:w-full md:h-full mx-auto"
            />
          </figure>
        </MaxWidthContent>
      </section>

      {/* Location Selector */}
      <section id="location">
        <div className="flex items-center justify-center flex-col bg-white py-16">
          <div className="relative w-full text-center">
            <span className="h-0 absolute -z-10 left-0 top-1/2 w-full md:h-0.5 bg-white" />
            <h2 className="pb-16 text-black text-3xl z-10 font-brandon-text uppercase tracking-wide w-40 md:w-fit md:px-8 mx-auto">
              Location
            </h2>
          </div>
          <LocationSelector />
        </div>
      </section>
    </main>
  );
}
