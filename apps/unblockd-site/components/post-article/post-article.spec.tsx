import { render } from '@testing-library/react';

import PostArticle from './post-article';

describe('PostArticle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PostArticle />);
    expect(baseElement).toBeTruthy();
  });
});
