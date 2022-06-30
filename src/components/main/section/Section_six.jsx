import React, { useState } from 'react';
import {
	FaFacebook,
	FaInstagram,
	FaTwitter,
	FaLinkedin,
	FaEnvelope,
	FaYoutube,
} from 'react-icons/fa';
import styled from 'styled-components';
import '../../../scss/pages/_section-six.scss';
import ModalFormulario from './ModalFormulario';
const Section_six = () => {
	const [abrir, setCerrar] = useState(false);

	return (
		<section>
			<div className="section__contact">
				<header className="header__contact">
					<div className="title__contact">
						<h4>CONTACT US</h4>
					</div>
					<div className="redes__icons">
						<FaFacebook className="icon-facebook hover-icons" />
						<FaInstagram className="icon-instagram hover-icons" />
						<FaLinkedin className="icon-linkedin hover-icons" />
						<FaTwitter className="icon-twitter hover-icons" />
						<FaYoutube className="icon-youtube hover-icons" />
						<FaEnvelope className="icon-envelope hover-icons" />
					</div>
				</header>
				<form className="formulario">
					<div className="primer-track">
						<div className="first__name">
							<label placeholder="First Name">First Name</label>
							<input />
						</div>
						<div className="last__name">
							<label required type="text" placeholder="Last Name">
								Last Name
							</label>
							<input />
						</div>
					</div>

					<div className="segundo-track">
						<div className="first__name">
							<label>Phone No</label>
							<input />
						</div>
						<div className="last__name">
							<label>Email</label>
							<input />
						</div>
					</div>

					<div className="tercer-track">
						<div className="contact">
							<label>Contact Reason</label>
							<input />
						</div>
					</div>

					<div className="tercer-track">
						<div className="text-area">
							<label>Message</label>
							<textarea>contact reason</textarea>
						</div>
					</div>

					<div className="btn-enviar">
						<Button onClick={() => setCerrar(!abrir)}>SEND</Button>
					</div>
				</form>

				<ModalAbsolute>
					{abrir ? (
						<ModalFormulario>
							<ButtonDos onClick={() => setCerrar(!abrir)}>Aceptar</ButtonDos>
						</ModalFormulario>
					) : (
						setCerrar
					)}
				</ModalAbsolute>
			</div>

			<div className="copyright">
				<p>@all copyright by Martin Camer</p>
			</div>
		</section>
	);
};

export default Section_six;
export const ModalAbsolute = styled.div`
	margin: 0 auto;
	display: flex;
	justify-content: center;
	width: 100%;
	position: absolute;
	right: 10px;
	top: 20%;
	z-index: 1;
	animation: animate 3s;
	@keyframes animate {
		0% {
			transform: translateX(-1000px);
			transition: all 0.3s;
		}

		100% {
			transform: translateX(0px);
			transition: all 0.3s;
		}
	}
`;
export const Button = styled.a`
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

export const ButtonDos = styled.button`
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
