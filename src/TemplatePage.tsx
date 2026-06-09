import EventHeader from './Components/EventHeader';
import ImageCarousel from './Components/ImageCarousel';
import Gallery from './Components/Gallery';
import TopBar from './Components/TopBar';
import Footer from './Components/Footer';
import type { Photo } from './types/Photo'

type TemplatePageProps = {
  title: string, 
  date: Date, 
  teacher: string, 
  venue: string, 
  galleryImages: Photo[], 
  carouselImages: Photo[]
}

export default function TemplatePage({title, date, teacher, venue, galleryImages, carouselImages}: TemplatePageProps) {
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

      <div className="mt-12">
        <Gallery photos={galleryImages} />
      </div>
      <Footer/>
    </div>
  )
}