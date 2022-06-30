import React from 'react';
import logoimg from '../../img/logo-header.png';
import '../../scss/pages/_header.scss';
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { useState } from 'react';
const Navbar = () => {
	const [Click, setClick] = useState(false);

	return (
		<nav className="nav">
			<div className="nav-uno">
				<div className="logo">
					<a>
						<img src={logoimg} />
					</a>
				</div>

				<div className="nav-dos">
					<ul>
						<li>
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#">Our Mission</a>
						</li>
						<li>
							<a href="#">Features</a>
						</li>
						<li>
							<a href="#">How it Works</a>
						</li>

						<li>
							<a href="#">FAQ</a>
						</li>

						<li>
							<a href="#">Contact Us</a>
						</li>
					</ul>
				</div>
				<div className="nav-register">
					<a href="#">Sign In</a>
					<a href="#">Register</a>
				</div>

				<div
					className="button"
					onClick={() => {
						setClick(!Click);
					}}
				>
					{Click ? <FiMenu className="hover" /> : <MdClose className="hover" />}
				</div>

				<div className={Click ? 'navigation-menu' : 'noclick'}>
					<ul>
						<li>
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#">Our Mission</a>
						</li>
						<li>
							<a href="#">Features</a>
						</li>
						<li>
							<a href="#">How it Works</a>
						</li>

						<li>
							<a href="#">FAQ</a>
						</li>

						<li>
							<a href="#">Contact Us</a>
						</li>
						<div className="nav-register-dos">
							<a href="#">Sign In</a>
							<a href="#">Register</a>
						</div>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
