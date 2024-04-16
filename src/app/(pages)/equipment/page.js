
import ProductPageHero from "@/app/ui/products/productPageHero";
import ProductPageSort from "@/app/ui/products/productPageSort";


function Page() {


  return (
    <main className="h-screen w-screen">
      <ProductPageHero image="/equipment.jpeg" title="EQUIPMENT."/>
      <div className="max-w-[68.75rem] mx-auto border-t-2 mt-6 flex justify-between flex-row ">
        <p className="mt-8 ml-9 text-xl">Prodcuts(1)</p>
         <ProductPageSort/>
      </div>
    </main>
  );
}

export default Page;
