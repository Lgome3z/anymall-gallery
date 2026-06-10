import EventHeader from './Components/EventHeader';
import ImageCarousel from './Components/ImageCarousel';
import Gallery from './Components/Gallery';
import TopBar from './Components/TopBar';
import Footer from './Components/Footer';
import JSZip from 'jszip';
import { saveAs } from "file-saver";
import type { Photo } from './types/Photo'
import { useState } from 'react'

type TemplatePageProps = {
  title: string, 
  date: Date, 
  teacher: string, 
  venue: string, 
  galleryImages: Photo[], 
  carouselImages: Photo[]
}

async function downloadPhotosAsZip(photos: Photo[]) {
  const zip = new JSZip();

  for (const photo of photos) {
    const response = await fetch(photo.src);
    const blob = await response.blob();

    zip.file(`${photo.fileName}.jpg`, blob);
  }

  const zipBlob = await zip.generateAsync({ type:"blob" });

  saveAs(zipBlob, "photos.zip");
}

export default function TemplatePage({title, date, teacher, venue, galleryImages, carouselImages}: TemplatePageProps) {
  const [selectedPhotos, setSelectedPhotos] = useState<Photo[]>([]);
  const [selectMode, setSelectMode] = useState<boolean>(false);


  return (
    <div className="min-h-screen bg-slate-50">
      <TopBar/>
      <EventHeader 
        title={title}
        date={date}
        teacher={teacher}
        venue={venue}
      />
      <ImageCarousel images={carouselImages} />
      <div className="mt-12 p-20 gap-4">
        <div className="flex justify-between items-center">
          <button disabled={selectedPhotos.length === 0}
          className="min-w-32 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white rounded-lg px-4 py-2 cursor-pointer disabled:cursor-not-allowed transition-colors"
          onClick={() => downloadPhotosAsZip(selectedPhotos)}>Download Selected Photos</button>
          <div className="flex gap-4">
            <button disabled={selectedPhotos.length === galleryImages.length}
            className="min-w-32 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white rounded-lg px-4 py-2 cursor-pointer disabled:cursor-not-allowed transition-colors"
            onClick={() => {setSelectMode(true); setSelectedPhotos([...galleryImages])}}>Select All</button>
            <button
            className="min-w-32 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white rounded-lg px-4 py-2 cursor-pointer disabled:cursor-not-allowed transition-colors"
            onClick={() => {setSelectMode(!selectMode); setSelectedPhotos([])}}>{selectMode? ("Cancel") : ("Select Mode")}</button>
          </div>
        </div>
        <div className="mt-8">
          <Gallery photos={galleryImages} selectMode={selectMode} selectedPhotos={selectedPhotos} setSelectedPhotos={setSelectedPhotos} />
        </div>
      </div>
      <div className="w-full flex justify-center mt-16 -mb-45 relative z-10" >
        <img 
          src="/images/fig-annie-chan.png" 
          alt="Event Mascot" 
          className="h-45 w-auto object-contain opacity-90 hover:scale-105 transition-transform block translate-y-[1px]"
        />
      </div>
      <Footer/>
    </div>
  )
}