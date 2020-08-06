import React from 'react'

const UserCard = (props) => {
	return (
		<div className="card">
			<img src={props.item.img} />
			<div class="card-info">
				<h2>{props.item.name}</h2>
				<p>{props.item.username}</p>
				<p>Followers: {props.item.followers}</p>
				<p>Following: {props.item.following}</p>
				<p>
					<a href={props.item.link}>Check my profile!</a>
				</p>
				<p></p>
			</div>
		</div>
	)
}

export default UserCard
