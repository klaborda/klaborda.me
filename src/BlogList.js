import React from "react";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { Link } from "react-router-dom";
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
  const { data } = useQuery(FEED_QUERY);

  return (
    <div className="d-flex flex-column justify-content-around">
      {data &&
        data.feed.map((post) => {
          return (
            <>
              <Link to={"/blog/" + post?.id} className="text-muted">
                <small key={post?.id} className="p-1">
                  Thoughts from {post?.author?.name || "Unknown"} on{" "}
                  <Moment format="YYYY/MM/DD">{post?.createdAt}</Moment>
                </small>
              </Link>
              <div className="px-2">
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
