import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "../components/Rating";
import { ProductProps } from "../components/SingleProduct";

const ProductScreen = () => {
  const [product, setProduct] = useState<ProductProps>();
  const { id: productId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${productId}`);
      setProduct(data);
    };
    fetchProduct();
  }, [productId]);

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
