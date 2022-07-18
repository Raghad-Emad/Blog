import React from 'react';
import blog from '../img/blog.png';
import fetch from '../img/fetch_api.png';
import exam from '../img/exam.png';



function Portfolio() {
	return (
		<section className='portfolio ' id='portfolio'>
			<div className='container'>
				<div className='row'>
					<div className='col-12'>
						<h1 className='title'>Portfolio</h1>
						<div className='title-bar'></div>
					</div>
					<div className='row'>
						<div className='col-12 col-lg-6'>
							<div className='card mt-20'>
								<img src={blog} className='card-img-top' alt='Blog' />
								<div className='card-body'>
									<h5 className='card-title'>Blog</h5>
									<a href='https://blog-raghad-emad.vercel.app/' target='_blank' rel="noreferrer" className='btn btn-primary'><i className='uil uil-link'></i> Demo</a>
								</div>
							</div>
						</div>
						<div className='col-12 col-lg-6'>
							<div className='card mt-20'>
								<img src={fetch} className='card-img-top' alt='Fetch Api' />
								<div className='card-body'>
									<h5 className='card-title'>Fetch Api</h5>
									<a href='https://github.com/Raghad-Emad/fetch_api' target='_blank' rel="noreferrer" className='btn btn-primary'><i className='uil uil-link'></i> Demo</a>
								</div>
							</div>
						</div>
						<div className='col-12 col-lg-6'>
							<div className='card mt-20'>
								<img src={exam} className='card-img-top' alt='Examination System' />
								<div className='card-body'>
									<h5 className='card-title'>Examination System</h5>
									<a href='https://github.com/Raghad-Emad/Examination-System' target='_blank' rel="noreferrer" className='btn btn-primary'><i className='uil uil-link'></i> Demo</a>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</section>
	);
}

export default Portfolio;