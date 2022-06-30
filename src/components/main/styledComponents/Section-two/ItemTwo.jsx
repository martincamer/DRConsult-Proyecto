import styled from 'styled-components';

export const ItemTwo = styled.div`
	width: 450px;
	max-height: 100%;
	padding: 60px 50px;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	display: flex;
	gap: 50px;
	border-radius: 10px;
	text-align: center;
	background-color: rgba(212, 212, 212, 0.849);
	cursor: pointer;
	&:hover {
		box-shadow: 10px 10px 15px 0px rgba(212, 212, 212, 0.849);
		transition: all ease 2s;
		transform: scale(1.03);
		background-color: rgba(22, 22, 22, 0.836);
	}
	@media (max-width: 600px) {
		width: 100%;
	}
`;
