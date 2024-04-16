import Link from "next/link";
import Image from "next/image";
function ProductCard() {
  return (
    <>
      <div className="flex flex-col justify-around mx-auto items-center  shadow-[5px_5px_0px_0px_rgba(156,111,68)] border-black border-2 px-6 py-4 gap-4">
        <div className=" gap-1">
          <h2>Acme Prism T-Shirt</h2>
          <p>Modern, comfortable, stylish.</p>
        </div>
        <Link className="ml-auto  md:ml-auto text-right">
          View
        </Link>

        <div className=" items-center p-4">
          <Image
            alt="Product Image"
            className="aspect-square object-cover rounded-lg border"
            height={200}
            src="/placeholder.svg"
            width={200}
          />
        </div>
      </div>
    </>
  );
}

export default ProductCard;
