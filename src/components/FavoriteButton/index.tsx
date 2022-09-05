import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { FavoriteButtonComponent } from './styles';

interface FavoriteButtonProps {
  handleFavoriteComic: () => void;
  isFavoriteComic: boolean;
}

export function FavoriteButton({
  handleFavoriteComic,
  isFavoriteComic,
}: FavoriteButtonProps) {
  return (
    <FavoriteButtonComponent
      aria-label="Add this comic to favorite"
      data-testid="favorite-button"
      type="button"
      title={isFavoriteComic ? 'Unfavorite comic' : 'Favorite comic'}
      onClick={handleFavoriteComic}
      color={isFavoriteComic ? 'favorited' : 'unfavorited'}
    >
      <FontAwesomeIcon icon={faStar} />
    </FavoriteButtonComponent>
  );
}
