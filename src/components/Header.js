import React from 'react';
import Link from './Link';
const Header = () => {
  return (
    <div className="ui three item menu">
      <Link href="/" className="item">Accordion</Link>
      <Link href="/add_blog" className="item">Add Blog</Link>
      <Link href="/about" className="item">About</Link>
    </div>
  );
}

export default Header;