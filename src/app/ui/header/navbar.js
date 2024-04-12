import Link from 'next/link';

function Navbar() {
  return (
    <header className="border-b-4 w-full  border-black py-2  ">
    <div className="container flex items-center justify-between h-14 px-4 sm:px-6">
      <nav className="hidden gap-4 text-sm font-medium lg:flex">
        <Link className="underline underline-offset-4" href="/beans">
          BEANS
        </Link>
        <Link className="underline underline-offset-4" href="/espresso">
          ESPRESSO
        </Link>
        <Link className="underline underline-offset-4" href="/equipment">
          EQUIPMENT
        </Link>
        <Link className="underline underline-offset-4" href="/subscriptions">
          SUBSCRIPTIONS
        </Link>
      </nav>
      <Link  href="/">
        <h1 className="font-bold  bg-white border-2 text-black border-black md:text-3xl text-s px-4 shadow-[5px_5px_0px_0px_rgba(156,111,68)]">BEANLY</h1>
        
      </Link>
      <div className="flex items-center gap-4">
        <form className="flex items-center gap-2 ">
          <input
            className="w-[180px] border-2 sm:w-[250px] md:w-[300px] lg:w-[250px] xl:w-[300px]"
            placeholder="Search"
            type="search"
          />
        </form>
        <Link className="rounded-full border border-gray-200 w-8 h-8 overflow-hidden dark:border-gray-800" href="#">
          <img
            alt="Avatar"
            className="rounded-full"
            height="32"
            src="/placeholder.svg"
            style={{
              aspectRatio: "32/32",
              objectFit: "cover",
            }}
            width="32"
          />
          <span className="sr-only">View profile</span>
        </Link>
      </div>
    </div>
  </header>
  )
}

export default Navbar