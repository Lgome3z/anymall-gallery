import EventHeader from './Components/EventHeader';
import ImageCarousel from './Components/ImageCarousel';

function App() {
  const images = ["public/images/venue-dyplus-1.jpg", 
                  "public/images/venue-dyplus-2.jpg", 
                  "public/images/venue-shiba-villa-1.jpg"];
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
    </div>
  )
}

export default App;