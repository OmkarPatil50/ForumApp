import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AppContext } from "..";
import { CommentCard } from "../Components/CommentCard";
import { PostCard } from "../Components/PostCard";

export function IndividualPost() {
  const { postID } = useParams();
  const [postDetails, setPostDetails] = useState({});

  const { state, dispatch } = useContext(AppContext);
  const getPost = () => {
    const postFound = state.forumData.posts.find(
      ({ postId }) => postID === postId
    );
    setPostDetails(postFound);
  };

  useEffect(() => {
    getPost();
  }, [postID, state.forumData]);
  return (
    <div className="main-page">
      <section className="posts-section">
        <Link to="/" className="post-page-heading">
          <i className="fa-solid fa-arrow-left"></i>Post
        </Link>
        <PostCard userPost={postDetails} />
        <ul className="comment-list">
          {postDetails?.comments?.map((comment) => {
            return (
              <CommentCard
                userComment={comment}
                toUserName={postDetails?.username}
              />
            );
          })}
        </ul>
      </section>
    </div>
  );
}
