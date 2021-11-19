import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const AddBlogForm = ({ blogPosts, setBlogPosts }) => {
  const [body, setBody] = useState('')

  const onSubmit = (event) => {
    event.preventDefault();
    const blogPost = {};
    setBlogPosts([...blogPosts, blogPost]);
  }

  return (
    <div>
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label forHTML="title">Title</label>
          <input name="title " type="text" />
        </div>
        <div className="field">
          <label forHTML="author">Author</label>
          <input name="author" type="text" />
        </div>
        <div className="field">
          <label forHTML="published_date">Date Published</label>
          <input name="published_date" type="text" />
        </div>
        <div className="field">
          <label>Body</label>
          <CKEditor
            editor={ ClassicEditor }
            config = {{ 
              height: 500,
              mediaEmbed: {
                previewsInData: true
              }
            }} 
            data=""
            onReady={ editor => {
                // You can store the "editor" and use when it is needed.
            } }
            onChange={ ( event, editor ) => {
                const data = editor.getData();
                setBody(data);
            } }
          />
        </div>
        <button type="submit" className="ui primary button">Submit</button>
      </form>
    </div>
  );
}

export default AddBlogForm;