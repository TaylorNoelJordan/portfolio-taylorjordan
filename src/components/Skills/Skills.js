import React from 'react';
import './Skills.css'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const jsLogo = 'https://images.vexels.com/media/users/3/166403/isolated/preview/a5a33bf3004830a2bd581e9fa65de660-javascript-programming-language-icon-by-vexels.png'
const jQuerylogo = 'http://pluspng.com/img-png/jquery-png--512.png'
const SASSlogo = 'https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg';
const mochaChaiLogo = 'https://res.cloudinary.com/practicaldev/image/fetch/s--GIj9JnRv--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://cdn-images-1.medium.com/max/1600/1%2ACrB6isZN6YXeM1rWmnjxHw.png';
const reactReduxLogo = 'https://sledsworth.gallerycdn.vsassets.io/extensions/sledsworth/react-redux-es6-snippets/0.5.3/1530106605209/Microsoft.VisualStudio.Services.Icons.Default';
const jestEnzymeLogo = 'https://miro.medium.com/max/1838/1*hIG-PnN4bjIc-PeEaayM0w.png';

const Skills = () => {
    const responsive = {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        800: {
            items: 2
        }
    };

    const handleOnDragStart = e => e.preventDefault();
    return (
        <section className='skills content' id='skills'>
        <h2 className='section-heading'>This is what I do...</h2>
            <AliceCarousel 
            mouseDragEnabled
            duration={500}
            responsive={responsive}
            autoPlayInterval={2000}
            autoPlayDirection="rtl"
            autoPlay={true}
            fadeOutAnimation={true}
            mouseDragEnabled={true}
            playButtonEnabled={true}
            disableAutoPlayOnAction={true}
            >
                <img src={jsLogo} onDragStart={handleOnDragStart} className='skills-logo'/>
                <img src={jQuerylogo} onDragStart={handleOnDragStart} className='skills-logo'/>
                <img src={SASSlogo} onDragStart={handleOnDragStart} className='skills-logo'/>
                <img src={mochaChaiLogo} onDragStart={handleOnDragStart} className='skills-logo'/>
                <img src={reactReduxLogo} onDragStart={handleOnDragStart} className='skills-logo'/>
                <img src={jestEnzymeLogo} onDragStart={handleOnDragStart} className='skills-logo'/>
            </AliceCarousel>
        </section>
    )
}

export default Skills;