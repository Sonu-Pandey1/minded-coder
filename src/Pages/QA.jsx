import React, { useState } from 'react';
import './QA.scss';

const CommentSection = () => {
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState([]);

  const handleInputChange = (event) => {
    setComment(event.target.value);
  };

  const handlePostComment = () => {
    if (comment.trim()) {
      setCommentsList([...commentsList, comment]);
      setComment(''); // Clear the input field after posting
    }
  };

  return (
    <div className="comment-section">
      <h3>Add a new comment</h3>
      <textarea
        value={comment}
        onChange={handleInputChange}
        placeholder="Type Your Comment"
      />
      <button onClick={handlePostComment}>Post Comment</button>

      <div className="comments-list">
        {commentsList.map((com, index) => (
          <div key={index} className="comment-item">
            {com}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;