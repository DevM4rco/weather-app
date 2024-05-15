export interface SearchProps {
	loadCity: (city: string) => Promise<void>;
}

interface MainWeather {
	humidity: number;
	temp: number;
}

interface Weather {
	description: string;
	icon: string;
}

export interface WeatherTypes {
	name: string;
	main: MainWeather;
	weather: Weather[];
}
