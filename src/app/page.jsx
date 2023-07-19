import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack} from "lucide-react"
import Image from "next/image"

export default function Home() {
    return (
        <div className="h-screen flex flex-col">
            <div className="flex flex-1">
                <aside className="w-72 bg-zinc-950 p-6">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>

                    </div>
                    <nav className="space-y-5 mt-10">
                        <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
                            <HomeIcon/>
                            Home
                        </a>
                        <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
                            <Search/>
                            Search
                        </a>
                        <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
                            <Library/>
                            Your Library
                        </a>
                    </nav>
                    <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
                        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Hot Hits Brasil</a>
                        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Aniver Funk</a>
                        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">My Playlist #14</a>
                        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Top Brasil</a>
                    </nav>
                </aside>
                <main className="flex-1 p-6">
                    <div className="felx items-center gap-4">
                        <button className="rounded-full bg-black/40 p-1">
                            <ChevronLeft/>
                        </button>
                        <button className="rounded-full bg-black/40 p-1">
                            <ChevronRight/>
                        </button>

                        <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

                        <div className="grid grid-cols-3 gap-4 mt-4">
                            <a href="#" className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
                                <Image src="/album.jpg" width={104} height={104} alt="Capa do album Evolve da banda Imagine Dragons"/>
                                <strong>Evolve</strong>
                                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                                    <Play fill="bg-black"/>
                                </button>
                            </a>
                            <a href="#" className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
                                <Image src="/album.jpg" width={104} height={104} alt="Capa do album Evolve da banda Imagine Dragons"/>
                                <strong>Evolve</strong>
                                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                                    <Play fill="bg-black"/>
                                </button>
                            </a>
                            <a href="#" className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
                                <Image src="/album.jpg" width={104} height={104} alt="Capa do album Evolve da banda Imagine Dragons"/>
                                <strong>Evolve</strong>
                                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                                    <Play fill="bg-black"/>
                                </button>
                            </a>
                            <a href="#" className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
                                <Image src="/album.jpg" width={104} height={104} alt="Capa do album Evolve da banda Imagine Dragons"/>
                                <strong>Evolve</strong>
                                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                                    <Play fill="bg-black"/>
                                </button>
                            </a>
                            <a href="#" className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
                                <Image src="/album.jpg" width={104} height={104} alt="Capa do album Evolve da banda Imagine Dragons"/>
                                <strong>Evolve</strong>
                                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                                    <Play fill="bg-black"/>
                                </button>
                            </a>
                            <a href="#" className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
                                <Image src="/album.jpg" width={104} height={104} alt="Capa do album Evolve da banda Imagine Dragons"/>
                                <strong>Evolve</strong>
                                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                                    <Play fill="bg-black"/>
                                </button>
                            </a>
                            
                        </div>

                        <h1 className="font-semibold text-2xl mt-10">Made for Julio Cardoso</h1>

                        <div className="grid grid-cols-8 gap-4 mt-4">
                            <a href="" className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
                                <Image src="/album.jpg"  className="w-full" width={120} height={120} alt="Capa do album Evolve da banda Imagine Dragons"/>                             
                                <strong className="font-semibold">Daily Mix 1</strong>
                                <span className="text-xm text-zinc-400">Wallows, COIN, girl in red and more</span>
                            </a>
                            <a href="" className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
                                <Image src="/album.jpg"  className="w-full" width={120} height={120} alt="Capa do album Evolve da banda Imagine Dragons"/>                             
                                <strong className="font-semibold">Daily Mix 1</strong>
                                <span className="text-xm text-zinc-400">Wallows, COIN, girl in red and more</span>
                            </a>
                            <a href="" className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
                                <Image src="/album.jpg"  className="w-full" width={120} height={120} alt="Capa do album Evolve da banda Imagine Dragons"/>                             
                                <strong className="font-semibold">Daily Mix 1</strong>
                                <span className="text-xm text-zinc-400">Wallows, COIN, girl in red and more</span>
                            </a>
                            <a href="" className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
                                <Image src="/album.jpg"  className="w-full" width={120} height={120} alt="Capa do album Evolve da banda Imagine Dragons"/>                             
                                <strong className="font-semibold">Daily Mix 1</strong>
                                <span className="text-xm text-zinc-400">Wallows, COIN, girl in red and more</span>
                            </a>
                            <a href="" className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
                                <Image src="/album.jpg"  className="w-full" width={120} height={120} alt="Capa do album Evolve da banda Imagine Dragons"/>                             
                                <strong className="font-semibold">Daily Mix 1</strong>
                                <span className="text-xm text-zinc-400">Wallows, COIN, girl in red and more</span>
                            </a>
                            
                        </div>

                    </div>
                </main>
            </div>
            <footer className="bg-zinc-800 border-t border-zinc-700 p-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Image src="/album.jpg" width={56} height={56} alt="Capa do album Evolve da banda Imagine Dragons"/>      
                    <div className="flex flex-col">
                        <strong className="font-normal">Tunder</strong>
                        <span className="text-xs text-zinc-400">Imagine Dragons</span>
                    </div>                       
                </div>
                <div className="flex flex-col items-center">
                    <div>
                        <Shuffle/>
                        <SkipBack/>
                    </div>
                    <div>

                    </div>
                </div>
                <div></div>
            </footer>
        </div>

    )
}


// https://www.youtube.com/watch?v=YVI-q3idGiM minuto 42:54
