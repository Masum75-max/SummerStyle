import Product from '@/Components/Product';
import React from 'react';
import products from '../../../../public/data.json';
const page =  async() => {

    

    
    return (
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  my-8">
    {
      products.map((product)=> <Product key={product.id} product={product} />)
    }
   </div>
    );
};

export default page;