// src/components/LocationSelector.tsx - section for homepage to select location for weather data and menu options
"use client";
import React from "react";
import { useLocation } from "../contexts/LocationContext";
// import MaxWidthContent from '@/_component/MaxWidthContent';
import Image from "next/image";
import Link from "next/link";

export default function LocationSelector() {
  const { selectedLocation, setSelectedLocation } = useLocation();
  const locations = [
    {
      apiAddr: "Fernie, BC",
      name: "Sushiwood - Fernie",
      address: "A-1221 7th Ave, Fernie, BC, Canada V0B 1M0",
      image: "/sushiwood/sushiwood-fernie.webp",
      slug: "/",
    },
    {
      apiAddr: "Nelson, BC",
      name: "Sushiwood - Nelson",
      address: "702 Vernon St, Nelson, BC V1L 4G2",
      image: "/sushiwood/sushiwood-nelson.webp",
      slug: "/nelson",
    },
    {
      apiAddr: "Castlegar, BC",
      name: "Sushiwood - Castlegar",
      address: "Columbia Ave, Castlegar, BC V1N 1A9",
      image: "/sushiwood/sushiwood-castlegar.webp",
      slug: "/castlegar",
    },
  ];

  return (
    <>
      {/* <h1 className='text-2xl font-bold'>Select a location</h1> */}
      <div className="flex flex-wrap gap-4 justify-center">
        {locations.map((loc) => (
          <Link
            href={loc.slug}
            key={loc.apiAddr}
            className={`relative rounded overflow-hidden shadow-md transition-transform duration-200 ${
              selectedLocation === loc.apiAddr
                ? "border-2 border-yellow-500 scale-105"
                : ""
            }`}
          >
            <div className="relative w-80 h-60">
              <Image
                src={loc.image}
                alt={loc.name}
                width={320}
  				height={224}
                sizes="(min-width: 768px) 320px, 100vw"
                className="object-cover rounded"
                priority // optional, improves LCP if above the fold
              />
            </div>
            {/* Overlay with location details */}
            <div
              className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-2 text-center"
              style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)" }}
            >
              <p className="font-bold">{loc.name}</p>
              <p className="text-xs">{loc.address}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
