import React from 'react';
import './Home.css';
import office from '../../images/alesia-kazantceva-iYoAPaSPBKI-unsplash.jpg';

const Home = () => {
    return (
        <section className='home-page' id="home">
            <img src={office} alt='sunny work space with plant and laptop' className='main-pic'/>
            <h1 className='intro-heading'>Taylor Noel Jordan</h1>
        </section>
    )
}



export default Home;