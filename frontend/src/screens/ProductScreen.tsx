import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Rating from "../components/Rating";
import { addToCart } from "../store/slices/cartSlice";
import { useGetProductByIdQuery } from "../store/slices/productsApiSlice";

const ProductScreen = () => {
  const { id: productId } = useParams();
  const { data: product, isLoading, error } = useGetProductByIdQuery(productId);

  const [productQty, setProductQty] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, productQty }));
    navigate("/cart");
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="info">{error?.data?.message || error.error}</Message>
      ) : (
        <div className="flex flex-col relative container mx-auto p-6">
          <div className="">
            <Link to="/" className="hover:cursor-pointer">
              <span className="hover:bg-cyan underline">Go Back</span>
            </Link>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-2 lg:space-x-4 m-2 space-y-3 md:space-y-0">
            <div className="w-full md:w-[40%]">
              <img
                src={product.image}
                alt={product.image.split("/")[2]}
                className="w-full rounded-xl m-auto pointer-events-none transition duration-300 hover:cursor-pointer hover:shadow-xl"
              />
            </div>
            <div className="w-full md:w-[60%] items-start">
              <div>{product.name}</div>
              <div className="flex">
                <Rating rating={product.rating} />
              </div>
              <div>({product.numReviews} Reviews)</div>
              <div>{product.description}</div>

              <div className="">
                <div>Price: ${product.price}</div>
                <div>
                  Status:{" "}
                  {product.countInStock > 0
                    ? `${product.countInStock} in Stock`
                    : `Out of Stock`}
                </div>
              </div>
              <div className="flex space-x-4 items-center">
                {product.countInStock > 0 && (
                  <>
                    <label
                      htmlFor="productQty"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Quantity
                    </label>
                    <select
                      id="productQty"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value={productQty}
                      onChange={(e) => setProductQty(Number(e.target.value))}
                    >
                      {[...Array(product.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </>
                )}
                <button
                  className="py-2 px-4 rounded-md border bg-gray-200 hover:bg-cyan"
                  disabled={product.countInStock <= 0}
                  type="button"
                  onClick={addToCartHandler}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductScreen;
