import { useCallback, useEffect, useState } from 'react';
import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';
import CommentItem from './CommentItem';

import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';

const Comments = ({ parentId }) => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const { sendRequest, status, data: quoteComments } = useHttp(getAllComments);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addedCommentHandler = useCallback(() => {
    sendRequest(parentId);
  }, [sendRequest, parentId]);

  useEffect(() => {
    sendRequest(parentId);
  }, [sendRequest, parentId, addedCommentHandler]);

  if (status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {quoteComments && quoteComments.length > 0 ? (
        quoteComments.map((comment) => (
          <CommentItem key={comment.id} text={comment.text}></CommentItem>
        ))
      ) : (
        <div className="centered">No comments to show</div>
      )}
      {isAddingComment && (
        <NewCommentForm
          parentId={parentId}
          onAddedComment={addedCommentHandler}
        />
      )}
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
    </section>
  );
};

export default Comments;
