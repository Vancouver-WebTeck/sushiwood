// src/components/LocationSelector.tsx - section for homepage to select location for weather data and menu options

import React from 'react';
import { useLocation } from "../contexts/LocationContext";

//TODO: fix this stupid shit... useLocation() is not a function WTF. saying that routing is the problem but my routing seems to be fine??? commented out for now becuase its breaking the whole site 
export default function LocationSelector() {
	// const { selectedLocation, setSelectedLocation } = useLocation();
	const locations = ['Fernie, BC', 'Nelson, BC', 'Castlegar, BC'];

	return (
		<div className="flex space-x-4">
			<select
				className="p-2 border border-gray-200 rounded"
				// value={selectedLocation}
				// onChange={(e) => setSelectedLocation(e.target.value)}
			>
				{locations.map((loc) => (
					<option key={loc} value={loc}>
						{loc}
					</option>
				))}
			</select>
		</div>
	);
}