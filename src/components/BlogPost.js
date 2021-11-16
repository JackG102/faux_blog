import React from 'react';

const BlogPost = ({author, body, title, published_date}) => {
  return (
    <div>
      <h2>{title}</h2>
      <span>Written by {author} on {published_date}</span>
      <div dangerouslySetInnerHTML={{ __html: body }}>
      </div>
    </div>
  );
}

export default BlogPost;