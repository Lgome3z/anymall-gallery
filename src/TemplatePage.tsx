import EventHeader from './Components/EventHeader';
import ImageCarousel from './Components/ImageCarousel';
import Gallery from './Components/Gallery';
import TopBar from './Components/TopBar';
import Footer from './Components/Footer';
import JSZip from 'jszip';
import { saveAs } from "file-saver";
import type { Photo } from './types/Photo';
import { useState } from 'react';
import { Download, CheckSquare, X } from 'lucide-react'; // download icon

type TemplatePageProps = {
  title: string, 
  date: Date, 
  teacher: string, 
  venue: string, 
  galleryImages: Photo[], 
  carouselImages: Photo[]
}

export function getDownloadFileName(fileName: string): string {
  return /\.(jpg|jpeg|png|webp|gif|bmp|heic|heif)$/.test(fileName)
    ? fileName
    : `${fileName}.jpg`;
}

/*async function downloadPhoto(photo: Photo) {
  const response = await fetch(photo.src);
  const blob = await response.blob();
  saveAs(blob, getDownloadFileName(photo.fileName))
}*/

async function sharePhotos(photos: Photo[]) {
  const files: File[] = [];

  for (const photo of photos) {
    const response = await fetch(photo.src);

    if (!response.ok) {
      throw new Error(`Failed to fetch ${photo.fileName}`);
    }

    const blob = await response.blob();

    files.push(
      new File(
        [blob],
        getDownloadFileName(photo.fileName),
        { type: blob.type }
      )
    );
  }

  if (
    navigator.canShare &&
    navigator.canShare({ files })
  ) {
    await navigator.share({
      files,
      title: "Selected Photos",
    });

    return true;
  }

  return false;
}

async function downloadPhotosAsZip(photos: Photo[]) {
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (isMobile) {
    const shared = await sharePhotos(photos);
    if (shared) {
      return;
    }
  }

  const zip = new JSZip();

  for (const photo of photos) {
    const response = await fetch(photo.src);
    const blob = await response.blob();
    zip.file(getDownloadFileName(photo.fileName), blob);
  }

  const zipBlob = await zip.generateAsync({ type:"blob" });
  saveAs(zipBlob, "photos.zip");
}

export default function TemplatePage({title, date, teacher, venue, galleryImages, carouselImages}: TemplatePageProps) {
  const [selectedPhotos, setSelectedPhotos] = useState<Photo[]>([]);
  const [selectMode, setSelectMode] = useState<boolean>(false);

  const handleSelectAll = () => {
    if (selectedPhotos.length === galleryImages.length) {
      setSelectedPhotos([]); 
    } else {
      setSelectedPhotos([...galleryImages]); 
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <TopBar/>
      <EventHeader 
        title={title}
        date={date}
        teacher={teacher}
        venue={venue}
      />
      <ImageCarousel images={carouselImages} />
      
      
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-12 mb-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-2 border-b border-slate-200 pb-6">

          <button
            disabled={!selectMode || selectedPhotos.length === 0}
            onClick={() => downloadPhotosAsZip(selectedPhotos)}
            className={`flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-medium transition-all duration-200 w-full sm:w-auto ${
              selectMode && selectedPhotos.length > 0
                ? "bg-slate-900 text-white shadow-md hover:bg-slate-800 hover:shadow-lg active:scale-95"
                : "bg-slate-200 text-slate-400 cursor-not-allowed"
            }`}
          >
            <Download size={18} />
            {selectedPhotos.length > 0 ? `Download (${selectedPhotos.length})` : "Download Photos"}
          </button>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            {selectMode ? (
              <>
                <button
                  onClick={handleSelectAll}
                  className="text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 px-4 py-2.5 rounded-xl transition-colors"
                >
                  {selectedPhotos.length === galleryImages.length ? "Deselect All" : "Select All"}
                </button>
                <button
                  onClick={() => {
                    setSelectMode(false);
                    setSelectedPhotos([]); // Clear selections when turning off mode
                  }}
                  className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 px-5 py-2.5 rounded-xl font-medium shadow-sm transition-all active:scale-95"
                >
                  <X size={18} />
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={() => setSelectMode(true)}
                className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 px-5 py-2.5 rounded-xl font-medium shadow-sm transition-all active:scale-95"
              >
                <CheckSquare size={18} />
                Select Photos
              </button>
            )}
          </div>
          
        </div>
      </div>

      {/* The Gallery Container */}
      <div className="flex-grow">
        <Gallery 
          photos={galleryImages} 
          selectMode={selectMode} 
          selectedPhotos={selectedPhotos} 
          setSelectedPhotos={setSelectedPhotos} 
        />
      </div>

      <div className="w-full flex justify-center mt-16 -mb-45 relative z-10" >
        <img 
          src="/images/fig-annie-chan.png" 
          alt="Event Mascot" 
          className="h-45 w-auto object-contain opacity-90 block translate-y-[1px]"
        />
      </div>

      <Footer/>
    </div>
  )
}