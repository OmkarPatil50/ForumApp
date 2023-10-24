import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "..";

export function PostCard({ userPost }) {
  const { state, dispatch } = useContext(AppContext);
  const {
    postId,
    username,
    name,
    picUrl,
    post,
    postDescription,
    upvotes,
    downvotes,
    tags,
    createdAt,
    comments,
    isBookmarked
  } = userPost;

  const formatDate = (date) => {
    const newDate = new Date(date);
    return newDate.toDateString();
  };
  return (
    <div className="post-card">
      <section className="votes-section">
        <button
          onClick={() => dispatch({ type: "UPVOTE", payload: postId })}
          className="upvote-btn"
        >
          <i className="fa-solid fa-caret-up"></i>
        </button>
        <p className="vote-count">{upvotes - downvotes}</p>
        <button
          onClick={() => dispatch({ type: "DOWNVOTE", payload: postId })}
          className="downvote-btn"
        >
          <i className="fa-solid fa-caret-down"></i>
        </button>
      </section>
      <section className="user-post">
        <header className="post-header">
          <img src={picUrl} alt="dp" className="avatar-image-nav" />
          <p className="post-header-details">
            Posted by <span>@{username}</span>
          </p>
          <p className="post-header-details">* {formatDate(createdAt)}</p>
        </header>
        <h3 className="post-heading">{post}</h3>
        <ul className="tags-list">
          {tags?.map((tag, index) => {
            return (
              <li key={index} className="tags-list-item">
                {tag}
              </li>
            );
          })}
        </ul>
        <p className="post-content">{postDescription}</p>
        <div className="btn-section">
          <Link to={`/post/${postId}`} className="btn-post">
            <i className="fa-regular fa-comment"></i>
          </Link>
          <div className="btn-post">
            <i className="fa-solid fa-share-nodes"></i>
          </div>
          <div
            className="btn-post"
            onClick={() => dispatch({ type: "BOOKMARK_POST", payload: postId })}
            style={{ color: isBookmarked ? "#4f46e5" : "#2f4f4f" }}
          >
            <i
              className={`fa-${isBookmarked ? "solid" : "regular"} fa-bookmark`}
            ></i>
          </div>
        </div>
      </section>
    </div>
  );
}
