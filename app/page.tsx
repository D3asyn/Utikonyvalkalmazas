import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PlaceCard from "@/components/place-card";
import CategoryCard from "@/components/category-card";

export default function Home() {
	return (
		<main className="container mx-auto px-4 py-6 max-w-4xl">
			<header className="mb-8">
				<h1 className="text-3xl font-bold mb-2">Local Guide</h1>
				<p className="text-muted-foreground">
					Discover the best places around you
				</p>

				<div className="relative mt-4">
					<Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
					<Input
						placeholder="Search for places..."
						className="pl-10"
					/>
				</div>
			</header>

			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-4">Featured Places</h2>
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
				</div>
			</section>

			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-4">Categories</h2>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
					<CategoryCard
						name="Attractions"
						icon="landmark"
						color="bg-blue-100"
						textColor="text-blue-600"
					/>
					<CategoryCard
						name="Restaurants"
						icon="utensils"
						color="bg-red-100"
						textColor="text-red-600"
					/>
					<CategoryCard
						name="Activities"
						icon="activity"
						color="bg-green-100"
						textColor="text-green-600"
					/>
					<CategoryCard
						name="Events"
						icon="calendar"
						color="bg-purple-100"
						textColor="text-purple-600"
					/>
				</div>
			</section>

			<section>
				<Tabs defaultValue="attractions" className="w-full">
					<TabsList className="w-full grid grid-cols-3">
						<TabsTrigger value="attractions">
							Attractions
						</TabsTrigger>
						<TabsTrigger value="restaurants">
							Restaurants
						</TabsTrigger>
						<TabsTrigger value="activities">Activities</TabsTrigger>
					</TabsList>
					<TabsContent value="attractions" className="mt-4">
						<div className="grid grid-cols-1 gap-4">
							<PlaceCard
								id="3"
								name="Art Museum"
								category="Attraction"
								image="https://www.grouptours.net/wp-content/uploads/2016/07/The_Metropolitan_Museum_of_Art.jpg"
								rating={4.7}
								distance="1.2 miles"
							/>
							<PlaceCard
								id="4"
								name="Historic Downtown"
								category="Attraction"
								image="https://www.boston-discovery-guide.com/image-files/800-old-state-house-historic-boston-3x2.jpg"
								rating={4.5}
								distance="0.7 miles"
							/>
							<PlaceCard
								id="5"
								name="Botanical Gardens"
								category="Attraction"
								image="https://images.travelandleisureasia.com/wp-content/uploads/sites/3/2023/05/02052513/Botanical-Gardens.jpg"
								rating={4.9}
								distance="2.3 miles"
							/>
						</div>
					</TabsContent>
					<TabsContent value="restaurants" className="mt-4">
						<div className="grid grid-cols-1 gap-4">
							<PlaceCard
								id="6"
								name="Seaside Grill"
								category="Restaurant"
								image="https://bonjournewyork.fr/wp-content/uploads/2020/06/visiter-times-square.jpg"
								rating={4.6}
								distance="1.5 miles"
							/>
							<PlaceCard
								id="7"
								name="Urban Cafe"
								category="Restaurant"
								image="https://c8.alamy.com/comp/H8M938/statue-of-liberty-sculpture-on-liberty-island-in-new-york-harbor-in-H8M938.jpg"
								rating={4.4}
								distance="0.3 miles"
							/>
							<PlaceCard
								id="8"
								name="Pasta Palace"
								category="Restaurant"
								image="https://rare-gallery.com/uploads/posts/795590-Brooklyn-Bridge-East-River-Bridges-USA-New-York-City.jpg"
								rating={4.8}
								distance="1.8 miles"
							/>
						</div>
					</TabsContent>
					<TabsContent value="activities" className="mt-4">
						<div className="grid grid-cols-1 gap-4">
							<PlaceCard
								id="9"
								name="Kayak Rentals"
								category="Activity"
								image="https://www.tripsavvy.com/thmb/RVn8V2UfNeqiZuWcjvGOFV7Y7B4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/Mikimoto-new-york-5a903f1f1f4e1300361ae68f.jpg"
								rating={4.7}
								distance="3.2 miles"
							/>
							<PlaceCard
								id="10"
								name="Bike Tours"
								category="Activity"
								image="https://bonjournewyork.fr/wp-content/uploads/2020/12/grand-central-terminal.jpg"
								rating={4.9}
								distance="0.5 miles"
							/>
							<PlaceCard
								id="11"
								name="Rock Climbing"
								category="Activity"
								image="https://www.wallpaperflare.com/static/953/630/549/new-york-usa-skyscrapers-top-view-wallpaper.jpg"
								rating={4.5}
								distance="4.1 miles"
							/>
						</div>
					</TabsContent>
				</Tabs>
			</section>
		</main>
	);
}
