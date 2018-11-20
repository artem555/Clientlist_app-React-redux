import React from 'react';
import clients from './clients.json';

const List = ({ searchValue }) => {
	return (
		<ul>
			{clients.map(client => {
				console.log(client.general.firstName.includes(searchValue));
				if(client.general.firstName.includes(searchValue) && searchValue !== '') {
					return (
						<li key={client.contact.email}>{client.general.firstName}</li>
					)
				}
			})}
		</ul>
	);
};

export default List;


