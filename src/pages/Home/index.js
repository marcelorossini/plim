import React from 'react';
import './style.css';
import home from '../../assets/home.svg';

export default () => {
  return (
    <div className="home">
      <h1>Soluções Criativas</h1>
      <p>
        Fusce ut ante ultrices, cursus purus vel, congue velit. Nam in rutrum arcu. Sed id massa a leo
        rutrum
        accumsan eget id mauris. Fusce vitae egestas felis. Nunc molestie urna ex, sit amet facilisis
        lorem
        varius aliquet. Aliquam erat volutpat. Integer eget ultricies mauris, quis vestibulum metus.
      </p>
      <button>SAIBA MAIS</button>
      <img className="image" src={home} />
    </div>
  );
}
