import { useState } from "react";
import { MasonryPhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import { Expand, Check } from "lucide-react";

import "react-photo-album/masonry.css";
import "yet-another-react-lightbox/styles.css";

import type { Photo } from "../types/Photo";

type GalleryProps = {
  photos: Photo[];
  selectedPhotos: Photo[];
  setSelectedPhotos: React.Dispatch<React.SetStateAction<Photo[]>>;
};

export default function Gallery({ photos, selectedPhotos, setSelectedPhotos }: GalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const togglePhoto = (photo: Photo) => {
    setSelectedPhotos((prev) => {
      const isSelected = prev.some((p) => p.id === photo.id);

      if (isSelected) {
        return prev.filter((p) => p.id !== photo.id);
      }

      return [...prev, photo];
    });
  };

  return (
    <>
      <MasonryPhotoAlbum
        photos={photos}
        columns={(containerWidth) => {
          if (containerWidth < 640) return 2;
          if (containerWidth < 1024) return 3;
          return 4;
        }}
        spacing={16}
        render={{
          photo: (props, { photo, index, width, height }) => {
            const isSelected = selectedPhotos.some(
              (p) => p.id === photo.id
            );
            
            return (
              <div
                style={{width, height}}
                className={`group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-200 hover:scale-[1.03] ${
                  isSelected
                    ? "ring-2 ring-blue-500 shadow-lg"
                    : "hover:ring-2 hover:ring-gray-400 hover:shadow-lg"
                }`}
                onClick={() => togglePhoto(photo)}
              >
                <img
                  src={photo.src}
                  width={width}
                  height={height}
                  alt=""
                  className="object-cover w-full h-full"
                />

                {isSelected && (
                  <div className="absolute top-2 right-2 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-white">
                    <Check size={16} />
                  </div>
                )}

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex(index);
                  }}
                  className="absolute bottom-2 right-2 z-10 rounded-full bg-black/60 p-2 text-white opacity-0 transition-opacity duration-200 hover:bg-black/80 group-hover:opacity-100"
                >
                  <Expand size={18} />
                </button>
              </div>
            );
          },
        }}
      />

      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        slides={photos}
        index={lightboxIndex}
      />
    </>
  );
}