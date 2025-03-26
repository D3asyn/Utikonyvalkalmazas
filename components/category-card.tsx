import Link from "next/link"
import { Activity, Calendar, Landmark, Utensils } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface CategoryCardProps {
  name: string
  icon: string
  color: string
  textColor: string
}

export default function CategoryCard({ name, icon, color, textColor }: CategoryCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "landmark":
        return <Landmark className={`h-6 w-6 ${textColor}`} />
      case "utensils":
        return <Utensils className={`h-6 w-6 ${textColor}`} />
      case "activity":
        return <Activity className={`h-6 w-6 ${textColor}`} />
      case "calendar":
        return <Calendar className={`h-6 w-6 ${textColor}`} />
      default:
        return <Activity className={`h-6 w-6 ${textColor}`} />
    }
  }

  return (
    <Link href="#">
      <Card className="hover:shadow-md transition-shadow">
        <CardContent className="p-4 flex flex-col items-center justify-center">
          <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center mb-2`}>{getIcon()}</div>
          <span className="font-medium text-sm">{name}</span>
        </CardContent>
      </Card>
    </Link>
  )
}

