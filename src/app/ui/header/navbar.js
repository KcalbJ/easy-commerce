import Link from 'next/link';
import { SlBasketLoaded } from "react-icons/sl";


function Navbar() {
  return (
    <header className="border-b-4 w-screen border-black py-2 justify-center ">
    <div className="container flex items-center justify-between mx-auto h-14 px-4 sm:px-6">
    <Link  href="/">
        <h1 className="font-bold  bg-white border-2 text-black border-black md:text-3xl text-s px-4 shadow-[5px_5px_0px_0px_rgba(156,111,68)]">BEANLY</h1>
        
      </Link>
      <nav className=" gap-4 text-xs md:text-lg font-medium flex">
        <Link className="" href="/beans">
          BEANS
        </Link>
        <Link className="" href="/espresso">
          ESPRESSO
        </Link>
        <Link className="" href="/equipment">
          EQUIPMENT
        </Link>
        <Link className="" href="/subscriptions">
          SUBSCRIPTIONS
        </Link>
      </nav>
      
      <div className="flex items-center gap-4">
        <Link className="border-gray-200 w-8 h-8 dark:border-gray-800" href="#">
        <SlBasketLoaded className="w-8 h-8" />
          <span className="sr-only">View basket</span>
        </Link>
      </div>
    </div>
  </header>
  )
}

export default Navbar