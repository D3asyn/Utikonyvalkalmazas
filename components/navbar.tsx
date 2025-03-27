import Link from "next/link"
import { Search, User, Home } from "lucide-react"

export function Navbar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 border-t bg-white shadow-lg z-10">
      <div className="flex items-center justify-around p-2">
        <Link href="/" className="flex flex-col items-center p-2">
          <Home className="h-5 w-5" />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link href="/search" className="flex flex-col items-center p-2">
          <Search className="h-5 w-5" />
          <span className="text-xs mt-1">Search</span>
        </Link>
        <Link href="/profile" className="flex flex-col items-center p-2">
          <User className="h-5 w-5" />
          <span className="text-xs mt-1">Profile</span>
        </Link>
      </div>
    </div>
  )
}

