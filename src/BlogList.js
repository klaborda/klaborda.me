import React from "react";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { useQuery, gql } from "@apollo/client";
const gfm = require("remark-gfm");

const FEED_QUERY = gql`
  {
    feed(orderBy: { createdAt: desc }) {
      id
      createdAt
      title
      body
      author {
        name
      }
    }
  }
`;

function BlogList() {
  const posts = [
    {
      id: "3",
      createdAt: "2021-04-20T05:01:54.944Z",
      title: "Third Post",
      body: "# Third Post\n\nWeeee\n\nDoes this actually work? ```test```",
      author: {
        name: "Kevin",
      },
    },
  ];

  const { data } = useQuery(FEED_QUERY);

  return (
    <div>
      {data &&
        data.feed.map((post) => {
          return (
            <>
              <small key={post?.id}>
                Thoughts from {post?.author?.name || "Unknown"} on{" "}
                <Moment format="YYYY/MM/DD">{post?.createdAt}</Moment>
              </small>
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
