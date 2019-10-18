import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';
import '../assets/styles/components/Header.scss';

import logo from '../assets/static/cuber-logo.png';
import userIcon from '../assets/static/user-icon.png';

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  };

  return (
    <header className="header">
      <Link to="/">
        <img className="header__img" src={logo} alt="Cuber" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--options">
          <button className="button" type="button">
            <Link to="/login">
            Iniciar sesión
            </Link>
          </button>
          <button className="button" type="button">
            <Link to="/register">
            Regístrate
            </Link>
          </button>
        </div>
        {hasUser ? (
        <div className="header__menu--profile">          
          <>
          <img src={gravatar(user.email)} alt={user.email} /> <p>Perfil</p>
          </>         						          
        </div>
         ) : null }
        <ul>
          {hasUser ? (
            <li><a href="/">{user.name}</a></li>
          ) : (
            null
          )}

          {hasUser ? (            
            <li><a href="#logout" onClick={handleLogout}>Cerrar Sesión</a></li>
          ) : (
            <li>
              <Link to="/login">
              Iniciar Sesión
              </Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
