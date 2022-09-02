import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Dialog from '@radix-ui/react-dialog';

import {
  ComicThumbnail,
  Overlay,
  ThumbnailContent,
  CloseDialogButton,
} from './styles';

interface CoverModalProps {
  imagePath: string;
  imageAlt: string;
}

export function CoverModal({ imagePath, imageAlt }: CoverModalProps) {
  return (
    <Dialog.Portal>
      <Overlay />

      <ThumbnailContent>
        <CloseDialogButton>
          <FontAwesomeIcon icon={faClose} />
        </CloseDialogButton>
        <ComicThumbnail
          data-testid="cover-modal-comic-thumbnail-image"
          src={imagePath}
          alt={imageAlt}
        />
      </ThumbnailContent>
    </Dialog.Portal>
  );
}
