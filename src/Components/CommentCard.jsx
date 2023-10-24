export function CommentCard({ userComment, toUserName }) {
  const {
    commentId,
    username,
    name,
    picUrl,
    likes,
    comment,
    createdAt
  } = userComment;
  const formatDate = (date) => {
    const newDate = new Date(date);
    return newDate.toDateString();
  };
  return (
    <div className="comment-card">
      <img src={picUrl} alt="user" className="avatar-image-nav" />
      <section className="comment-card-info">
        <header className="comment-header">
          <h3 className="comment-details">{name}</h3>
          <p className="post-header-details">@ {username}</p>
          <p className="post-header-details">{formatDate(createdAt)}</p>
        </header>
        <p className="reply-tag">Replying to @{toUserName}</p>
        <p className="comment-content">{comment}</p>
        <div className="btn-section">
          <div className="btn-post">
            <i className="fa-regular fa-heart"></i>
          </div>
          <div className="btn-post">
            <i className="fa-regular fa-comment"></i>
          </div>
          <div className="btn-post">
            <i className="fa-solid fa-share-nodes"></i>
          </div>
        </div>
      </section>
    </div>
  );
}
