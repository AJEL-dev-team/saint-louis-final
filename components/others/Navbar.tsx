import React from 'react'
import MobileNav from './MobileNav'
import { Separator } from '../ui/separator'


const Navbar = () => {
  return (
    <header className="lg:px-16 px-4 bg-white flex flex-wrap items-center py-4 shadow-md">
        <div className="flex-1 flex justify-between items-center">
            <a href="#" className="text-xl">Saint-Louis</a>
        </div>

        <label className="pointer-cursor md:hidden block">
            <MobileNav/>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
            <nav>
                <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                    <li><a className="md:p-4 py-3 px-0 block hover:text-red-500 hover:font-semibold cursor-pointer transition-all ease-in-out" href="#">Accueil</a></li>
                    <li><a className="md:p-4 py-3 px-0 block hover:text-red-500 hover:font-semibold cursor-pointer transition-all ease-in-out" href="#">A propos</a></li>
                    <li><a className="md:p-4 py-3 px-0 block hover:text-red-500 hover:font-semibold cursor-pointer transition-all ease-in-out" href="#">Actualités</a></li>
                    <li><a className="md:p-4 py-3 px-0 block hover:text-red-500 hover:font-semibold cursor-pointer transition-all ease-in-out" href="#">Activités</a></li>
                    <li><a className="md:p-4 py-3 px-0 block hover:text-red-500 hover:font-semibold cursor-pointer transition-all ease-in-out" href="#">Evènements</a></li>
                    <li><a className="md:p-4 py-3 px-0 block md:mb-0 mb-2 hover:text-red-500 hover:font-semibold cursor-pointer transition-all ease-in-out" href="#">Contactez-nous</a></li>
                    <Separator orientation='vertical' className="border border-gray-200 h-5"/>
                    <li><a className="md:p-4 py-3 px-0 block hover:text-red-500 hover:font-semibold cursor-pointer transition-all ease-in-out" href="#">Faire un don</a></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Navbar