import React from 'react';

function Testimonial() {
  return (
    <article className='testimonial-container'>
      <img className='testimonial-image' src={require('../images/testimonial-emma.png')} alt="Emma" />
      <section className="testimonial-text-container">
        <p className="testimonial-name">Emma Bostian en Suecia</p>
        <p className="testimonial-work-position">Ingeniera de Software es Spotify</p>
        <p className="testimonial-text">"Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Exercitationem eos non eum optio vel libero perferendis blanditiis rerum, officia saepe esse!
         Assumenda ipsam nostrum ea ex incidunt ipsa accusantium rem."</p>
      </section>
    </article> 
  );
}

export default Testimonial;