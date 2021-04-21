import React from "react";
import ReactMarkdown from "react-markdown";
const gfm = require("remark-gfm");

function BlogList() {
  const posts = [
    {
      id: "3",
      createdAt: "2021-04-20T05:01:54.944Z",
      title: "Third Post",
      body: "# Third Post\n\nWeeee",
      author: {
        name: "Kevin",
      },
    },
  ];

  return (
    <div>
      {posts &&
        posts.map((post) => {
          return (
            <>
              <small key={post?.id}>Thoughts from {post?.author?.name}</small>
              <div>
                <ReactMarkdown
                  plugins={[gfm]}
                  children={post?.body}
                ></ReactMarkdown>
              </div>
            </>
          );
        })}
    </div>
  );
}

export default BlogList;
