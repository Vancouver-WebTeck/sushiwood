import type { Metadata } from "next";
import Head from "next/head";
import Menu from "@/_component/Menu";
import Popup from "@/_component/Popup";
import { LocationSelector, OurPhilosophy, RestaurantPhoto } from "@/components";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import { notFound } from "next/navigation";

// Dynamic location data
const locationData = {
  fernie: {
    name: "SushiWood Fernie",
    title: "SushiWood Fernie | Japanese & Korean Fusion",
    description: "Experience Japanese and Korean flavors in Fernie, BC. Fresh sushi, warm hospitality, and cozy dine-in or takeout.",
    url: "https://sushiwood.ca/fernie",
    image: "https://sushiwood.ca/og-image.jpg",
    address: {
      street: "1221 7th Ave",
      city: "Fernie",
      region: "BC",
      postalCode: "V0B 1M0",
      country: "CA",
    },
    phone: "+1-(778)-519-5255",
  },
  nelson: {
    name: "SushiWood Nelson",
    title: "SushiWood Nelson | Korean & Japanese Fusion",
    description: "Discover SushiWood Nelson, your go-to spot for fresh sushi and Korean classics in Nelson, BC.",
    url: "https://sushiwood.ca/nelson",
    image: "https://sushiwood.ca/og-image.jpg",
    address: {
      street: "702 Vernon St",
      city: "Nelson",
      region: "BC",
      postalCode: "V1L 4G2",
      country: "CA",
    },
    phone: "+1-(778)-463-1117",
  },
  castlegar: {
    name: "SushiWood Castlegar",
    title: "SushiWood Castlegar | Korean & Japanese Fusion",
    description: "Try SushiWood Castlegar for the best Japanese and Korean dishes in Castlegar, BC. Dine-in and takeout available.",
    url: "https://sushiwood.ca/castlegar",
    image: "https://sushiwood.ca/og-image.jpg",
    address: {
      street: "789 Columbia Ave",
      city: "Castlegar",
      region: "BC",
      postalCode: "V1N 1H0",
      country: "CA",
    },
    phone: "+1-250-000-3333",
  },
};

// Dynamic Meta Tags
export async function generateMetadata({
  params,
}: {
  params: { location: "fernie" | "nelson" | "castlegar" };
}): Promise<Metadata> {
  const data = locationData[params.location];
  if (!data) return notFound();
  
  return {
    title: data.title,
    description: data.description,
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: [data.image],
    },
  };
}

// Page Component
export default async function Page({
  params,
}: {
  params: { location: "fernie" | "nelson" | "castlegar" };
}) {
  const location = params.location;
  const data = locationData[location];
  if (!data) return notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: data.name,
    image: data.image,
    address: {
      "@type": "PostalAddress",
      streetAddress: data.address.street,
      addressLocality: data.address.city,
      addressRegion: data.address.region,
      postalCode: data.address.postalCode,
      addressCountry: data.address.country,
    },
    telephone: data.phone,
    url: data.url,
    servesCuisine: ["Japanese", "Korean"],
    priceRange: "$$",
    cuisineType: ["Japanese", "Korean"],
  };

  return (
    <>
      {/* Local Business Schema */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <main className="flex flex-col gap-y-24">
        <Popup />
        <Hero />

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
