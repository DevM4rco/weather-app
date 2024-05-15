import axios from 'axios';
import Search from './components/Search';
import { WeatherTypes } from './types/Types';
import { useState } from 'react';
import InfoWeather from './components/InfoWeather';

export default () => {
	const [weatherInfo, setWeatherInfo] = useState<WeatherTypes | null>();
	const myKey = import.meta.env.VITE_MY_KEY;

	const loadCity = async (city: string) => {
		if (city.length === 0) {
			alert('Informe o nome da cidade');
			return;
		}

		try {
			const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pt_br&units=metric&appid=${myKey}`;
			const response = await axios.get(url);
			const data = response.data;

			const { name, main, weather } = data;

			const weatherData: WeatherTypes = { name, main, weather };
			setWeatherInfo(weatherData);
		} catch (error) {
			alert('Cidade não encontrada');
			setWeatherInfo(null);
		}
	};

	return (
		<main className="flex justify-center items-center font-poppins h-screen w-screen bg-backgound bg-center bg-no-repeat bg-cover">
			<div className="flex flex-col justify-center items-center text-center px-6 py-4 border rounded-lg text-zinc-700 bg-black/45 backdrop-blur-md transition-shadow duration-300 shadow-xl hover:shadow-lg">
				<Search loadCity={loadCity} />
				{weatherInfo && <InfoWeather {...weatherInfo} />}
			</div>
		</main>
	);
};
