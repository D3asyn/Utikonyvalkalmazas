import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

interface ReviewCardProps {
  user: string
  rating: number
  comment: string
  date: string
}

export default function ReviewCard({ user, rating, comment, date }: ReviewCardProps) {
  // Get initials from user name
  const initials = user
    .split(" ")
    .map((name) => name[0])
    .join("")
    .toUpperCase()

  return (
    <Card className="bg-white">
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <Avatar className="bg-gradient-blue text-white">
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex justify-between items-center mb-1">
              <h4 className="font-medium">{user}</h4>
              <span className="text-sm text-muted-foreground">{date}</span>
            </div>
            <div className="flex mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                />
              ))}
            </div>
            <p className="text-sm">{comment}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

