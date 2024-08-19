import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"


const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
            <svg className="fill-current text-gray-900"
                xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <title>menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
            <nav>
                <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                   <li><a className="md:p-4 py-3 px-0 block" href="#">Accueil</a></li>
                   <li><a className="md:p-4 py-3 px-0 block" href="#">A propos</a></li>
                    <li><a className="md:p-4 py-3 px-0 block" href="#">Actualités</a></li>
                    <li><a className="md:p-4 py-3 px-0 block" href="#">Activités</a></li>
                    <li><a className="md:p-4 py-3 px-0 block" href="#">Evènements</a></li>
                    <Separator className="border border-grey-50" />
                    <li><a className="md:p-4 py-3 px-0 block md:mb-0 mb-2" href="#">Contactez-nous</a></li>
                    <li>
                      <a className="md:p-4 py-3 px-0 block btn bg-red-500 hover:bg-red-700 text-white rounded-sm text-center" href="#">
                        Faire un don
                      </a>
                    </li>
                </ul>
            </nav>
        </SheetContent>
      </Sheet>
    </nav>
  )
}

export default MobileNav