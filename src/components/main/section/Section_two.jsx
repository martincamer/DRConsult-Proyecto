import { Box, Container, Stack } from '@mui/material';
import '../../../scss/pages/_section-two.scss';
const Section_two = () => {
	return (
		<section>
			<Box sx={{ width: '100', height: '100', padding: '50px 0px' }}>
				<Container>
					<Stack
						direction="column"
						justifyContent="center"
						alignItems="center"
						spacing={4}
						textAlign={'center'}
					>
						<div className="title__mission">
							<h2>Our Mission</h2>
						</div>

						<div className="parrafo__mission">
							<p>
								Missed appointments cost astronomical sums of the healthcare{' '}
								<br />
								system each year.
							</p>
						</div>

						<div className="parrafo__subMission">
							<p>
								Many patients feel frustrated in finding and securing medical
								appointments. DrConsult is here to bridge between medical
								professionals and users by integrating a seamless application.
								You can now book, chat, and consult with a provider
							</p>
						</div>
					</Stack>
				</Container>
			</Box>
		</section>
	);
};

export default Section_two;
