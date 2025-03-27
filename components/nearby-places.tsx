import PlaceCard from "@/components/place-card"

interface NearbyPlacesProps {
  placeId: string
  category: string
}

export default function NearbyPlaces({ placeId, category }: NearbyPlacesProps) {
  // This would normally fetch data based on the current place's location
  // For now, we'll use static data
  const nearbyPlaces = [
    {
      id: "3",
      name: "Art Museum",
      category: "Attraction",
      image: "https://www.grouptours.net/wp-content/uploads/2016/07/The_Metropolitan_Museum_of_Art.jpg",
      rating: 4.7,
      distance: "1.2 miles",
    },
    {
      id: "4",
      name: "Historic Downtown",
      category: "Attraction",
      image: "https://www.boston-discovery-guide.com/image-files/800-old-state-house-historic-boston-3x2.jpg",
      rating: 4.5,
      distance: "0.7 miles",
    },
    {
      id: "7",
      name: "Urban Cafe",
      category: "Restaurant",
      image:
        "https://c8.alamy.com/comp/H8M938/statue-of-liberty-sculpture-on-liberty-island-in-new-york-harbor-in-H8M938.jpg",
      rating: 4.4,
      distance: "0.3 miles",
    },
  ].filter((place) => place.id !== placeId)

  return (
    <div className="mt-8 border-t pt-6">
      <h3 className="text-xl font-semibold mb-4">Nearby Places</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {nearbyPlaces.map((place) => (
          <PlaceCard
            key={place.id}
            id={place.id}
            name={place.name}
            category={place.category}
            image={place.image}
            rating={place.rating}
            distance={place.distance}
          />
        ))}
      </div>
    </div>
  )
}

