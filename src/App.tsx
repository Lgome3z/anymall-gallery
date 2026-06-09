import EventHeader from './Components/EventHeader';
import ImageCarousel from './Components/ImageCarousel';
import Gallery from './Components/Gallery';

function App() {
  const images = ["/images/venue-dyplus-1.jpg", 
                  "/images/venue-dyplus-2.jpg", 
                  "/images/venue-shiba-villa-1.jpg"];
  const galleryImages = [
    {
      src: "/images/venue-dyplus-1.jpg",
      width: 1200,
      height: 800
    },
    {
      src: "/images/venue-dyplus-2.jpg",
      width: 1200,
      height: 800
    },
    {
      src: "/images/venue-shiba-villa-1.jpg",
      width: 1200,
      height: 800
    }
  ]
  return (
    <div className="min-h-screen bg-slate-50">
      <EventHeader 
        title="AnyMall Summer Design Workshop"
        date="2026-07-15"
        time="14:00 - 17:00"
        teacher="Mori-sensei"
        venue="Tokyo Inumo"
      />
      <ImageCarousel images={images} />

      <div className="mt-12">
        <Gallery photos={galleryImages} />
      </div>
    </div>
  )
}

export default App;