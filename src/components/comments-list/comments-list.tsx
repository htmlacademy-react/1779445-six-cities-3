import Comment from '../comment';
import { CommentsType } from '../comment/comment-type.ts';

type OffersScreenProps = {
  comments: CommentsType[];
};

export default function CommentsList({ comments }: OffersScreenProps) {
  return (
    <ul className="reviews__list">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </ul>
  );
}
