import Link from "next/link";
import Image from "next/image";
import {
  ShoppingBag,
  Heart,
  Search,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Top Bar */}
      <div className="bg-black text-white py-2 text-center text-sm">
        Free shipping on all orders over $150
      </div>

      {/* Header */}
      <header className="border-b sticky top-0 z-50 bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="font-serif text-3xl font-bold">
            LEWIX
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#"
              className="text-sm font-medium hover:text-rose-600 transition-colors"
            >
              New Arrivals
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-rose-600 transition-colors"
            >
              Collections
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-rose-600 transition-colors"
            >
              Bestsellers
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-rose-600 transition-colors"
            >
              Sale
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                className="pl-10 w-[200px] rounded-full bg-gray-50 focus-visible:ring-rose-500"
                placeholder="Search..."
              />
            </div>
            <button className="p-2 hover:text-rose-600 transition-colors">
              <Heart className="h-5 w-5" />
            </button>
            <button className="p-2 hover:text-rose-600 transition-colors relative">
              <ShoppingBag className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-rose-500">
                3
              </Badge>
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative h-[600px] overflow-hidden">
          <div className="absolute inset-0 bg-neutral-100">
            <Image
              src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=2000&auto=format&fit=crop"
              alt="Elegant woman wearing Lewix shoes"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
            <div className="max-w-lg">
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
                Step into Elegance
              </h1>
              <p className="text-lg mb-8">
                Discover our new collection of handcrafted shoes designed for
                the modern woman.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-black hover:bg-gray-800 text-white rounded-none"
                >
                  Shop New Arrivals
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-black text-black hover:bg-black hover:text-white rounded-none"
                >
                  Explore Collections
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold mb-8 text-center">
              Shop by Category
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {categories.map((category) => (
                <Link
                  href="#"
                  key={category.name}
                  className="group relative h-[400px] overflow-hidden"
                >
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-serif font-bold mb-2">
                      {category.name}
                    </h3>
                    <div className="flex items-center text-sm font-medium">
                      <span>Shop Now</span>
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-serif font-bold">
                Featured Products
              </h2>
              <Link
                href="#"
                className="text-sm font-medium flex items-center hover:text-rose-600 transition-colors"
              >
                View All <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <div key={product.id} className="group">
                  <div className="relative aspect-square mb-4 bg-neutral-100 overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <Button
                      variant="secondary"
                      size="sm"
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white hover:bg-black hover:text-white rounded-none"
                    >
                      Quick View
                    </Button>
                    <button className="absolute top-4 right-4 p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-rose-50">
                      <Heart className="h-4 w-4 text-gray-600 hover:text-rose-600" />
                    </button>
                  </div>
                  <h3 className="font-medium mb-1">{product.name}</h3>
                  <div className="flex justify-between items-center">
                    <p className="font-semibold">${product.price}</p>
                    {product.colors > 1 && (
                      <span className="text-xs text-gray-500">
                        {product.colors} Colors
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Collection Banner */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="relative h-[400px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1518049362265-d5b2a6467637?q=80&w=2000&auto=format&fit=crop"
                alt="Summer Collection"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4">
                  <div className="max-w-lg text-white">
                    <h2 className="text-4xl font-serif font-bold mb-4">
                      Summer Collection 2025
                    </h2>
                    <p className="mb-6">
                      Discover our latest summer styles designed for comfort and
                      elegance.
                    </p>
                    <Button className="bg-white text-black hover:bg-black hover:text-white rounded-none">
                      Explore Collection
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="text-center">
                  <div className="flex justify-center mb-4">
                    <benefit.icon className="h-10 w-10" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Join Our Newsletter
            </h2>
            <p className="max-w-md mx-auto mb-8">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 rounded-none"
              />
              <Button className="bg-white text-black hover:bg-rose-500 hover:text-white rounded-none">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-serif text-xl font-bold mb-4">LEWIX</h3>
              <p className="text-gray-600 mb-4">
                Crafting elegant footwear for the modern woman since 2010.
              </p>
              <div className="flex space-x-4">
                {/* Social icons would go here */}
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-4">Shop</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    New Arrivals
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    Bestsellers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    Sale
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    Collections
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Help</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    Shipping & Returns
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    Size Guide
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">About</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Lewix. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-600 text-sm hover:text-black">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-600 text-sm hover:text-black">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Sample data
const categories = [
  {
    name: "Heels",
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Flats",
    image:
      "https://images.unsplash.com/photo-1560343776-97e7d202ff0e?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Boots",
    image:
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=800&auto=format&fit=crop",
  },
];

const products = [
  {
    id: 1,
    name: "Elegance Stiletto Heel",
    price: 189,
    colors: 3,
    image:
      "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Comfort Leather Flat",
    price: 129,
    colors: 2,
    image:
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Classic Ankle Boot",
    price: 219,
    colors: 1,
    image:
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Summer Sandal",
    price: 99,
    colors: 4,
    image:
      "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?q=80&w=600&auto=format&fit=crop",
  },
];

import { Truck, RefreshCw, ShieldCheck } from "lucide-react";

const benefits = [
  {
    title: "Free Shipping",
    description: "Free shipping on all US orders over $150",
    icon: Truck,
  },
  {
    title: "Easy Returns",
    description: "30-day return policy for unworn items",
    icon: RefreshCw,
  },
  {
    title: "Secure Checkout",
    description: "Your data is protected with SSL encryption",
    icon: ShieldCheck,
  },
];
