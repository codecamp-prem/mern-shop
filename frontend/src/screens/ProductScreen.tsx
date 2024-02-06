import { Link, useParams } from "react-router-dom";
import products from "../products";

const ProductScreen = () => {
  const { id: productId } = useParams();

  const product = products.find((p) => p.product_id === productId);

  return (
    <div className="m-4">
      <div>
        <Link to="/" className="hover:cursor-pointer">
          <span className="hover:bg-cyan underline">Go Back</span>
        </Link>
      </div>
      <div className="flex flex-col md:flex-row m-6 space-y-4 md:space-y-0 md:space-x-4 h-1/2">
        <div className="md:w-1/2">
          <img
            src={product?.imageSrc}
            alt={product?.imageSrc}
            className="object-cover object-center"
          />
        </div>
        <div className="md:w-1/2">
          <div className="flex flex-col">
            <div>{product?.name}</div>
            <div>{product?.rating}</div>
            <div>{product?.price}</div>
            <div>{product?.description}</div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <div>Price: {product?.price}</div>
              <div>Status: Out of stock</div>
            </div>
            <div>
              <button>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
