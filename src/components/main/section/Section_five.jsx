import { useState } from 'react';
import Accordion from './Accordion';
import '../../../scss/pages/_section-five.scss';
const accordionData = [
	{
		title: 'Where can I find the application?',
		content: `DrConsult can be downloaded on Apple Store and Google Play
`,
	},
	{
		title: 'Do medical providers pay a fee?',
		content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
    `,
	},
	{
		title: 'Do medical providers pay a fee?',
		content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`,
	},
	{
		title: 'Do medical providers pay a fee?',
		content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`,
	},
	{
		title: 'Do medical providers pay a fee?',
		content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`,
	},
];

const Section_five = () => {
	return (
		<section className="section-five">
			<div className="section-five-flex">
				<div className="title-five">
					<p>FAQ</p>
				</div>
				<div className="acordion">
					{accordionData.map(({ title, content }) => (
						<Accordion title={title} content={content} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Section_five;
