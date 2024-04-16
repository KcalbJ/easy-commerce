import Link from "next/link";
import Footer from "./ui/footer/footer";
import Navbar from "./ui/header/navbar";
import Image from "next/image";
import ProductCard from "./ui/products/productCard";

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen flex-col bg-white">
      <Navbar />
      <section className="flex items-center py-12 md:py-24 lg:py-32 mx-auto  ">
        <div className="container flex items-center gap-10 px-4 md:px-6">
          <div className="grid gap-4 md:gap-6">
            <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl/4xl">
              HOT OFF THE PRESS
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Introducing our newest and freshest beans.
            </p>
            <Link
              href="/beans"
              className="relative  inline-block px-4 py-2 font-medium group"
            >
              <span className="absolute inset-0 w-[122px] h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-[122px] h-full bg-white border-2 border-black group-hover:bg-black"></span>
              <span className="relative text-black group-hover:text-white">
                SHOP NOW
              </span>
            </Link>
          </div>
          <Image
            alt="Hero"
            className="aspect-video overflow-hidden rounded-lg object-cover object-center hidden md:block "
            height="500"
            src="/coffee-main.jpg"
            width="500"
          />
          <Image
            alt="picture of coffee bean"
            className=" rounded-lg aspect-[4/3] object-cover object-center  block md:hidden "
            height="1"
            src="/coffee-maing-mobile.jpeg"
            width="180"
          />
        </div>
      </section>
      <section className="flex md:flex-row flex-col gap-4 mb-14 border-t-2 pt-14 ">
        <ProductCard />
        <ProductCard/>
        <ProductCard/>
      </section>
      <Footer />
    </main>
  );
}
