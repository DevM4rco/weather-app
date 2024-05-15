import { KeyboardEvent, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { SearchProps } from '../types/Types';

const Search = ({ loadCity }: SearchProps) => {
	const [city, setCity] = useState('');

	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key === 'Enter') loadCity(city);
	};

	return (
		<div className="flex gap-2">
			<input
				type="text"
				className="w-60 px-2 py-1 border-0 rounded-md outline-none bg-white transition-colors duration-300 focus:bg-gray-200"
				placeholder="Informe o nome da cidade"
				value={city}
				onChange={e => setCity(e.target.value)}
				onKeyDown={e => handleKeyDown(e)}
			/>
			<button
				className="font-bold p-2 rounded-lg bg-white cursor-pointer"
				onClick={() => loadCity(city)}
			>
				<BsSearch className="text-black" />
			</button>
		</div>
	);
};

export default Search;
