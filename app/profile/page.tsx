import Link from "next/link"
import { ArrowLeft, Settings, MapPin, Star, Heart, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import PlaceCard from "@/components/place-card"
import { Navbar } from "@/components/navbar"

export default function Profile() {
  return (
    <>
      <main className="container mx-auto px-4 py-6 max-w-4xl pb-20">
        <div className="bg-gradient-purple p-4 rounded-lg mb-6">
          <div className="flex items-center">
            <Link href="/">
              <Button variant="secondary" size="icon" className="mr-2">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-white">Profile</h1>
            <Button variant="secondary" size="icon" className="ml-auto">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-sm">
            <div className="w-24 h-24 rounded-full bg-gradient-blue text-white flex items-center justify-center text-3xl font-bold mb-3">
              JD
            </div>
            <h2 className="text-xl font-semibold">John Doe</h2>
            <p className="text-muted-foreground">New York, NY</p>
            <div className="flex items-center mt-2">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
              <span className="font-medium">4.8</span>
              <span className="text-muted-foreground ml-1">(24 reviews)</span>
            </div>
            <Button className="mt-4 w-full bg-gradient-blue text-white">Edit Profile</Button>
          </div>

          <div className="flex-1">
            <Card className="bg-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Stats</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex flex-col items-center p-3 bg-gradient-blue rounded-lg text-white">
                    <MapPin className="h-6 w-6 mb-2" />
                    <span className="text-2xl font-bold">42</span>
                    <span className="text-sm">Places Visited</span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-gradient-orange rounded-lg text-white">
                    <Star className="h-6 w-6 mb-2" />
                    <span className="text-2xl font-bold">24</span>
                    <span className="text-sm">Reviews</span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-gradient-pink rounded-lg text-white">
                    <Heart className="h-6 w-6 mb-2" />
                    <span className="text-2xl font-bold">16</span>
                    <span className="text-sm">Favorites</span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-gradient-green rounded-lg text-white">
                    <Calendar className="h-6 w-6 mb-2" />
                    <span className="text-2xl font-bold">8</span>
                    <span className="text-sm">Planned</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-pattern-dots p-4 rounded-lg">
          <Tabs defaultValue="favorites" className="w-full">
            <TabsList className="w-full grid grid-cols-3 bg-white">
              <TabsTrigger value="favorites">Favorites</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="visited">Visited</TabsTrigger>
            </TabsList>
            <TabsContent value="favorites" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <PlaceCard
                  id="1"
                  name="Central Park"
                  category="Attraction"
                  image="https://www.blackchickontour.com/wp-content/uploads/2009/10/Central-Park-and-Fall-Leaves.jpg?w=650"
                  rating={4.8}
                  distance="0.5 miles"
                />
                <PlaceCard
                  id="3"
                  name="Art Museum"
                  category="Attraction"
                  image="https://www.grouptours.net/wp-content/uploads/2016/07/The_Metropolitan_Museum_of_Art.jpg"
                  rating={4.7}
                  distance="1.2 miles"
                />
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="mt-4">
              <div className="space-y-4">
                <Card className="bg-white">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-lg overflow-hidden">
                          <img
                            src="https://www.blackchickontour.com/wp-content/uploads/2009/10/Central-Park-and-Fall-Leaves.jpg?w=650"
                            alt="Central Park"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${i < 5 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <h4 className="font-medium">Central Park</h4>
                          <span className="text-sm text-muted-foreground">2 weeks ago</span>
                        </div>
                        <p className="text-sm">
                          Beautiful park with so much to see and do! I spent the whole day here and didn't even cover
                          half of it. The Bethesda Fountain area was my favorite spot.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-lg overflow-hidden">
                          <img
                            src="https://www.gannett-cdn.com/-mm-/4e4cd43f384ad6610642393199b44eb62a8364ea/c=405-0-1859-1093/local/-/media/2015/08/06/Phoenix/Phoenix/635744677058795279-PNI-0808-sr-dining-news-1.jpg?width=680&height=510&fit=crop"
                            alt="The Local Bistro"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <h4 className="font-medium">The Local Bistro</h4>
                          <span className="text-sm text-muted-foreground">1 month ago</span>
                        </div>
                        <p className="text-sm">
                          Great food but a bit pricey. The wine selection is excellent though and the service was
                          top-notch. Would recommend for special occasions.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="visited" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <PlaceCard
                  id="1"
                  name="Central Park"
                  category="Attraction"
                  image="https://www.blackchickontour.com/wp-content/uploads/2009/10/Central-Park-and-Fall-Leaves.jpg?w=650"
                  rating={4.8}
                  distance="0.5 miles"
                />
                <PlaceCard
                  id="2"
                  name="The Local Bistro"
                  category="Restaurant"
                  image="https://www.gannett-cdn.com/-mm-/4e4cd43f384ad6610642393199b44eb62a8364ea/c=405-0-1859-1093/local/-/media/2015/08/06/Phoenix/Phoenix/635744677058795279-PNI-0808-sr-dining-news-1.jpg?width=680&height=510&fit=crop"
                  rating={4.6}
                  distance="0.8 miles"
                />
                <PlaceCard
                  id="3"
                  name="Art Museum"
                  category="Attraction"
                  image="https://www.grouptours.net/wp-content/uploads/2016/07/The_Metropolitan_Museum_of_Art.jpg"
                  rating={4.7}
                  distance="1.2 miles"
                />
                <PlaceCard
                  id="6"
                  name="Seaside Grill"
                  category="Restaurant"
                  image="https://bonjournewyork.fr/wp-content/uploads/2020/06/visiter-times-square.jpg"
                  rating={4.6}
                  distance="1.5 miles"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Navbar />
    </>
  )
}

