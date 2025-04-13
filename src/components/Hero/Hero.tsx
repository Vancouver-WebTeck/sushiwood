"use client";
import MaxWidthContent from "@/_component/MaxWidthContent";
import { Button } from "@/components/ui/button";
import { usePopupStore } from "@/stores/Popup";
import Image from "next/image";

export default function Hero() {
  const { toggle } = usePopupStore();
  return (
    <section id="home">
      <MaxWidthContent className="mt-8 flex flex-col gap-y-12 pl-14 ">
      <h1 className="text-5xl flex flex-col tracking-widest absolute top-48 z-20 max-w-[90%] sm:max-w-none">
        <span className="uppercase tracking-tight font-medium text-4xl md:text-5xl">
          Sushiwood
        </span>
        <div className="w-40 md:w-80 h-0.5 my-2" />
        <span className="text-2xl md:text-3xl tracking-tighter text-left self-start leading-tight">
          <span className="block sm:inline">Korean & Japanese</span>
          <span className="block sm:inline"> Restaurant</span>
        </span>
      </h1>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex justify-center gap-4 md:hidden w-full px-4">
        <Button
          className="w-fit font-semibold text-base"
          variant={"destructive"}
          onClick={() => toggle("reservation")}
        >
          Reservations
        </Button>
        <Button
          className="w-fit font-semibold text-base text-black"
          variant={"outline"}
          onClick={() => toggle("order")}
        >
          Order Now
        </Button>
      </div>

      </MaxWidthContent>

      <figure className="w-full relative -mt-12 -z-20 ">
        {/* <div className="fixed inset-0 opacity-45 bg-black"></div> */}
        <Image
          height={500}
          width={2000}
          src="/sushiwood/hero-img.webp"
          alt="long line of sushi"
          loading="eager"
          sizes="(max-width: 675px) 675px, (max-width: 1350px) 1350px, 2700px"
          priority={true}
          style={{
            objectFit: "cover",
          }}
          className="w-full h-[900px] md:h-screen"
        />
      </figure>
    </section>
  );
}
