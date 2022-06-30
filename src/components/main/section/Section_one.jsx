import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import { Item } from '../styledComponents/Griddiv';
import storeUno from '../../../img/playsote1.png';
import storeDos from '../../../img/playsote21.png';
import Button from '@mui/material/Button';
import headerImg from '../../../img/Header-Section.png';
import '../../../scss/pages/_section-one.scss';
import { ItemDos } from '../styledComponents/Section-One/GriddivDos';

const Section_one = () => {
	return (
		<div>
			<Box sx={{ width: '100' }}>
				<Grid
					rowSpacing={5}
					columnSpacing={{ xs: 1, sm: 2, md: 4 }}
					justifyContent="center"
					alignItems="center"
					container
				>
					<Grid item xs={12} md={12} lg={8}>
						<Item>
							<div className="intro__title">
								<p>
									Are you a patient that <br /> needs doctor’s attention?
								</p>
							</div>
							<div className="intro__subtitle">
								<p>Download DrConsult and book your appointment today.</p>
							</div>
							<div className="button__flex">
								<Button href="#text-buttons">
									<img className="button_scale" src={storeUno} />
								</Button>

								<Button href="#text-buttons">
									<img className="button_scale" src={storeDos} />
								</Button>
							</div>
						</Item>
					</Grid>
					<Grid item xs={12} md={12} lg={4}>
						<ItemDos>
							<img src={headerImg} />
						</ItemDos>
					</Grid>
				</Grid>
			</Box>
		</div>
	);
};

export default Section_one;
