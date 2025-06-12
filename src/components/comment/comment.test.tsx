import { render, screen } from '@testing-library/react';
import { mockComment } from '../../utils/mocks.ts';
import Comment from './comment.tsx';

vi.mock('./utils.ts', () => ({
  __esModule: true,
  default: vi.fn(() => 'October 2023'),
}));

vi.mock('../place-card/utils.ts', () => ({
  __esModule: true,
  default: vi.fn(() => '80%'),
}));

describe('Component: Comment', () => {
  it('should render comment content correctly', () => {
    render(<Comment comment={mockComment} />);

    // Имя пользователя
    expect(screen.getByText(mockComment.user.name)).toBeInTheDocument();

    // Текст комментария
    expect(screen.getByText(mockComment.comment)).toBeInTheDocument();

    // Форматированная дата
    expect(screen.getByText('October 2023')).toBeInTheDocument();

    // Аватар
    const avatar = screen.getByRole('img');
    expect(avatar).toHaveAttribute('src', mockComment.user.avatarUrl);
    expect(avatar).toHaveAttribute('alt', 'Reviews avatar');

    // Ширина звёзд (style)
    const stars = avatar.closest('.reviews__item')!.querySelector('.rating__stars span')!;
    expect(stars).toHaveStyle({ width: '80%' });
  });
});
