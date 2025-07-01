import React from 'react';
import { sortCommentsByDate } from '../../utils/utils-sort.ts';
import { CommentsType } from '../comment/comment-type.ts';
import Comment from '../comment/comment.tsx';

type OffersScreenProps = {
  comments: CommentsType[];
};

function CommentsListComponent({ comments }: OffersScreenProps) {
  const sortedComments = React.useMemo(() => sortCommentsByDate(comments), [comments]);

  return (
    <ul className="reviews__list">
      {sortedComments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </ul>
  );
}

const CommentsList = React.memo(CommentsListComponent);

export default CommentsList;
