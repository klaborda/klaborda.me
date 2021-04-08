import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { useDebouncedCallback } from 'use-debounce';
const gfm = require("remark-gfm");

function BlogEdit(props) {
  const [text, setText] = useState("");

  const debounced = useDebouncedCallback(
    // function
    (value) => {
      setText(value);
    },
    // delay in ms
    1000
  );

  return (
    <div className="row">
      <div className="col">
        <textarea
          rows="20"
          cols="50"
          onChange={(e) => debounced(e.target.value)}
        ></textarea>
      </div>
      <div className="col">
        <ReactMarkdown
          plugins={[gfm]}
          children={text}
        ></ReactMarkdown>
      </div>
    </div>
  );
}

export default BlogEdit;
