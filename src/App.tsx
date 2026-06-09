import EventHeader from './Components/EventHeader';
import ImageCarousel from './Components/ImageCarousel';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <EventHeader 
        title="AnyMall Summer Design Workshop"
        date="2026-07-15"
        time="14:00 - 17:00"
        teacher="Mori-sensei"
        venue="Tokyo Inumo"
      />
    </div>
  )
}

export default App;