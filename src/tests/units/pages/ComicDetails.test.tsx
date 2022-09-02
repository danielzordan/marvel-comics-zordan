/* eslint-disable react/jsx-no-constructed-context-values */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { ComicsContext } from '../../../contexts/ComicsContext';
import { ComicDetails } from '../../../pages/ComicDetails';
import { mockedContextState } from '../__mocks__/context';

const mockedUseNavigate = jest.fn();
const mockedUseLocation = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUseNavigate,
  useLocation: () => mockedUseLocation,
}));

describe('Unit tests ComicDetails page', () => {
  beforeEach(() => {
    jest.setTimeout(60000);
    jest.clearAllMocks();
  });

  it('should render correctly', async () => {
    await act(async () => {
      render(
        <ComicsContext.Provider value={mockedContextState}>
          <ComicDetails />
        </ComicsContext.Provider>
      );
    });

    expect(mockedContextState.loadComic).toBeCalled();
  });

  it('should navigate correctly to home', async () => {
    await act(async () => {
      render(
        <ComicsContext.Provider value={mockedContextState}>
          <ComicDetails />
        </ComicsContext.Provider>
      );
    });

    const comebackButton = screen.getByTestId('comic-details-comeback-button');
    await userEvent.click(comebackButton);

    expect(mockedUseNavigate).toBeCalledWith(-1);
  });
});
