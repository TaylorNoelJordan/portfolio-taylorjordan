import React from 'react';
import headshot from '../../images/tay-shot.jpg';
import './About.css'

const About = () => {
    return (
        <section className='content' id='about'>
        <h2 className='section-heading'>Let me introduce myself...</h2>
        <article className='about-section'>
            <div className='stuff-i-like'>
                <h4>Things I like...</h4>
                <ul>
                    <li>Yoga</li>
                    <li>Hiking</li>
                    <li>Live Music</li>
                    <li>Dancing</li>
                    <li>Dogs</li>
                    <li>Traveling</li>
                    <li>Reading</li>
                    <li>Swimming</li>
                    <li>Lifting Weights</li>
                    <li>Singing</li>
                    <li>Cooking and eating delicious food</li>
                    <li>Family time</li>
                    <li>Meditation</li>
                    <li>Writing</li>
                    <li>Mood Boarding</li>
                </ul>
            </div>
            <p className='about-section-text'>For as long as I can remember, I've been an extremely passionate person. My first love was activism and alternative medicine, 
                to which I devoted ten years as a massage therapist and yoga teacher. Facilitating experiences for my clients and finding 
                creative solutions to chronic injuries, stress, and other ailments fed my soul for a long time. The shift to software engineering 
                might seem strange, but transitioning from one sort of problem-solving to another was seamless. I was born and raised in Colorado 
                with a love for the outdoors, connecting with people, and helping out wherever I can. My work in the wellness industry focused on 
                helping people live longer, better lives, and my goal is contribute the same compassionate tenacity to the world of tech.
            </p>
            <img src={headshot} alt='headshot' className='headshot'/>
        </article>
        </section>
    )
}

export default About;