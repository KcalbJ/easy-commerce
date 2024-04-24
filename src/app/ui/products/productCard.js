import Link from "next/link";
import Image from "next/image";
function ProductCard({ product }) {
  const { id, title, imageSrc, shortDescription, price } = product;
  const productPageUrl = `products/${id}`

  return (
    <section className="flex flex-col mb-4md:max-w-md max-w-xs mx-auto">
      <Image
        alt="Product Image"
        className="aspect-square object-cover border"
        height={480}
        src={imageSrc}
        width={450}
      />

      <div className="gap-1 text-left ml-2">
        <h2>{title}</h2>
        <p>{shortDescription}</p>
        <div className="flex flex-row justify-between">
          <p>{price}</p>
          <Link href={productPageUrl} className="text-right">
            View
          </Link>
        </div>
      </div>
    </section>
  );
}


export default ProductCard;
