import React from 'react';
import aboutImg from '../../images/011-wig.svg';
import skillsImg from '../../images/004-necklace.svg';
// import blogImg from '../../images/010-writing.svg';
import projectsImg from '../../images/002-disco-ball.svg';
import contactImg from '../../images/006-envelope.svg';

const NavBar = () => {
    return (
        <nav className='nav-bar'>
        <a href='#about' className='nav-link'><img src={aboutImg} alt='' className='icon'/>About</a>
        <a href='#skills' className='nav-link'><img src={skillsImg} alt='' className='icon'/>Skills</a>
        <a href='#projects' className='nav-link'><img src={projectsImg} alt='' className='icon'/>Projects</a>
        {/* <a href='#blogs' className='nav-link'><img src={blogImg} alt='' className='icon'/>Blog</a> */}
        <a href='#contact' className='nav-link'><img src={contactImg} alt='' className='icon'/>Contact</a>
        <a href='back-to-top' className='nav-link top'>△ Top</a>
    </nav>
    )
}

export default NavBar;