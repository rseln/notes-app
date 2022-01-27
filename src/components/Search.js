import React from 'react';
import { MdSearch } from 'react-icons/md';

const Search = ({ handleSearchNote }) => {
	return (
		<div className='search'>
			<MdSearch className='search-icon' size='2em' />
			<input //user types for search
				type='text'
				placeholder='Search for notes...'
                onChange={(event) =>
					handleSearchNote(event.target.value)
				}
			/>
		</div>
	);
};

export default Search;