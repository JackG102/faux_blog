import React from 'react';
import BlogPost from './BlogPost';

const BlogList = ({blogPosts}) => {

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
      {renderBlogPosts}
    </div>
  );
};

export default BlogList;