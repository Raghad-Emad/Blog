import React from 'react';

function Experience() {
  return (
    <section className='experience' id='experience'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-lg-6'>
            <h1 className='title'>Experience</h1>
            <div className='title-bar'></div>
            <div className='exp-list'>
              <ul>
                <li>
                  <div className='icon'></div>
                  <span className='time'>2019 – 2022</span>
                  <h5>Data Security Specialist - <span className='place'>Smart Click</span></h5>
                  <p>Egypt</p>
                </li>
                <li>
                  <div className='icon'></div>
                  <span className='time'>2019 – 2020</span>
                  <h5>Front End Developer - <span className='place'>Pause</span></h5>
                  <p>Cairo</p>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-12 col-lg-6'>
            <h1 className='title'>Internship</h1>
            <div className='title-bar'></div>
            <div className='exp-list'>
              <ul>
                <li>
                  <div className='icon'></div>
                  <span className='time'>Mar 2022 - Jul 2022</span>
                  <h5>Front End And Cross Platform Mobile Development - <span className='place'>iti</span></h5>
                  <p>Ismailia</p>
                </li>
                <li>
                  <div className='icon'></div>
                  <span className='time'>Jun 2022 - Mar 2022</span>
                  <h5>Front End Developer - <span className='place'>Algoriza</span></h5>
                  <p>Online</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
