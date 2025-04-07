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
            Korean <br />
            and <br />
            Japanese <br />
            Fusion
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

      <figure className="w-full -mt-12 -z-20 ">
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
