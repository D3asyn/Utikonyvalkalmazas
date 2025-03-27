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

  const getGradientClass = () => {
    switch (icon) {
      case "landmark":
        return "bg-gradient-blue"
      case "utensils":
        return "bg-gradient-orange"
      case "activity":
        return "bg-gradient-green"
      case "calendar":
        return "bg-gradient-purple"
      default:
        return "bg-gradient-blue"
    }
  }

  return (
    <Link href="#">
      <Card className="hover:shadow-md transition-shadow card-hover-effect bg-white">
        <CardContent className="p-4 flex flex-col items-center justify-center">
          <div className={`w-12 h-12 rounded-full ${getGradientClass()} flex items-center justify-center mb-2`}>
            {getIcon()}
          </div>
          <span className="font-medium text-sm">{name}</span>
        </CardContent>
      </Card>
    </Link>
  )
}

