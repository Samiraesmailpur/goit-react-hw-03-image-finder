import { Item, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ webformatURL, ClickOnLargeImage }) => {
  return (
    <Item className="gallery-item">
      <Image src={webformatURL} alt="" onClick={ClickOnLargeImage} />
    </Item>
  );
};
