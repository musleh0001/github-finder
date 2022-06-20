import React from "react";

const About = () => {
	return (
		<div>
			<h1 className="text-6xl mb-4">Github Finder</h1>
			<p className="mb-4 text-2xl font-light">A React app to search Github profiles and see profile details.</p>
			<p className="text-lg text-gray-400">
				Version <span className="text-white">1.0.0</span>
			</p>
			<p className="text-lg text-gray-400">
				Design By:{" "}
				<a href="https://twitter.com/musleh_x_khan" target="_blank" className="text-white">
					Md Musleh Uddin
				</a>
			</p>
		</div>
	);
};

export default About;
