import { Link } from 'react-router';

const Product = ({ product }) => {
  const { _id, title, price_min, price_max, image } = product;

  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className="px-4 pt-4">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl w-full h-52 object-cover"
          onError={(e) => {
            e.target.onerror = null; // prevent infinite loop
            e.target.style.display = 'none';
            e.target.insertAdjacentHTML(
              'afterend',
              `<div class='bg-gray-500 w-full h-52 rounded-md flex items-center justify-center text-white text-sm'>
          No Image
        </div>`,
            );
          }}
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title font-medium text-2xl">{title}</h2>
        <div className="linear-color bg-clip-text text-transparent text-xl font-semibold">
          $ {price_max} - {price_min}
        </div>
        <div className="card-actions">
          <Link
            to={`/productDetails/${_id}`}
            className="btn w-full border border-[#632EE3] linear-color bg-clip-text text-transparent"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
