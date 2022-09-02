import * as Dialog from '@radix-ui/react-dialog';
import { render, screen } from '@testing-library/react';
import { CoverModal } from '../../../components/CoverModal';

describe('Unit tests CoverModal component', () => {
  const mockedImageAlt = 'mocked-alt-image';
  const mockedImageSrc = 'mocked-src-image';

  test('should render correctly when modal is open', () => {
    render(
      <Dialog.Root open>
        <CoverModal imageAlt={mockedImageAlt} imagePath={mockedImageSrc} />
      </Dialog.Root>
    );

    const thumbail = screen.getByTestId('cover-modal-comic-thumbnail-image');

    expect(thumbail).toHaveAttribute('src', mockedImageSrc);
    expect(thumbail).toHaveAttribute('alt', mockedImageAlt);
  });

  test('should render correctly when modal is closed', () => {
    render(
      <Dialog.Root open={false}>
        <CoverModal imageAlt={mockedImageAlt} imagePath={mockedImageSrc} />
      </Dialog.Root>
    );

    const thumbail = screen.queryByTestId('cover-modal-comic-thumbnail-image');

    expect(thumbail).toBe(null);
  });
});
