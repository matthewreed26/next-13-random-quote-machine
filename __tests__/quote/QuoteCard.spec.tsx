import { describe, it, expect } from 'vitest';

import QuoteCard from '@/components/quote/QuoteCard';
import { render } from '@testing-library/react';

describe('QuoteCard', () => {
  it('should render', () => {
    const { getByTestId } = render(<QuoteCard />);
    const appTitle = getByTestId('quote-text');
    expect(appTitle.textContent).toBe('Quote Here Soon!');
  });
});
