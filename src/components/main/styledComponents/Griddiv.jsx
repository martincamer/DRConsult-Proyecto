import styled from 'styled-components';

export const Item = styled.div`
	max-width: 58rem;
	width: 100%;
	max-height: 100%;
	height: 90vh;
	background-color: #be1e2d;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 60px;
	padding: 100px 0px;
	text-align: center;

	@media (max-width: 1000px) {
		height: 100%;
	}
`;
