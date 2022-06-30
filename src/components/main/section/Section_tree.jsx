import { Container, Grid } from '@mui/material';
import { ItemTwo } from '../styledComponents/Section-two/ItemTwo';
import imgUno from '../../../img/Vector.png';
import imgDos from '../../../img/Vector1.png';
import imgTres from '../../../img/Vector2.png';
import '../../../scss/pages/_section-tree.scss';
const Section_tree = () => {
	return (
		<section className="section-tree">
			<div className="title__tree">
				<p>
					<span>F</span>eatures
				</p>
			</div>
			<div className="grid">
				<ItemTwo>
					<div className="itemTwoImg">
						<img className="img_two" src={imgTres} />
					</div>

					<div className="itemTitleTwo">
						<p>Availability</p>
					</div>

					<div className="itemParrafoTwo">
						<p>
							We offer a variety <br /> of doctors for your needs
						</p>
					</div>
				</ItemTwo>

				<ItemTwo>
					<div className="itemTwoImg">
						<img className="img_two" src={imgDos} />
					</div>

					<div className="itemTitleTwo">
						<p>Consult</p>
					</div>

					<div className="itemParrafoTwo">
						<p>
							You can chat with a doctor <br /> before and after your
							appointment
						</p>
					</div>
				</ItemTwo>

				<ItemTwo>
					<div className="itemTwoImg">
						<img className="img_two" src={imgUno} />
					</div>

					<div className="itemTitleTwo">
						<p>Book</p>
					</div>

					<div className="itemParrafoTwo">
						<p>
							Patients can easily book their <br /> consultations and
							appointments.
						</p>
					</div>
				</ItemTwo>
			</div>
		</section>
	);
};

export default Section_tree;
