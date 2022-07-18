import React from 'react';

const html = { width: '95%' }
const react = { width: '70%' }
const js = { width: '75%' }
const css = { width: '95%' }
const bootstrap = { width: '80%' }
const wordpress = { width: '75%' }
const uI = { width: '90%' }
const git = { width: '80%' }


function Skills() {
	return (
		<section className='skills' id='skills'>
			<div className='container'>
				<div className='row'>
					<div className='col-12'>
						<h1 className='title'>Skills</h1>
						<div className='title-bar'></div>
					</div>
					<div className='col-12 col-lg-6'>
						<div className='skills'>
							<div className='skill'>
								<h5 className='skill-title'>HTML5</h5>
								<div className='skill-bar'>
									<div className='skill-progress' style={html} data-progress='95%'></div>
								</div>
							</div>
							<div className='skill'>
								<h5 className='skill-title'>React JS</h5>
								<div className='skill-bar'>
									<div className='skill-progress' style={react} data-progress='60%' ></div>
								</div>
							</div>
							<div className='skill'>
								<h5 className='skill-title'>Javascript</h5>
								<div className='skill-bar'>
									<div className='skill-progress' style={js} data-progress='70%'></div>
								</div>
							</div>
							<div className='skill'>
								<h5 className='skill-title'>CSS3</h5>
								<div className='skill-bar'>
									<div className='skill-progress' style={css} data-progress='80%'></div>
								</div>
							</div>
						</div>
					</div>
					<div className='col-12 col-lg-6'>
						<div className='skills'>
							<div className='skill'>
								<h5 className='skill-title'>Bootstrap</h5>
								<div className='skill-bar'>
									<div className='skill-progress' style={bootstrap} data-progress='80%'></div>
								</div>
							</div>
							<div className='skill'>
								<h5 className='skill-title'>React Native</h5>
								<div className='skill-bar'>
									<div className='skill-progress' style={wordpress} data-progress='75	%'></div>
								</div>
							</div>
							<div className='skill'>
								<h5 className='skill-title'>UI / UX</h5>
								<div className='skill-bar'>
									<div className='skill-progress' style={uI} data-progress='90%'></div>
								</div>
							</div>
							<div className='skill'>
								<h5 className='skill-title'>Git</h5>
								<div className='skill-bar'>
									<div className='skill-progress' style={git} data-progress='80%'></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Skills;