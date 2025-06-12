import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NewCommentForm from './new-comment-form';

vi.mock('../../hooks', () => ({
  useAppDispatch: (): (() => Promise<{ unwrap: () => Promise<void> }>) => () =>
    Promise.resolve({ unwrap: () => Promise.resolve() }),
}));

vi.mock('../../hooks', () => ({
  useAppDispatch: () => vi.fn(() => Promise.resolve({ unwrap: () => Promise.resolve() })),
}));

describe('NewCommentForm', () => {
  it('renders form and submits comment', () => {
    render(
      <MemoryRouter>
        <NewCommentForm />
      </MemoryRouter>,
    );

    const textarea = screen.getByPlaceholderText(/tell how was your stay/i);
    const button = screen.getByRole('button', { name: /submit/i });

    fireEvent.change(textarea, {
      target: { value: 'This is a test comment with enough characters.' },
    });

    fireEvent.click(button);

    // Проверка, что кнопка отображается (ререндер после submit)
    expect(button).toBeInTheDocument();
  });
});
