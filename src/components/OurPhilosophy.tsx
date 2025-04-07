import Image from "next/image";
import MaxWidthContent from "@/_component/MaxWidthContent";

const OurPhilosophy = () => {
  return (
    <section id="ingredients">
      <MaxWidthContent className="flex items-center justify-center flex-col gap-10 px-4 md:px-14 py-12">
        <div className="relative w-full text-center">
          <span className="h-0 absolute -z-10 left-0 top-1/2 w-full md:h-0.5 bg-white" />
          <h2 className="text-2xl md:text-3xl z-10 font-semibold tracking-wider uppercase  w-40 md:w-fit md:bg-black md:px-8 mx-auto">
            OUR Philosophy
          </h2>
        </div>

        <p className="max-w-[634px] text-center">
          At SushiWood Fernie, our philosophy is rooted in three key values:
          quality, innovation, and community.
        </p>

        <div className="flex items-center gap-10 flex-col md:flex-row">
          <div className="flex gap-8 flex-col">
            <figure className="flex justify-center">
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
                We believe that great food starts with the fresh ingredients.
                From fresh seafood to carefully selected produce, we ensure that
                every dish meets the highest standards of freshness and flavor.
              </p>
            </div>
          </div>

          <div className="flex gap-8 flex-col">
            <figure className="flex justify-center">
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
              <h3 className="text-xl uppercase">Innovation</h3>
              <p>
                Blending Japanese and Korean cuisine, 
                we craft each dish with authentic flavors and a modern touch. 
                From sushi and sashimi to Korean specialties, 
                we honor time-tested techniques with creative flair.
              </p>
            </div>
          </div>

          <div className="flex gap-8 flex-col">
            <figure className="flex justify-center">
              <Image
                height={100}
                width={100}
                src={"/sushiwood/9-6.webp"}
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