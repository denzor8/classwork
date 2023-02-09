import React from 'react'

const Section = ({ users }) => {
	console.log(users)
	users.map(item=>item.name)
	return (
		<>
			<ul>
				
				{users.map(item => (
					<li key={item.id}>
						Name:{item.name},
						Lastname:{item.lastName},
						age:{item.age}
					</li>
				))}
			</ul>
		</>
	)
}

export default Section