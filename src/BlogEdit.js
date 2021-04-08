import { useState } from "react";
import ReactMarkdown from "react-markdown";
const gfm = require("remark-gfm");

function BlogEdit(props) {
  const [text, setText] = useState("");

  return (
    <div className="row">
      <div className="col">
        <textarea
          rows="20"
          cols="50"
          onChange={(e) => setText(e.target.value)}
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
