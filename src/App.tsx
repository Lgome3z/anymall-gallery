import TemplatePage from "./TemplatePage";
import type { Photo } from "./types/Photo"

function App() {

  const title = "AnyMall Summer Design Workshop";
  const date = new Date(2026, 7, 15, 14, 0, 0, 0);
  const teacher = "Mori-sensei";
  const venue = "Tokyo Inumo";
  const carouselImages: Photo[] = [
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
  const galleryImages: Photo[] = [
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
    },
     {
      src: "/images/venue-shiba-villa-1.jpg",
      width: 1200,
      height: 800
    },
      {
      src: "/images/venue-shiba-villa-1.jpg",
      width: 1200,
      height: 800
    },
      {
      src: "/images/venue-shiba-villa-1.jpg",
      width: 1200,
      height: 800
    },
      {
      src: "/images/venue-shiba-villa-1.jpg",
      width: 1200,
      height: 800
    },
      {
      src: "/images/venue-shiba-villa-1.jpg",
      width: 1200,
      height: 800
    },
      {
      src: "/images/venue-shiba-villa-1.jpg",
      width: 1200,
      height: 800
    },
      {
      src: "/images/venue-shiba-villa-1.jpg",
      width: 1200,
      height: 800
    },
      {
      src: "/images/venue-shiba-villa-1.jpg",
      width: 1200,
      height: 800
    } 
  ]

  return(
    <TemplatePage 
      title={title}
      date={date}
      teacher={teacher}
      venue={venue}
      galleryImages={galleryImages}
      carouselImages={carouselImages}
    />
  )

}