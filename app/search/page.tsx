import Link from "next/link"
import { ArrowLeft, Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import PlaceCard from "@/components/place-card"
import { Navbar } from "@/components/navbar"

export default function SearchResults() {
  return (
    <>
      <main className="container mx-auto px-4 py-6 max-w-4xl pb-20">
        <div className="bg-gradient-purple p-4 rounded-lg mb-6">
          <div className="flex items-center mb-4">
            <Link href="/">
              <Button variant="secondary" size="icon" className="mr-2">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search for places..." className="pl-10 bg-white/90" defaultValue="Coffee shops" />
            </div>
            <Button variant="secondary" size="icon" className="ml-2">
              <Filter className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm text-white">24 results found</div>
            <div className="flex gap-2">
              <Button variant="secondary" size="sm">
                Sort by: Relevance
              </Button>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
          <Badge variant="outline" className="rounded-full px-4 py-2 bg-gradient-blue text-white">
            All
          </Badge>
          <Badge variant="outline" className="rounded-full px-4 py-2 bg-white">
            Cafés
          </Badge>
          <Badge variant="outline" className="rounded-full px-4 py-2 bg-white">
            Coffee Shops
          </Badge>
          <Badge variant="outline" className="rounded-full px-4 py-2 bg-white">
            Bakeries
          </Badge>
          <Badge variant="outline" className="rounded-full px-4 py-2 bg-white">
            Breakfast
          </Badge>
          <Badge variant="outline" className="rounded-full px-4 py-2 bg-white">
            Brunch
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <PlaceCard
            id="12"
            name="Urban Coffee Roasters"
            category="Coffee Shop"
            image="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            rating={4.9}
            distance="0.3 miles"
          />
          <PlaceCard
            id="13"
            name="The Daily Grind"
            category="Coffee Shop"
            image="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29mZmVlJTIwc2hvcHxlbnwwfHwwfHw%3D&w=1000&q=80"
            rating={4.7}
            distance="0.5 miles"
          />
          <PlaceCard
            id="14"
            name="Artisan Brew"
            category="Coffee Shop"
            image="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29mZmVlJTIwc2hvcHxlbnwwfHwwfHw%3D&w=1000&q=80"
            rating={4.5}
            distance="0.8 miles"
          />
          <PlaceCard
            id="15"
            name="Morning Café"
            category="Café"
            image="https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhZmV8ZW58MHx8MHx8&w=1000&q=80"
            rating={4.6}
            distance="1.0 miles"
          />
          <PlaceCard
            id="16"
            name="Espresso Lane"
            category="Coffee Shop"
            image="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNvZmZlZSUyMHNob3B8ZW58MHx8MHx8&w=1000&q=80"
            rating={4.8}
            distance="1.2 miles"
          />
          <PlaceCard
            id="17"
            name="Sweet Bakery & Café"
            category="Bakery"
            image="https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFrZXJ5fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            rating={4.7}
            distance="1.5 miles"
          />
        </div>

        <div className="mt-6 flex justify-center">
          <Button variant="outline" className="bg-white">
            Load More
          </Button>
        </div>
      </main>
      <Navbar />
    </>
  )
}

