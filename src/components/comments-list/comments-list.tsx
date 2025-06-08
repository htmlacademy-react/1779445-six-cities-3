import Comment from '../comment';
import { CommentsType } from '../comment/comment-type.ts';

type OffersScreenProps = {
  comments: CommentsType[];
};

export default function CommentsList({ comments }: OffersScreenProps) {
  const sortedComments = [...comments].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <ul className="reviews__list">
      {sortedComments.slice(0, 10).map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </ul>
  );
}
