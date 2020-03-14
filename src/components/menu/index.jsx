import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Menu = () => (
  <>
    <aside className="menu menu-container">
      <div className="menu menu-item"><Link to="/">Todos</Link></div>
      <hr />
      <div className="menu menu-item"><Link to="/">Exclusivos</Link></div>
      <hr />
      <div className="menu menu-item"><Link to="/">Promoção</Link></div>
      <hr />
      <div className="menu menu-item"><Link to="/">Favoritos</Link></div>
      <hr />
    </aside>
  </>
);

export default Menu;
