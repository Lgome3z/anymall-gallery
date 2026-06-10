import { useState } from "react";
import { MasonryPhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Download from "yet-another-react-lightbox/plugins/download";
import { Expand, Check } from "lucide-react";

import "react-photo-album/masonry.css";
import "yet-another-react-lightbox/styles.css";

import type { Photo } from "../types/Photo";

type GalleryProps = {
  photos: Photo[];
  selectMode: boolean;
  selectedPhotos: Photo[];
  setSelectedPhotos: React.Dispatch<React.SetStateAction<Photo[]>>;
};

export default function Gallery({ photos, selectMode, selectedPhotos, setSelectedPhotos }: GalleryProps) {
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
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
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
                onClick={(e) => {
                  if (selectMode) {
                    togglePhoto(photo)
                  } else {
                    e.stopPropagation();
                    setLightboxIndex(index);
                  }
                }}
              >
                <img
                  src={photo.src}
                  width={width}
                  height={height}
                  alt=""
                  className="object-cover w-full h-full"
                />

                {/* THE NEW CIRCLE LOGIC */}
                {selectMode && (
                  <div 
                    className={`absolute top-2 right-2 z-10 flex h-6 w-6 items-center justify-center rounded-full transition-colors duration-200 shadow-sm ${
                      isSelected 
                        ? "bg-blue-500 text-white" // Filled blue circle with check
                        : "border-2 border-white/80 bg-black/20 backdrop-blur-sm" // Empty outlined circle
                    }`}
                  >
                    {isSelected && <Check size={16} strokeWidth={3} />}
                  </div>
                )}
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
        plugins={[Download]}
      />
    </div>
  );
}