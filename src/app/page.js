import Product from "@/Components/Product";
import SummerPromoBanner from "@/Components/SummerPromoBanner";
import Image from "next/image";

export default async function Home() {
    
  const res =   await fetch('http://localhost:3000/data.json')

  const products = await  res.json();

  console.log(products)

  const frontLineProduct = products.slice(0, 3);

  return (
    <>
    <SummerPromoBanner/>
   <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
    {
      frontLineProduct.map((product)=> <Product key={product.id} product={product} />)
    }
   </div>
   </>
  );
}
