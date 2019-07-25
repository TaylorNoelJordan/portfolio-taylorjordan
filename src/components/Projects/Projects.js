import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import './Projects.css'
import checkYoSelf from '../../images/checkyoself.png';
import fitLit from '../../images/fitlit.png';
import lightSide from '../../images/lightside.png';
import movieTracker from '../../images/movietracker.png';

const Projects = () => {
    const handleOnDragStart = e => e.preventDefault();

  return (
        <section id='projects' className='projects-content content'>
        <h2>Projects I've worked on...</h2>
            <AliceCarousel 
            mouseDragEnabled
            duration={1500}
            autoPlayInterval={2000}
            autoPlayDirection="rtl"
            autoPlay={true}
            fadeOutAnimation={true}
            mouseDragEnabled={true}
            playButtonEnabled={true}
            disableAutoPlayOnAction={true}
            >
            <article className='project-display' onDragStart={handleOnDragStart}>
                <img src={checkYoSelf} className='project-image'/>
                <div className='project-description'>
                    <h3 className='project-title'>Check Yo' Self</h3>
                    <p>Handy To-do list app where a user can make lists, check off tasks, and organize by urgency.</p>
                    <h3 className='project-title'>Built with:</h3>
                    <ul className='tech-list'>
                        <li>HTML5</li>
                        <li>CSS</li>
                        <li>Vanilla JS</li>
                    </ul>
                </div>
            </article>
            <article className='project-display' onDragStart={handleOnDragStart}>
                <img src={fitLit} className='project-image'/>
                <div className='project-description'>
                    <h3 className='project-title'>FitLit</h3>
                    <p>FitLit is a fitness application that tracks a user's sleep, activity, and hydration. They can set daily goals, find averages, and compete with friends!</p>
                    <h3 className='project-title'>Built with:</h3>
                    <ul className='tech-list'>
                        <li>Semantic HTML5</li>
                        <li>CSS</li>
                        <li>ES6 JS</li>
                        <li>jQuery</li>
                        <li>Tested with Mocha & Chai</li>
                    </ul>
                </div>
            </article>
            <article className='project-display' onDragStart={handleOnDragStart}>
                <img src={lightSide} className='project-image'/>
                <div className='project-description'>
                    <h3 className='project-title'>Light Side</h3>
                    <p>This application allows a user to view and favorite characters, ships and planets from the StarWars universe.</p>
                    <h3 className='project-title'>Built with:</h3>
                    <ul className='tech-list'>
                        <li>React</li>
                        <li>React Router</li>
                        <li>Sass/SCSS</li>
                        <li>JSX</li>
                        <li>AJAX</li>
                        <li>Tested with Jest & Enzyme</li>
                    </ul>
                </div>
            </article>
            <article className='project-display' onDragStart={handleOnDragStart}>
                <img src={movieTracker} className='project-image'/>
                <div className='project-description'>
                    <h3 className='project-title'>Movie Tracker</h3>
                    <p>Movie Tracker allows a user to track and favorite movies now in theaters. With creation of an account, the user can revisit their stored information.</p>
                    <h3 className='project-title'>Built with:</h3>
                    <ul className='tech-list'>
                        <li>React</li>
                        <li>React Router</li>
                        <li>Redux</li>
                        <li>Sass/SCSS</li>
                        <li>AJAX</li>
                        <li>JSX</li>
                        <li>Tested with Jest & Enzyme</li>
                    </ul>
                </div>
            </article>
            </AliceCarousel>
        </section>
    )
}

export default Projects;