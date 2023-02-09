import React from 'react'
import './footer.css'

const Footer = () => {
	return (
		<footer>
			<div class="waves">
				<div class="wave" id="wave1"></div>
			</div>
			{/* <ul class="social">
				<li><a href="#"></a></li>
				<li><a href="#"></a></li>
				<li><a href="#"></a></li>
				<li><a href="#"></a></li>
			</ul> */}
			<ul class="menu">
				<li><a href="#">Home</a></li>
				<li><a href="#">About</a></li>
				<li><a href="#">Services</a></li>
				<li><a href="#">Team</a></li>
				<li><a href="#">Contact</a></li>
			</ul>
			<p>©2021 Online Tutorials | All Rights Reserved</p>
		</footer>
	)
}

export default Footer