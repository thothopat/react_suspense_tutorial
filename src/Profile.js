import React from "react";
import fetchData from './api/FetchApi'

const resource = fetchData( 'https://jsonplaceholder.typicode.com/users/1' )

const UserProfile = () => {
	const user = resource.read();
	return (
		<div className="container">
			<h1 className="title">{user.name}</h1>
			<ul>
				<li>username: {user.username}</li>
				<li>phone: {user.phone}</li>
				<li>website:{user.website}</li>
				<li>email: {user.email}</li>
			</ul>
		</div>
	)
}

export default UserProfile;