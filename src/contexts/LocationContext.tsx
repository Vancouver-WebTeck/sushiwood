// src/contexts/LocationContext.tsx
"use client";
import { createContext, useContext, useState } from "react";

interface LocationContextProps {
	selectedLocation: string;
	setSelectedLocation: (location: string) => void;
}

const LocationContext = createContext<LocationContextProps | undefined>(undefined);

export const useLocation = () => {
	const context = useContext(LocationContext);
	if (!context) {
		throw new Error("useLocation must be used within a LocationProvider");
	}
	return context;
};

export function LocationProvider({ children }: { children: React.ReactNode }) {
	const [selectedLocation, setSelectedLocation] = useState("Fernie, BC");

	return (
		<LocationContext.Provider value={{ selectedLocation, setSelectedLocation }}>
			{children}
		</LocationContext.Provider>
	);
}