import Link from "next/link"
import { ArrowLeft, MapPin, Star, Clock, Phone, Globe, Share2, Heart, Bookmark } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ReviewCard from "@/components/review-card"
import NearbyPlaces from "@/components/nearby-places"
import { Navbar } from "@/components/navbar"

// This would normally come from a database or API
const getPlaceDetails = (id: string) => {
  const places = {
    "1": {
      id: "1",
      name: "Central Park",
      category: "Attraction",
      image: "https://www.blackchickontour.com/wp-content/uploads/2009/10/Central-Park-and-Fall-Leaves.jpg?w=650",
      rating: 4.8,
      reviewCount: 1243,
      address: "Central Park, New York, NY 10022",
      hours: "6:00 AM - 10:00 PM",
      phone: "+1 (212) 310-6600",
      website: "https://www.centralparknyc.org",
      description:
        "Central Park is an urban park in New York City located between the Upper West and Upper East Sides of Manhattan. It is the most visited urban park in the United States with an estimated 42 million visitors annually, and is the most filmed location in the world.",
      reviews: [
        {
          id: "r1",
          user: "Jane D.",
          rating: 5,
          comment:
            "Beautiful park with so much to see and do! We spent the whole day here and didn't even cover half of it.",
          date: "2 weeks ago",
        },
        {
          id: "r2",
          user: "John S.",
          rating: 4,
          comment:
            "Great place to relax and enjoy nature in the middle of the city. The only downside is how crowded it gets on weekends.",
          date: "1 month ago",
        },
      ],
    },
    "2": {
      id: "2",
      name: "The Local Bistro",
      category: "Restaurant",
      image:
        "https://www.gannett-cdn.com/-mm-/4e4cd43f384ad6610642393199b44eb62a8364ea/c=405-0-1859-1093/local/-/media/2015/08/06/Phoenix/Phoenix/635744677058795279-PNI-0808-sr-dining-news-1.jpg?width=680&height=510&fit=crop",
      rating: 4.6,
      reviewCount: 856,
      address: "123 Main St, New York, NY 10001",
      hours: "11:00 AM - 10:00 PM",
      phone: "+1 (212) 555-1234",
      website: "https://www.thelocalbistro.com",
      description:
        "The Local Bistro offers a cozy atmosphere with delicious farm-to-table cuisine. Our menu changes seasonally to showcase the freshest local ingredients.",
      reviews: [
        {
          id: "r3",
          user: "Sarah M.",
          rating: 5,
          comment: "Amazing food and atmosphere! The chef's special was incredible and the service was top-notch.",
          date: "1 week ago",
        },
        {
          id: "r4",
          user: "Mike R.",
          rating: 4,
          comment: "Great food but a bit pricey. The wine selection is excellent though.",
          date: "3 weeks ago",
        },
      ],
    },
    "3": {
      id: "3",
      name: "Metropolitan Museum of Art",
      category: "Museum",
      image: "https://www.grouptours.net/wp-content/uploads/2016/07/The_Metropolitan_Museum_of_Art.jpg",
      rating: 4.9,
      reviewCount: 5000,
      address: "1000 5th Ave, New York, NY 10028",
      hours: "10:00 AM - 5:30 PM",
      phone: "+1 (212) 535-7710",
      website: "https://www.metmuseum.org",
      description:
        "One of the world's largest and finest art museums, with collections spanning 5,000 years of history from around the world.",
      reviews: [
        {
          id: "r5",
          user: "Emily L.",
          rating: 5,
          comment: "An absolutely stunning museum with incredible exhibits!",
          date: "1 month ago",
        },
        {
          id: "r6",
          user: "Robert K.",
          rating: 4.5,
          comment: "Fantastic art collection, but it takes a full day to see everything!",
          date: "2 weeks ago",
        },
      ],
    },
    "4": {
      id: "4",
      name: "Empire State Building",
      category: "Landmark",
      image: "https://www.boston-discovery-guide.com/image-files/800-old-state-house-historic-boston-3x2.jpg",
      rating: 4.7,
      reviewCount: 3200,
      address: "20 W 34th St, New York, NY 10118",
      hours: "8:00 AM - 2:00 AM",
      phone: "+1 (212) 736-3100",
      website: "https://www.esbnyc.com",
      description:
        "One of the most famous skyscrapers in the world, offering breathtaking views of New York City from its observation decks.",
      reviews: [
        {
          id: "r7",
          user: "Tom H.",
          rating: 5,
          comment: "Spectacular views, especially at sunset!",
          date: "3 weeks ago",
        },
        {
          id: "r8",
          user: "Linda P.",
          rating: 4,
          comment: "Amazing but the lines were too long.",
          date: "1 month ago",
        },
      ],
    },
    "5": {
      id: "5",
      name: "Broadway Theatre",
      category: "Entertainment",
      image:
        "https://images.travelandleisureasia.com/wp-content/uploads/sites/3/2023/05/02052513/Botanical-Gardens.jpg",
      rating: 4.9,
      reviewCount: 2750,
      address: "1681 Broadway, New York, NY 10019",
      hours: "Varies by show",
      phone: "+1 (212) 239-6200",
      website: "https://www.broadway.com",
      description:
        "World-famous for its spectacular performances, Broadway Theatre is the heart of American theatre and entertainment.",
      reviews: [
        {
          id: "r9",
          user: "Alice W.",
          rating: 5,
          comment: "A must-visit if you love theatre! The performances are phenomenal.",
          date: "2 days ago",
        },
        {
          id: "r10",
          user: "James T.",
          rating: 4.8,
          comment: "Unforgettable experience! Highly recommend catching a show here.",
          date: "1 week ago",
        },
      ],
    },
    "6": {
      id: "6",
      name: "Times Square",
      category: "Attraction",
      image: "https://bonjournewyork.fr/wp-content/uploads/2020/06/visiter-times-square.jpg",
      rating: 4.7,
      reviewCount: 4100,
      address: "Times Square, New York, NY 10036",
      hours: "Open 24 hours",
      phone: "N/A",
      website: "https://www.timessquarenyc.org",
      description:
        "A major commercial and entertainment hub in Midtown Manhattan, famous for its bright lights, Broadway theaters, and bustling atmosphere.",
      reviews: [
        {
          id: "r11",
          user: "Mark J.",
          rating: 5,
          comment: "Absolutely mesmerizing at night! A must-visit in NYC!",
          date: "1 week ago",
        },
        {
          id: "r12",
          user: "Laura F.",
          rating: 4,
          comment: "Very crowded, but the lights and energy are incredible.",
          date: "2 weeks ago",
        },
      ],
    },
    "7": {
      id: "7",
      name: "Statue of Liberty",
      category: "Landmark",
      image:
        "https://c8.alamy.com/comp/H8M938/statue-of-liberty-sculpture-on-liberty-island-in-new-york-harbor-in-H8M938.jpg",
      rating: 4.8,
      reviewCount: 5200,
      address: "Liberty Island, New York, NY 10004",
      hours: "8:30 AM - 4:00 PM",
      phone: "+1 (212) 363-3200",
      website: "https://www.nps.gov/stli/index.htm",
      description:
        "A symbol of freedom and democracy, the Statue of Liberty is one of the most iconic landmarks in the United States.",
      reviews: [
        {
          id: "r13",
          user: "David P.",
          rating: 5,
          comment: "A breathtaking sight! Highly recommend taking the ferry.",
          date: "3 days ago",
        },
        {
          id: "r14",
          user: "Emma C.",
          rating: 4.5,
          comment: "Amazing experience, but book your tickets in advance!",
          date: "2 weeks ago",
        },
      ],
    },
    "8": {
      id: "8",
      name: "Brooklyn Bridge",
      category: "Landmark",
      image: "https://rare-gallery.com/uploads/posts/795590-Brooklyn-Bridge-East-River-Bridges-USA-New-York-City.jpg",
      rating: 4.7,
      reviewCount: 3300,
      address: "Brooklyn Bridge, New York, NY 10038",
      hours: "Open 24 hours",
      phone: "N/A",
      website: "https://www.nyc.gov",
      description:
        "One of the oldest suspension bridges in the United States, offering stunning views of Manhattan and Brooklyn.",
      reviews: [
        {
          id: "r15",
          user: "Sophia R.",
          rating: 5,
          comment: "A beautiful walk with amazing skyline views!",
          date: "5 days ago",
        },
        {
          id: "r16",
          user: "Chris B.",
          rating: 4,
          comment: "Great experience, but it can get very windy!",
          date: "1 month ago",
        },
      ],
    },
    "9": {
      id: "9",
      name: "Fifth Avenue Shopping",
      category: "Shopping",
      image:
        "https://www.tripsavvy.com/thmb/RVn8V2UfNeqiZuWcjvGOFV7Y7B4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/Mikimoto-new-york-5a903f1f1f4e1300361ae68f.jpg",
      rating: 4.6,
      reviewCount: 2100,
      address: "5th Ave, New York, NY 10022",
      hours: "Varies by store",
      phone: "N/A",
      website: "https://www.nycgo.com",
      description:
        "A premier shopping destination featuring luxury boutiques, flagship stores, and world-renowned brands.",
      reviews: [
        {
          id: "r17",
          user: "Olivia N.",
          rating: 5,
          comment: "Shopping paradise! So many luxury stores to explore.",
          date: "2 weeks ago",
        },
        {
          id: "r18",
          user: "Jake M.",
          rating: 4,
          comment: "Expensive but worth it for the experience!",
          date: "3 weeks ago",
        },
      ],
    },
    "10": {
      id: "10",
      name: "Grand Central Terminal",
      category: "Landmark",
      image: "https://bonjournewyork.fr/wp-content/uploads/2020/12/grand-central-terminal.jpg",
      rating: 4.8,
      reviewCount: 3700,
      address: "89 E 42nd St, New York, NY 10017",
      hours: "5:30 AM - 2:00 AM",
      phone: "+1 (212) 340-2583",
      website: "https://www.grandcentralterminal.com",
      description:
        "A historic train station and architectural masterpiece, Grand Central Terminal is a must-see attraction in NYC.",
      reviews: [
        {
          id: "r19",
          user: "Henry W.",
          rating: 5,
          comment: "Such a beautiful and iconic place!",
          date: "4 days ago",
        },
        {
          id: "r20",
          user: "Megan D.",
          rating: 4.5,
          comment: "The ceiling and architecture are absolutely stunning!",
          date: "2 weeks ago",
        },
      ],
    },
    "11": {
      id: "11",
      name: "Rockefeller Center",
      category: "Attraction",
      image: "https://www.wallpaperflare.com/static/953/630/549/new-york-usa-skyscrapers-top-view-wallpaper.jpg",
      rating: 4.7,
      reviewCount: 4500,
      address: "45 Rockefeller Plaza, New York, NY 10111",
      hours: "8:00 AM - 12:00 AM",
      phone: "+1 (212) 332-6868",
      website: "https://www.rockefellercenter.com",
      description:
        "A world-famous entertainment and shopping complex, home to the Top of the Rock Observation Deck, NBC Studios, and the iconic ice rink.",
      reviews: [
        {
          id: "r21",
          user: "Natalie S.",
          rating: 5,
          comment: "Absolutely magical during the holiday season!",
          date: "1 week ago",
        },
        {
          id: "r22",
          user: "Ethan L.",
          rating: 4.6,
          comment: "Great view from the top and lots to see around.",
          date: "3 weeks ago",
        },
      ],
    },
  }

  return places[id as keyof typeof places]
}

export default function PlaceDetails({ params }: { params: { id: string } }) {
  const place = getPlaceDetails(params.id)

  if (!place) {
    return <div>Place not found</div>
  }

  return (
    <>
      <main className="pb-20 md:pb-6">
        <div className="relative h-64">
          <img src={place.image || "/placeholder.svg"} alt={place.name} className="w-full h-full object-cover" />
          <div className="absolute top-4 left-4">
            <Link href="/">
              <Button size="icon" variant="secondary" className="rounded-full bg-white/80 backdrop-blur-sm">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
          </div>
          <div className="absolute top-4 right-4 flex gap-2">
            <Button size="icon" variant="secondary" className="rounded-full bg-white/80 backdrop-blur-sm">
              <Share2 className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="secondary" className="rounded-full bg-white/80 backdrop-blur-sm">
              <Heart className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="secondary" className="rounded-full bg-white/80 backdrop-blur-sm">
              <Bookmark className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6 max-w-4xl">
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-2xl font-bold">{place.name}</h1>
                <div className="flex items-center mt-1">
                  <Badge className="bg-gradient-blue text-white">{place.category}</Badge>
                  <div className="flex items-center ml-3">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="font-medium">{place.rating}</span>
                    <span className="text-muted-foreground ml-1">({place.reviewCount} reviews)</span>
                  </div>
                </div>
              </div>
              <Button className="bg-gradient-green text-white">Get Directions</Button>
            </div>

            <div className="mt-4 flex items-center text-muted-foreground">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{place.address}</span>
            </div>
          </div>

          <div className="bg-pattern-lines p-6 rounded-lg">
            <Tabs defaultValue="about" className="w-full">
              <TabsList className="w-full grid grid-cols-3 bg-white">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="photos">Photos</TabsTrigger>
              </TabsList>
              <TabsContent value="about" className="mt-4">
                <div className="space-y-4 bg-white p-4 rounded-lg">
                  <p>{place.description}</p>

                  <div className="border-t pt-4">
                    <h3 className="font-medium mb-2">Information</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 mr-3 text-muted-foreground" />
                        <div>
                          <p className="font-medium">Hours</p>
                          <p className="text-muted-foreground">{place.hours}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 mr-3 text-muted-foreground" />
                        <div>
                          <p className="font-medium">Phone</p>
                          <p className="text-muted-foreground">{place.phone}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Globe className="h-5 w-5 mr-3 text-muted-foreground" />
                        <div>
                          <p className="font-medium">Website</p>
                          <a
                            href={place.website}
                            className="text-blue-600 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {place.website.replace("https://", "")}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="reviews" className="mt-4">
                <div className="space-y-4 bg-white p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Reviews</h3>
                      <div className="flex items-center mt-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span className="font-medium">{place.rating}</span>
                        <span className="text-muted-foreground ml-1">({place.reviewCount} reviews)</span>
                      </div>
                    </div>
                    <Button className="bg-gradient-blue text-white">Write a Review</Button>
                  </div>

                  <div className="space-y-4 mt-4">
                    {place.reviews.map((review) => (
                      <ReviewCard
                        key={review.id}
                        user={review.user}
                        rating={review.rating}
                        comment={review.comment}
                        date={review.date}
                      />
                    ))}
                    <Button variant="outline" className="w-full bg-white">
                      View All Reviews
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="photos" className="mt-4">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 bg-white p-4 rounded-lg">
                  <div className="aspect-square rounded-md overflow-hidden">
                    <img
                      src={place.image || "/placeholder.svg"}
                      alt={place.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square rounded-md overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW9ya3xlbnwwfHwwfHw%3D&w=1000&q=80"
                      alt="Place photo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square rounded-md overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmV3JTIweW9ya3xlbnwwfHwwfHw%3D&w=1000&q=80"
                      alt="Place photo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square rounded-md overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1534430480872-3498386e7856?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmV3JTIweW9ya3xlbnwwfHwwfHw%3D&w=1000&q=80"
                      alt="Place photo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square rounded-md overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1522083165195-3424ed129620?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmV3JTIweW9ya3xlbnwwfHwwfHw%3D&w=1000&q=80"
                      alt="Place photo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square rounded-md overflow-hidden relative">
                    <img
                      src="https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmV3JTIweW9ya3xlbnwwfHwwfHw%3D&w=1000&q=80"
                      alt="Place photo"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <Button variant="secondary">View All Photos</Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <NearbyPlaces placeId={place.id} category={place.category} />
          </div>
        </div>
      </main>
      <Navbar />
    </>
  )
}

