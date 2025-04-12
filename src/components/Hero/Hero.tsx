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
        <h1 className="text-4xl flex flex-col tracking-widest absolute top-48 z-20 ">
          <span className="uppercase tracking-tight inline-block font-medium text-4xl">
            Sushiwood
          </span>
          <div className="w-80 h-0.5 my-0.5" />
          <span className="text-3xl tracking-tighter self-end">
            Korean & Japanese Restaurant
          </span>
        </h1>

        <Button
          className="w-fit z-20 absolute bottom-10 left-1/3 -translate-x-1/2 md:hidden font-semibold text-base"
          variant={"destructive"}
          onClick={() => toggle("reservation")}
        >
          Reservations
        </Button>
        <Button
          className="w-fit z-20 absolute bottom-10 left-2/3 -translate-x-1/2 md:hidden font-semibold text-black text-base"
          variant={"outline"}
          onClick={() => toggle("order")}
        >
          Order Now
        </Button>
      </MaxWidthContent>

      <figure className="w-full relative -mt-12 -z-20 ">
        <div className="fixed inset-0 opacity-45 bg-black"></div>
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
