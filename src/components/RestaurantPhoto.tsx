import Image from "next/image";
import MaxWidthContent from "@/_component/MaxWidthContent"; 

const photos = [
  { src: "/sushiwood/9-1.webp", delay: "1s" },
  { src: "/sushiwood/9-2.webp", delay: "7s" },
  { src: "/sushiwood/9-3.webp", delay: "3s" },
  { src: "/sushiwood/9-4.webp", delay: "5s" },
  { src: "/sushiwood/9-5.webp", delay: "11s" },
  { src: "/sushiwood/9-6.webp", delay: "1s" },
  { src: "/sushiwood/9-7.webp", delay: "7s" },
  { src: "/sushiwood/9-8.webp", delay: "2s" },
  { src: "/sushiwood/9-9.webp", delay: "5s" },
];

const RestaurantPhoto = () => {
  return (
    <section id="restaurant-photo">
      <MaxWidthContent className="px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <figure
              key={index}
              className="overflow-hidden h-[300px] w-full flex items-center justify-center"
            >
              <Image
                height={300}
                width={300}
                src={photo.src}
                alt="Closer looks of sushi"
                sizes="300px"
                className="object-cover h-full w-full animate-blink"
                style={{ animationDelay: photo.delay }}
              />
            </figure>
          ))}
        </div>
      </MaxWidthContent>
    </section>
  );
};

export default RestaurantPhoto;