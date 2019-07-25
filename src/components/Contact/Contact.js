import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
    <section className='content' id='contact'>
        <h2>Get in touch with me...</h2>
        <article className='contact-info'>
            <h3>Email:<a href='mailto:taylornoel418@icloud.com' target="_blank">taylornoel418@icloud.com</a></h3>
            <h3>Call: <a href='tel:+017202613630'>720-261-3630</a></h3>
            <h3>LinkedIn:<a href='https://www.linkedin.com/in/taylornoeljordan/' target="_blank">/taylornoeljordan</a></h3>
            <h3>Twitter:<a href='https://twitter.com/leCodingUnicorn' target="_blank">@leCodingUnicorn</a> </h3>
            <h3>GitHub:<a href='https://github.com/TaylorNoelJordan'>/TaylorNoelJordan</a></h3>
        </article>
    </section>
    )
}

export default Contact;