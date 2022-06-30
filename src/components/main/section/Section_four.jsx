import React from 'react';
import imgUno from '../../../img/Frame14.png';
import imgDos from '../../../img/Untitled-4.png';
import '../../../scss/pages/_section-four.scss';
const Section_four = () => {
	return (
		<section className="section">
			<div className="title">
				<p>HOW IT WORKS</p>
			</div>
			<div className="grid">
				<div className="grid-one">
					<img src={imgUno} />
				</div>
				<div className="grid-two">
					<img src={imgDos} />
				</div>
			</div>
		</section>
	);
};

export default Section_four;
