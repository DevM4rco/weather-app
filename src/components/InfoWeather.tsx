import { FaLocationDot } from 'react-icons/fa6';
import { WeatherTypes } from '../types/Types';

const InfoWeather = ({ name, main, weather }: WeatherTypes) => {
	return (
		<>
			<div className="text-white mt-3">
				<div className="flex justify-center items-center gap-2 text-2xl font-extralight mb-2">
					Tempo em {name}
					<FaLocationDot />
				</div>
				<div className="text-xl font-light">{main.temp}&deg;C</div>
				<div className="flex justify-center items-center capitalize">
					<img
						src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
						alt="icon weather"
						className="w-16"
					/>
					{weather[0].description}
				</div>
				<div>Humidade: {main.humidity}%</div>
			</div>
		</>
	);
};

export default InfoWeather;
