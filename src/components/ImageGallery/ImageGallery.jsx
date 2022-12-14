import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export const ImageGallery = ({ images, handleClick }) => {
  return (
    <Gallery className="gallery">
      {images.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          ClickOnLargeImage={() => handleClick(largeImageURL)}
        />
      ))}
    </Gallery>
  );
};
