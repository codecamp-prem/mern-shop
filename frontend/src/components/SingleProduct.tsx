import { Link } from "react-router-dom";

type ProductProps = {
  id: number;
  name: string;
  href: string;
  price: number;
  description: string;
  options: string;
  imageSrc: string;
  imageAlt: string;
};
const SingleProduct = ({ ...product }: ProductProps) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
      <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.imageSrc}
            alt={product.imageAlt}
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
        <div className="flex flex-1 flex-col justify-end">
          <p className="text-sm italic text-gray-500">{product.options}</p>
          <p className="text-base font-medium text-gray-900">{product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
