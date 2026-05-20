import Image from "next/image";
import Link from "next/link";


const Product = ({ product }) => {
    return (
      <div className="card bg-base-100 w-96 shadow-sm relative my-3">
  <figure>
    <Image
      src={product.image}
      alt={product.name}
      width={500}
      height={500}
         className="w-full h-64 object-cover"
    />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{product.name}</h2>
   <div className="flex items-center justify-between">
    <p className="text-lg font-semibold text-green-600">${product.price}</p> 
      
    <p className="text-sm text-gray-500">{product.rating} ⭐</p>
      
   </div>
    <div className="card-actions w-full">
      <Link href={`/products/${product.id}`} className="btn btn-primary">
        View Details
      </Link>
    </div>
    
  </div>
</div>
    );
};

export default Product;