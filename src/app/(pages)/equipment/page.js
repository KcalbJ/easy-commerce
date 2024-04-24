import ProductPageHero from "@/app/ui/products/productPageHero";
import ProductPageSort from "@/app/ui/products/productPageSort";
import productsData from "../../lib/products.json"
import ProductCard from "@/app/ui/products/productCard";

function Page() {
  const products = productsData.products;
  const equipmentProducts = products.filter((product) => product.type === "equipment");

  return (
    <main className="h-full w-screen">
      <ProductPageHero image="/beans.jpeg" title="BEANS."/>
      <div className="max-w-[68.75rem] mx-auto border-t-2 mt-6 flex justify-between flex-row ">
        <p className="mt-8 ml-9 text-xl">Prodcuts({equipmentProducts.length})</p>
         <ProductPageSort/>
       
      </div>
      <div className="flex md:flex-row flex-col mb-14 flex-wrap gap-8 justify-center mx-auto max-w-7xl mt-8 ">
      {equipmentProducts.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
    </main>
  );
}

export default Page;