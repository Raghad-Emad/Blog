import React from 'react';
import Typical from 'react-typical';
import slider from '../img/hero.gif';
import logo from '../img/logo.png';


function Home() {
  return (
    <header>
      <div className='container'>
        <nav className='navbar navbar-expand-lg navbar-light bg-nav'>
          <div className='container-fluid'>
            <div>
              <img src={logo} width={5} height={35} />
            </div>
            <a className='navbar-brand' href='#'>Raghad</a>
            <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon'>
                <i className='uil uil-list-ul'></i>
              </span>
            </button>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
              <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                <li className='nav-item'>
                  <a className='nav-link' href='#home'><i className='uil uil-estate'></i> Home </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#about'><i className='uil uil-user'></i> About</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#experience'><i className='uil uil-bag-alt'></i> Experience</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#skills'><i className='uil uil-react'></i> Skills</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#portfolio'><i className='uil uil-window-grid'></i> Portfolio</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#contact'><i className='uil uil-calling'></i> Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className='row'>
          <div className='col-12 col-lg-6 hero-content'>
            <div className='d-flex'>
              <h4 className='animate__animated animate__bounceInDown'>Hi, I'm Raghad Emad </h4>
              <h4 className='hi'>👋</h4>
            </div>
            {" "}
            <h1 className='animate__animated animate__bounceInLeft'>
              {" "}
              <Typical
                loop={Infinity}
                steps={[
                  "React Developer",
                  1000,
                  "Web Developer",
                  1000,
                ]}
              />
            </h1>
            <p className='pt-10 animate__animated animate__bounceInRight'>
              A passionate Web Developer having experience in building Web Applications and Websites with user-friendly...
            </p>
            <a href='#about' className='learn-more animate__animated animate__bounceInUp'>
              <span className='circle' aria-hidden='true'>
                <span className='icon arrow'></span>
              </span>
              <span className='button-text'>Read More</span>
            </a>
          </div>
          <div className='col-12 col-lg-6'>
            <div className='hero-img animate__animated animate__bounceInDown fadeOutUpBig'>
              <img src={slider} alt='Raghad Web Developer' />
            </div>
          </div>
        </div>
      </div >
    </header >
  );
}

export default Home;
