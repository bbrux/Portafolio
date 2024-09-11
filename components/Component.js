import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Menu, X, Facebook, Twitter, Instagram } from 'lucide-react'

export default function Component() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
    <div className="relative h-screen w-full overflow-hidden">
    <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/backg-PS0omXIhjmNgosxi7eOHX6K62ekCs9.png"
        alt="Floating island in a sunset sky"
        className="absolute inset-0 h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
    
    <header className="absolute top-0 left-0 right-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">BRIAN MEP</div>
        <div className="flex items-center space-x-4">
        <div className="hidden md:flex space-x-4">
            <a href="#" className="text-white hover:text-gray-300" aria-label="Facebook">
                <Facebook size={24} />
            </a>
            <a href="#" className="text-white hover:text-gray-300" aria-label="Twitter">
                <Twitter size={24} />
            </a>
            <a href="#" className="text-white hover:text-gray-300" aria-label="Instagram">
                <Instagram size={24} />
            </a>
            </div>
            <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            className="text-white hover:bg-white hover:bg-opacity-20"
            >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
            </div>
        </div>
        <nav
        className={`absolute top-full left-0 right-0 bg-black bg-opacity-90 transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
        >
            <ul className="container mx-auto px-4 py-2 space-y-2">
            {['MUSIC', 'TOUR', 'VIDEOS', 'ABOUT', 'STORE'].map((item) => (
            <li key={item}>
                <Button
                variant="ghost"
                className="w-full justify-start text-lg font-semibold text-white hover:bg-white hover:bg-opacity-20 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
                >
                {item}
                </Button>
            </li>
            ))}
            </ul>
        </nav>
        </header>
        <main className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-wider text-white drop-shadow-lg">RISE AGAIN</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl text-white drop-shadow-md">New Single Out Now</p>
        <div className="flex flex-wrap justify-center gap-4">
        <Button className="bg-white text-black hover:bg-opacity-80 transition-colors duration-200 text-lg px-8 py-2">
            LISTEN NOW
        </Button>
        <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black transition-colors duration-200 text-lg px-8 py-2">
            WATCH VIDEO
        </Button>
        </div>
        </main>
    </div>
    )
}
