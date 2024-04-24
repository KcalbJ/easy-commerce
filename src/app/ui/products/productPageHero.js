import Image from "next/image";

function ProductPageHero({image, title}) {
  return (
    <div className="relative max-w-screen-xl mx-auto">
      <Image
            alt="picture of coffee beans"
            className=" mx-auto object-cover object-center  aspect-video z-10 "
            height="200"
            src={image}
            width="1340"
          />
      <h2 className="ml-9 mb-8 text-3xl z-50 bottom-0 left-0 absolute">{title}</h2>
      </div>
  )
}

export default ProductPageHero