import Image from "next/image";
import MaxWidthContent from "@/_component/MaxWidthContent";

const OurPhilosophy = () => {
  return (
    <section id="ingredients">
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
          <div className="flex items-center gap-8 flex-col">
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
                From fresh seafood to carefully selected produce, we ensure that
                every dish meets the highest standards of freshness and flavor.
              </p>
            </div>
          </div>

          <div className="flex items-center  gap-8 flex-col">
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

          <div className="flex items-center  gap-8 flex-col">
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
    </section>
  );
};

export default OurPhilosophy;