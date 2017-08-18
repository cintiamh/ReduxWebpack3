import React from 'react';
import { Link } from 'react-router-dom';

const App = (props) => {
  return (
    <div>
      <div className="ui fixed inverted menu">
        <h1 className="header item">All Things Westies</h1>
        <Link to="/products" className="item">Products</Link>
        <Link to="/cart" className="item">Cart</Link>
        <Link to="/profile" className="item">Profile</Link>
      </div>
      <div className="ui main text container">
        Content Placeholder
      </div>
    </div>
  );
};

export default App;
