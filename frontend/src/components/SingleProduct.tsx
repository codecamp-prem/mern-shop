import { Link } from "react-router-dom";
import Rating from "./Rating";

export type ProductProps = {
  id: string;
  name: string;
  image: string;
  brand: string;
  category: string;
  description: string;
  rating: number;
  numReviews: number;
  price: number;
  countInStock: number;
};
const SingleProduct = ({ ...product }: ProductProps) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
      <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.image.split("/")[2]}
            className="h-full w-full object-cover object-center sm:h-full sm:w-full"
          />
        </Link>
      </div>
      <div className="flex flex-1 flex-col space-y-2 p-4">
        <h3 className="text-sm font-medium text-gray-900">
          <Link to={`/product/${product.id}`}>
            <span aria-hidden="true" className="absolute inset-0" />
            {product.name}
          </Link>
        </h3>
        <p className="text-sm text-gray-500">{product.description}</p>
        <div className="flex flex-1 justify-between items-end">
          <div>
            <p className="text-sm italic text-gray-500">{product.brand}</p>
            <p className="text-base font-medium text-gray-900">
              {product.price}
            </p>
          </div>
          <div>
            <div className="text-sm italic text-gray-500">
              <div className="flex">
                <Rating rating={product.rating} />
              </div>
            </div>
            <p className="text-base font-medium text-gray-900">
              ({product.numReviews} Reviews)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
