import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import '../../../scss/pages/_section-five.scss';
const Accordion = ({ title, content }) => {
	const [isActive, setIsActive] = useState(false);

	return (
		<div className="accordion-item">
			<div className="accordion-title" onClick={() => setIsActive(!isActive)}>
				<div className='title-color'>{title}</div>
				<div>
					{isActive ? (
						<AiOutlineMinus className="buttonEdit" />
					) : (
						<AiOutlinePlus className="buttonEdit" />
					)}
				</div>
			</div>
			{isActive && <div className="accordion-content">{content}</div>}
		</div>
	);
};

export default Accordion;
