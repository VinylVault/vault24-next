/** @format */

'use client';
import qs from 'query-string';
import { useState } from 'react';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Input } from '../ui/input';
import { Button } from '../ui/button';

export const SearchBox = () => {
	const router = useRouter();
	const [search, setSearch] = useState('');

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!search) {
			return;
		}

		const url = qs.stringifyUrl(
			{
				url: '/the_vault/search',
				query: { searchTerm: search },
			},
			{ skipEmptyString: true }
		);
		router.push(url);
	};
	return (
		<form
			className="relative w-[40%] lg:w-[60%] flex items-center"
			onSubmit={onSubmit}>
			<Input
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				placeholder="Search The Vinyl Vault"
				className="border-vault-link border-2 text-white focus:bg-white focus:text-black rounded-r-full rounded-l-full text-xl p-6"
			/>
			<Button
				className="absolute right-0 p-6 border-2 rounded-l-none rounded-r-full border-vault-link bg-transparent text-vault-link hover:bg-vault-link hover:rounded-r-full hover:text-vault-menubar bg-vault-menubar"
				type="submit">
				<Search />
			</Button>
		</form>
	);
};
