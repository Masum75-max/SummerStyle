import Image from 'next/image';
import React from 'react';

const ProductDetailpage = async({ params }) => {
    const { id } = await params;
    const res = await fetch(`${process.env.BETTER_AUTH_URL}/data.json`);

    const products = await res.json();
    console.log(products)
    console.log(id)

    const singleProduct = products.find(p => p.id === parseInt(id));

    console.log(singleProduct)

    return (
       <div className="card bg-base-100  shadow-sm my-4 justify-self-center">
  <figure>
    <Image
      src={singleProduct.image}
      alt={singleProduct.name}
      width={500}
      height={300}
       />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {singleProduct.name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{singleProduct.description}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{singleProduct.category}</div>
      <div className="badge badge-outline">${singleProduct.price.toFixed(2)}</div>
    </div>
  </div>
</div>
    );
};

export default ProductDetailpage;