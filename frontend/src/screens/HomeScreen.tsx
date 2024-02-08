import Loader from "../components/Loader";
import Message from "../components/Message";
import SingleProduct, { ProductProps } from "../components/SingleProduct";
import { useGetProductsQuery } from "../store/slices/productsApiSlice";

const HomeScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery("");

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="info">{error?.data?.message || error.error}</Message>
      ) : (
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 pb-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only sm:not-sr-only">Latest Products</h2>

            <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
              {products.map((product: ProductProps) => (
                <SingleProduct {...product} key={product.id} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomeScreen;
