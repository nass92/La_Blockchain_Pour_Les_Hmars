import React from 'react'
import './HomeSection.css';

function HomeSection({ lightBg, topLine, lightText, lightTextDesc, headline, description, buttonLabel, img, alt, imgStart }) {
  return (
    <>
      <div className={lightBg ? 'home_home-section' : 'home_home-section darkBg'}>
        <div className='container'>
          <div className="row home__home-row"
            style={{ display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row' }}>
            <div className='col'>
              <div className="home__home-text-wrapper">
                <div className="top-line">{topLine}</div>
                <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                <p className={lightTextDesc ? 'home__home-subtitle' : 'home__hero-subtitle dark'}>{description}</p>
              </div>
            </div>
            <div className="col">
              <div className="home__home-img-wrapper">
                <img src={img} alt={alt} className='Home__home-img' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeSection
