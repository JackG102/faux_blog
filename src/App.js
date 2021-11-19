import React, { useState } from 'react';
import About from './components/About';
import AddBlogForm from './components/AddBlogForm';
import BlogList from './components/BlogList';
import Header from './components/Header';
import Route from './components/Route';

function App() {
  // Fetch JSON data for blog posts and load it into state
  const blogPostsJson = require('./data/blog_data.json');
  const [blogPosts, setBlogPosts] = useState(blogPostsJson);

  return (
    <div className="App ui raised very padded text container segment">
      <h1>Jack's React Blog</h1>
      <Header />
      <Route path="/">
        <BlogList blogPosts={blogPosts}/>
      </Route>
      <Route path="/add_blog">
        <AddBlogForm setBlogPosts={setBlogPosts} blogPosts={blogPosts} />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </div>
  );
}

export default App;
