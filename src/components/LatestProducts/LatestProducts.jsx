import { use } from 'react';
import Product from '../Product/Product';

const LatestProducts = ({ latestProductPromise }) => {
  const products = use(latestProductPromise);

  //   console.log(products);

  return (
    <div className="bg-[#F5F5F5] py-20">
      <div className="max-w-[1230px] mx-auto ">
        <h2 className="text-5xl text-center font-bold mb-10">
          Latest <span className="linear-color bg-clip-text text-transparent">Products</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestProducts;
