import { useState } from "react";
import TemplatePage from "./TemplatePage";
import PinScreen from "./Components/PinScreen";
import type { Photo } from "./types/Photo";

function App() {
  // ---  SECURITY STATE ---
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [pinError, setPinError] = useState("");

  // The master PIN... I need to find a way for the admin to directly edit what this can be
  const CORRECT_PIN = "123456";

  const handleUnlock = (enteredPin: string) => {
    if (enteredPin === CORRECT_PIN) {
      setIsUnlocked(true);
      setPinError(""); 
    } else {
      setPinError("Incorrect PIN. Please try again.");
    }
  };

  const title = "AnyMall Summer Design Workshop";
  const date = new Date(2026, 7, 15, 14, 0, 0, 0);
  const teacher = "Mori-sensei";
  const venue = "Tokyo Inumo";
  const carouselImages: Photo[] = [
    {
      id: crypto.randomUUID(),
      fileName: "venue-dyplus-1.jpg",
      src: "/images/venue-dyplus-1.jpg",
      width: 1200,
      height: 800
    },
    {
      id: crypto.randomUUID(),
      fileName: "venue-dyplus-2.jpg",
      src: "/images/venue-dyplus-2.jpg",
      width: 1200,
      height: 800
    },
    {
      id: crypto.randomUUID(),
      fileName: "venue-shiba-villa-1.jpg",
      src: "/images/venue-shiba-villa-1.jpg",
      width: 1200,
      height: 800
    }
  ];
  const galleryImages: Photo[] = [
    {
      id: crypto.randomUUID(),
      fileName: "venue-dyplus-1.jpg",
      src: "/images/venue-dyplus-1.jpg",
      width: 1200,
      height: 800
    },
    {
      id: crypto.randomUUID(),
      fileName: "venue-dyplus-2.jpg",
      src: "/images/venue-dyplus-2.jpg",
      width: 1200,
      height: 800
    },
    {
      id: crypto.randomUUID(),
      fileName: "venue-shiba-villa-1.jpg",
      src: "/images/venue-shiba-villa-1.jpg",
      width: 1200,
      height: 800
    },
    {
      id: crypto.randomUUID(),
      fileName: "venue-shiba-villa-1.jpg",
      src: "/images/venue-shiba-villa-1.jpg",
      width: 1200,
      height: 800
    },
    {
      id: crypto.randomUUID(),
      fileName: "venue-shiba-villa-1.jpg",
      src: "/images/venue-shiba-villa-1.jpg",
      width: 1200,
      height: 800
    },
    {
      id: crypto.randomUUID(),
      fileName: "venue-shiba-villa-1.jpg",
      src: "/images/venue-shiba-villa-1.jpg",
      width: 1200,
      height: 800
    },
    {
      id: crypto.randomUUID(),
      fileName: "venue-shiba-villa-1.jpg",
      src: "/images/venue-shiba-villa-1.jpg",
      width: 1200,
      height: 800
    },
    {
      id: crypto.randomUUID(),
      fileName: "venue-shiba-villa-1.jpg",
      src: "/images/venue-shiba-villa-1.jpg",
      width: 1200,
      height: 800
    },
    {
      id: crypto.randomUUID(),
      fileName: "venue-shiba-villa-1.jpg",
      src: "/images/venue-shiba-villa-1.jpg",
      width: 1200,
      height: 800
    },
    {
      id: crypto.randomUUID(),
      fileName: "venue-shiba-villa-1.jpg",
      src: "/images/venue-shiba-villa-1.jpg",
      width: 1200,
      height: 800
    },
    {
      id: crypto.randomUUID(),
      fileName: "venue-shiba-villa-1.jpg",
      src: "/images/venue-shiba-villa-1.jpg",
      width: 1200,
      height: 800
    },
    {
      id: crypto.randomUUID(),
      fileName: "venue-dyplus-1.jpg",
      src: "/images/venue-dyplus-1.jpg",
      width: 1200,
      height: 800
    }
  ];

  // --- CONDITIONAL RENDERING ---
  
  // If they haven't put in the right PIN yet, ONLY show the PinScreen
  if (!isUnlocked) {
    return <PinScreen onUnlock={handleUnlock} errorMessage={pinError} />;
  }

  // If they got past the gate, render.
  return (
    <TemplatePage 
      title={title}
      date={date}
      teacher={teacher}
      venue={venue}
      galleryImages={galleryImages}
      carouselImages={carouselImages}
    />
  );
}

export default App;