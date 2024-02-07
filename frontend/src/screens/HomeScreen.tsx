import axios from "axios";
import { useEffect, useState } from "react";
import SingleProduct, { ProductProps } from "../components/SingleProduct";

const HomeScreen = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");

      setProducts(data);
    };

    fetchProducts();
  }, []);

  if (!products) return null;

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only sm:not-sr-only">Latest Products</h2>

          <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
            {products.map((product: ProductProps) => (
              <SingleProduct {...product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
