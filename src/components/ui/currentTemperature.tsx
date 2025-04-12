'use client';
import useSWR from 'swr';
import { useLocation } from '@/contexts/LocationContext';

interface CurrentTemperatureProps {
	current: {
		temp_c: number;
	};
	location: {
		name: string;
	};
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function CurrentTemperature() {
	const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
	const { selectedLocation } = useLocation();

	const { data, error } = useSWR<CurrentTemperatureProps>(
		`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${selectedLocation}`,
		fetcher
	);
	console.log(data);
	// const currentWeather = location.map((loc) => {
	// 	const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${selectedLocation}`;
	// 	return useSWR<CurrentTemperatureProps>(url, fetcher);
	// });

	return (
		<>
    <div>
      {/* Handle loading state */}
      {!data ? (
        <p>Loading temperature for {selectedLocation}...</p>
      ) : error ? (
        // Handle error state
        <p>Error fetching weather data: {error.message}</p>
      ) : (
        // Display the temperature
        <p>
          {data.location.name}: {data.current.temp_c}°C
        </p>
      )}
    </div>
		</>
	);
}
