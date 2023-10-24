import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "..";
import { PostCard } from "../Components/PostCard";
import { SortBar } from "../Components/SortBar";

export function Landing() {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div className="main-page">
      <section className="posts-section">
        <h1 className="post-tag">
          {state.sortByTime ? "Latest" : "Trending"} Posts
        </h1>
        <ul>
          {state.filteredData.posts.map((userPost) => {
            return (
              <li key={userPost.postId}>
                <PostCard userPost={userPost} />
              </li>
            );
          })}
        </ul>
      </section>
      <SortBar />
    </div>
  );
}
