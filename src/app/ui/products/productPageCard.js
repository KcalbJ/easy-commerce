
import Image from "next/image";
import { MdStarRate } from "react-icons/md";

function ProductPageCard({product}) {
    const { id, title, imageSrc, shortDescription, price } = product;
    
    return (
        <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
          <div className="grid md:grid-cols-5 gap-3 items-start">
            <div className="hidden md:flex flex-col gap-3 items-start">
              <button className="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50">
                <img
                  alt="Preview thumbnail"
                  className="aspect-[5/6] object-cover"
                  height={120}
                  src="/placeholder.svg"
                  width={100}
                />
                <span className="sr-only">View Image 1</span>
              </button>
            </div>
            <div className="md:col-span-4">
              <img
                alt="Product Image"
                className="aspect-[2/3] object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
                height={900}
                src="/placeholder.svg"
                width={600}
              />
            </div>
          </div>
          <div className="grid gap-4 md:gap-10 items-start">
            <div className="hidden md:flex items-start">
              <div className="grid gap-4">
                <h1 className="font-bold text-3xl lg:text-4xl">{title}</h1>
                <div>
                  <p>{shortDescription}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-0.5">
                    <MdStarRate  className="w-5 h-5 fill-primary" />
                    <MdStarRate  className="w-5 h-5 fill-primary" />
                    <MdStarRate  className="w-5 h-5 fill-primary" />
                    <MdStarRate  className="w-5 h-5 fill-muted stroke-muted-foreground" />
                    <MdStarRate className="w-5 h-5 fill-muted stroke-muted-foreground" />
                  </div>
                </div>
              </div>
              <div className="text-4xl font-bold ml-auto">{price}</div>
            </div>
            <form className="grid gap-4 md:gap-10">
              <div className="grid gap-2">
                <label className="text-base" htmlFor="color">
                  Color
                </label>
                <radio className="flex items-center gap-2" defaultValue="black" id="color" />
              </div>
              <div className="grid gap-2">
                <label className="text-base" htmlFor="size">
                  Size
                </label>
                <radio className="flex items-center gap-2" defaultValue="m" id="size" />
              </div>
              <div className="grid gap-2">
                <label className="text-base" htmlFor="quantity">
                  Quantity
                </label>
                <select defaultValue="1" />
              </div>
              <button size="lg">Add to cart</button>
            </form>
          </div>
        </div>
      )
    }
  export default ProductPageCard;
  