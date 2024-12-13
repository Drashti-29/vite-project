import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#f0f0f0', marginBottom: '20px' }}>
      <Link to="/" style={{ marginRight: '20px' }}>Home</Link>
      <Link to="/ArtistList" style={{ marginRight: '20px' }}>Artists</Link>
      <Link to="/ArtworkList">Artworks</Link>
    </nav>
  );
};

export default Nav;