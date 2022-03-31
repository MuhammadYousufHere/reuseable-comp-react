import React from "react";
import "./CommentPost.scss";
import Avatar from "./../../assets/Avatar-1.png";

const CommentPost = (props) => {

  const { author, timeAgo, comment } = props;

  return (
    <React.Fragment>
      <div className="container">
        <div className="avatar-det">
          <a href="/">
            <img src={Avatar} alt="img" />
          </a>
          <div className="comment-sec-data">
            <a href="/">
              <h3>{author}</h3>
            </a>
            <span>{timeAgo}</span>
            <p>{comment}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );

}
export default CommentPost;
