'use client'
import ProductPageCard from "@/app/ui/products/productPageCard";
import { usePathname } from 'next/navigation';
import productsData from "../../../lib/products.json"

function Page() {
  const pathname = usePathname();

  const products = productsData.products;
  const id = pathname.slice(10)
  
  const indivdualProduct = products.find((product) => product.id === id);
  
    return (
      <div>
    <ProductPageCard product={indivdualProduct}/>

      </div>
      )
    }
  export default Page;
  