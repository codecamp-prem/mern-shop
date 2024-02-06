import { Link, useParams } from "react-router-dom";
import Rating from "../components/Rating";
import products from "../products";

const ProductScreen = () => {
  const { id: productId } = useParams();

  const product = products.find((p) => p.product_id === productId);

  if (!product) {
    return null;
  }
  return (
    <>
      <div className="flex flex-col relative container mx-auto p-6">
        <div className="">
          <Link to="/" className="hover:cursor-pointer">
            <span className="hover:bg-cyan underline">Go Back</span>
          </Link>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-2 lg:space-x-4 m-2 space-y-3 md:space-y-0">
          <div className="w-full md:w-[40%]">
            <img
              src={product?.imageSrc}
              alt={product?.imageSrc}
              className="w-full rounded-xl m-auto pointer-events-none transition duration-300 hover:cursor-pointer hover:shadow-xl"
            />
          </div>
          <div className="w-full md:w-[60%] items-start">
            <div>{product?.name}</div>
            <div className="flex">
              <Rating rating={product?.rating} />
            </div>
            <div>({product?.numReviews} Reviews)</div>
            <div>{product?.description}</div>

            <div className="">
              <div>Price: ${product?.price}</div>
              <div>Status: Out of stock</div>
            </div>
            <div>
              <button className="py-2 px-4 rounded-md border bg-gray-200 hover:bg-cyan">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductScreen;
