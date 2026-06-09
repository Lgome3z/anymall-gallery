import { useState } from "react";
import { MasonryPhotoAlbum } from "react-photo-album"; 
import Lightbox from "yet-another-react-lightbox";
import "react-photo-album/masonry.css";
import "yet-another-react-lightbox/styles.css";

type Photo = {
  src: string;
  width: number;
  height: number;
};

//  accept photos as a prop from App.tsx
type GalleryProps = {
  photos: Photo[];
};

export default function Gallery({ photos }: GalleryProps) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <MasonryPhotoAlbum
        photos={photos}
        columns={(containerWidth) => {
          if (containerWidth < 640) return 2; // Mobile
          if (containerWidth < 1024) return 3; // Tablet
          return 4; // Desktop
        }}
        spacing={16}
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={photos}
        index={index}
      />
    </>
  );
}