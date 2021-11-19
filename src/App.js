import React, { useState } from 'react';
import BlogList from './components/BlogList';
import Header from './components/Header';

function App() {
  // Fetch JSON data for blog posts and load it into state
  const blogPostsJson = require('./data/blog_data.json');
  const [blogPosts, setBlogPosts] = useState(blogPostsJson);
  
  return (
    <div className="App">
      <Header />
      <BlogList blogPosts={blogPosts}/>
    </div>
  );
}

export default App;
