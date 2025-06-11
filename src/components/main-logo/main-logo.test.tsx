import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import MainLogo from './main-logo';

describe('Component: MainLogo', () => {
  it('should render logo with correct class and image', () => {
    render(
      <BrowserRouter>
        <MainLogo linkClassName="test-class" />
      </BrowserRouter>,
    );

    expect(screen.getByRole('link')).toHaveClass('header__logo-link test-class');
    expect(screen.getByAltText(/6 cities logo/i)).toBeInTheDocument();
  });
});
