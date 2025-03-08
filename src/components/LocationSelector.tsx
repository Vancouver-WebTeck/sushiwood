// src/components/LocationSelector.tsx - section for homepage to select location for weather data and menu options
'use client';
import React from 'react';
import { useLocation } from '../contexts/LocationContext';
import MaxWidthContent from '@/_component/MaxWidthContent';
import Image from 'next/image';


export default function LocationSelector() {
	const { selectedLocation, setSelectedLocation } = useLocation();
	const locations = [
		{
			apiAddr: 'Fernie, BC',
			name: 'Sushiwood - Fernie',
			address: 'A-1221 7th Ave, Fernie, BC, Canada V0B 1M0',
			image: '/Sushiwood/sushiwood-fernie.webp',
		},
		{
			apiAddr: 'Nelson, BC',
			name: 'Sushiwood - Nelson',
			address: '702 Vernon St, Nelson, BC V1L 4G2',
			image: '/Sushiwood/sushiwood-nelson.webp',
		},
		{
			apiAddr: 'Castlegar, BC',
			name: 'Sushiwood - Castegar',
			address: 'Columbia Ave, castlegar, BC V1n 1a9',
			image: '/Sushiwood/sushiwood-castlegar.webp',
		},
	];

	return (
		<>
			{/* <h1 className='text-2xl font-bold'>Select a location</h1> */}
			<div className="flex flex-wrap gap-4 justify-center">
        {locations.map((loc) => (
          <button
            key={loc.apiAddr}
            onClick={() => setSelectedLocation(loc.apiAddr)} // Update global state
            className={`relative rounded overflow-hidden shadow-md transition-transform duration-200 ${
              selectedLocation === loc.apiAddr ? 'border-2 border-yellow-500 scale-105' : ''
            }`}
          >
            {/* Image */}
            <Image
              src={loc.image}
              alt={loc.name}
							width={256}
							height={192}
              className="w-64 h-48 object-cover"
            />
            {/* Overlay with location details */}
            <div
              className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-2 text-center"
              style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}
            >
              <p className="font-bold">{loc.name}</p>
              <p className="text-xs">{loc.address}</p>
            </div>
          </button>
        ))}
      </div>
		</>
	);
}
