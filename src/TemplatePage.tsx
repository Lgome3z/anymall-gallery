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

export async function downloadPhotosAsZip(photos: Photo[]) {
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
      <button disabled={selectedPhotos.length === 0}
      className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white rounded-lg px-4 py-2 cursor-pointer disabled:cursor-not-allowed transition-colors"
      onClick={() => downloadPhotosAsZip(selectedPhotos)}>Download Selected Photos</button>
      <div className="mt-12">
        <Gallery photos={galleryImages} selectedPhotos={selectedPhotos} setSelectedPhotos={setSelectedPhotos} />
      </div>
      <Footer/>
    </div>
  )
}