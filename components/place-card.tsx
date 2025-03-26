import Link from "next/link"
import { MapPin, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface PlaceCardProps {
  id: string
  name: string
  category: string
  image: string
  rating: number
  distance: string
}

export default function PlaceCard({ id, name, category, image, rating, distance }: PlaceCardProps) {
  return (
    <Link href={`/place/${id}`}>
      <Card className="overflow-hidden hover:shadow-md transition-shadow">
        <div className="relative h-48">
          <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
          <Badge className="absolute top-3 left-3">{category}</Badge>
        </div>
        <CardContent className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-lg">{name}</h3>
              <div className="flex items-center mt-1 text-muted-foreground text-sm">
                <MapPin className="h-3 w-3 mr-1" />
                <span>{distance}</span>
              </div>
            </div>
            <div className="flex items-center bg-primary/10 px-2 py-1 rounded-md">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
              <span className="font-medium">{rating}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

