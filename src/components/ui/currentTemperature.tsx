'use client';
import useSWR from 'swr';

interface CurrentTemperatureProps {
	current: {
		temp: number;
	};
	location: {
		name: string;
	};
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function CurrentTemperature() {
	const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
	const location = ['Fernin, BC', 'Nelson, BC', 'Castlegar, BC'];

	const currentWeather = location.map((loc) => {
		const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${loc}`;
		return useSWR<CurrentTemperatureProps>(url, fetcher);
	});

	return (
		<>
			{currentWeather.map(({ data, error }, index) => (
      <div key={index} className="flex items-center space-x-2">
        {error && <p>Error fetching weather data for {location[index]}</p>}
        {!data ? (
          <p>Loading temperature for {location[index]}...</p>
        ) : (
          <p>
            {data.location.name}: {data.current.temp}°C
          </p>
        )}
      </div>
    ))}
		</>
	);
}
