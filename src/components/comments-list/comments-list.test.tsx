import { render, screen } from '@testing-library/react';
import { mockComment } from '../../utils/mocks.ts';
import { CommentsType } from '../comment/comment-type.ts';
import CommentsList from './comments-list.tsx';

vi.mock('../comment', () => ({
  default: ({ comment }: { comment: CommentsType }) => (
    <li data-testid="mock-comment">{comment.comment}</li>
  ),
}));

describe('Component: Comments List', () => {
  it('should render comments list', () => {
    render(<CommentsList comments={[mockComment]} />);

    const renderedComments = screen.getAllByTestId('mock-comment');

    expect(renderedComments).toHaveLength(1);
    expect(screen.getByText('Very good!')).toBeInTheDocument();
  });
});
