import { render, screen } from '@testing-library/react';
import FavoritesEmpty from './index.ts';

describe('Components: Favorites Empty', () => {
  it('Should render empty list', () => {
    render(<FavoritesEmpty />);

    expect(screen.getByText('Nothing yet saved.')).toBeInTheDocument();
  });
});
