import React from 'react';
import clients from '../assets/clients.json';

const List = ({ searchValue }) => {
	const isSearched = searchValue => item => 
		item.general.firstName.toLowerCase().includes(searchValue.toLowerCase());
	return (
		<ul>
			{clients.filter(isSearched(searchValue)).map(client => {
				if(searchValue !== '' && client.general.firstName.includes(searchValue)) {
					return (
						<li key={client.contact.email}>{client.general.firstName}</li>
					)
				}
			})}
		</ul>
	);
};		

export default List;


