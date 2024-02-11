import { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveShippingAddress } from "../store/slices/cartSlice";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const ShippingScreen = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress?.address || "");
  const [city, setCity] = useState(shippingAddress?.city || "");
  const [postalCode, setPostalCode] = useState(
    shippingAddress?.postalCode || ""
  );
  const [country, setCountry] = useState(
    shippingAddress?.country || "United States"
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    navigate("/payment");
  };
  return (
    <>
      <div className="bg-gray-50">
        <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-12 lg:max-w-7xl lg:px-28">
          <form onSubmit={submitHandler}>
            <div className="space-y-12 sm:space-y-16">
              <div className="mt-10 border-t border-gray-200 pt-10">
                <h2 className="text-lg font-medium text-gray-900">
                  Shipping information
                </h2>

                <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Address
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="address"
                        id="address"
                        autoComplete="street-address"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700"
                    >
                      City
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="postal-code"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Postal code
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="postalCode"
                        id="postalCode"
                        autoComplete="postal-code"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Country
                    </label>
                    <div className="mt-1">
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                      >
                        <option value="United States">United States</option>
                        <option value="Canada">Canada</option>
                        <option value="Mexico">Mexico</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <button
                  type="submit"
                  className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                  Continue ➡️➡️➡️
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ShippingScreen;
