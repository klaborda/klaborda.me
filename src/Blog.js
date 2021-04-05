import { useState } from "react";
import ReactMarkdown from "react-markdown";
const gfm = require("remark-gfm");

function Blog(props) {
  const [text, setText] = useState("");

  return (
    <div className="row">
      <div className="col">
        <textarea
          rows="10"
          cols="50"
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>
      <div className="col">
        <ReactMarkdown plugins={[gfm]}>{text}</ReactMarkdown>
      </div>
    </div>
  );
}

export default Blog;
