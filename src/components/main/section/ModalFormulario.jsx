import React, { useState } from 'react';
import styled from 'styled-components';

const ModalFormulario = ({ children }) => {
	const [aceptar, setAceptar] = useState(false);

	return (
		<Modal>
			<div>
				<TitleModal>Genial el Formulario a sido Enviado!</TitleModal>
			</div>
			<div>{children}</div>
		</Modal>
	);
};

export default ModalFormulario;

export const Modal = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 20px;
	background-color: rgba(201, 200, 200, 0.822);
	padding: 30px 30px;
	border-radius: 10px;
	width: 600px;
	height: 400px;
	z-index: 1;
	@media screen and (max-width: 1160px) {
		width: 60%;
	}
`;

export const TitleModal = styled.p`
	color: rgb(255, 255, 255);
	font-size: 20px;
	background-color: rgba(0, 0, 0, 0.589);
	padding: 10px 10px;
	box-shadow: 5px 5px 13px 0px rgba(201, 200, 200, 0.637);
`;

export const Button = styled.button`
	text-decoration: none;
	color: rgb(190, 30, 45);
	background-color: rgb(255, 255, 255);
	border: none;
	border-radius: 20px;
	padding: 10px 28px;
	font-size: 18px;
	cursor: pointer;
	&:hover {
		background-color: rgba(0, 0, 0, 0.836);
		color: rgb(255, 255, 255);
		box-shadow: 5px 5px 3px 0px rgba(201, 200, 200, 0.637);
		transition: all ease 0.8s;
	}
`;

// $color-red: rgb(190, 30, 45);
// $color-blanco: rgb(255, 255, 255);
// $color-negro: rgba(0, 0, 0, 0.836);
