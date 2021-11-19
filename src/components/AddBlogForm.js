import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const AddBlogForm = () => {
  const [body, setBody] = useState('')

  const onSubmit = (event, editor) => {
    event.preventDefault();
    console.log(event.target[0].value);
    console.log(event.target[1].value);
    console.log(event.target[2].value);
    console.log(body);
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
            config = {{ height: 500 }}
            data=""
            onReady={ editor => {
                // You can store the "editor" and use when it is needed.
                console.log( 'Editor is ready to use!', editor );
            } }
            onChange={ ( event, editor ) => {
                const data = editor.getData();
                console.log( { event, editor, data } );
                setBody(data);
            } }
            onBlur={ ( event, editor ) => {
                console.log( 'Blur.', editor );
            } }
            onFocus={ ( event, editor ) => {
                console.log( 'Focus.', editor );
            } }
          />
        </div>
        <button type="submit" className="ui primary button">Submit</button>
      </form>
    </div>
  );
}

export default AddBlogForm;