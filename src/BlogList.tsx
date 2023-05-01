import React from "react";
import ReactMarkdown from "react-markdown";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import remarkGfm from "remark-gfm";

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

interface BlogPost {
  id: string;
  createdAt: Date;
  title: string;
  body: string;
  author: {
    name: string;
  };
}

function BlogList() {
  const { data } = useQuery(FEED_QUERY);

  return (
    <div className="d-flex flex-column justify-content-around">
      {data &&
        data.feed.map((post: BlogPost) => {
          const formattedDate = format(post.createdAt, "YYYY/MM/DD");
          return (
            <>
              <Link to={"/blog/" + post?.id} className="text-muted">
                <small key={post?.id} className="p-1">
                  Thoughts from {post?.author?.name || "Unknown"} on{" "}
                  {formattedDate}
                </small>
              </Link>
              <div className="px-2">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  children={post?.body}
                ></ReactMarkdown>
              </div>
            </>
          );
        })}
      {!data && <b>No blog posts available at this time</b>}
    </div>
  );
}

export default BlogList;
