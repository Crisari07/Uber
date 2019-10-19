import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/NotFound.scss';

const NotFound = () => (
  <>
    <section className="error-message">
      <section className="error-message__container">
        <h1 className="animated bounce">404</h1>
        <p>Página no encontrada</p>
        <Link to="/">
          <button className="button" type="button">Sácame de aquí</button>
        </Link>
      </section>
    </section>
  </>
);

export default NotFound;
