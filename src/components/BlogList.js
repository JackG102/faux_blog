import React, { useState} from 'react';
import BlogPost from './BlogPost';

const BlogList = () => {
  // Fetch JSON data for blog posts and load it into state
  const blogPostsJson = require('../data/blog_data.json');
  const [blogPosts, setBlogPosts] = useState(blogPostsJson);

  const renderBlogPosts = blogPosts.map((blogPost) => {

    return (
      <BlogPost 
        author={blogPost.author} 
        body={blogPost.body}
        title={blogPost.title}
        published_date={blogPost.published_date}
      />
    ); 
  });

  return (
    <div>
      <h2>Blog List</h2>
      {renderBlogPosts}
    </div>
  );
};

export default BlogList;