import React from 'react';

const Header = () => {
  return (
    <div className="ui three item menu">
      <a href="/" className="item active">Blog</a>
      <a href="/add_blog" className="item">Add Blog</a>
      <a href="/" className="item">About</a>
    </div>
  );
}

export default Header;