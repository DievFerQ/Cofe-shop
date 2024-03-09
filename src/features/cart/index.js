import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  useEffect(() => {
    const total = cart.reduce((acc, item) => {
      return acc + (item.price * item.quantity)
    }, 0)
    setTotal(total)
  }, [cart])

  const handleInc = (id) => {
    const updatedCart = cart.map(item => {
      if(item.id === id) {
        return {
          ...item, 
          quantity: item.quantity + 1
        }
      }
      return item
    })
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    navigate('/cart')
  }

  const handleDec = (id) => {
    const updatedCart = cart.map(item => {
      if(item.id === id && item.quantity > 1) {
        return {
          ...item, 
          quantity: item.quantity - 1
        }
      }
      return item
    })
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    navigate('/cart')
  }

  const removeProd = (id) => {
    const updatedCart = cart.filter(item => item.id !== id)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    navigate('/cart')
  }

  if (cart.length === 0){
    return <div className="h-[55vh] flex justify-center items-center text-4xl"> Cart is Empty</div>
  }

  return (
    <>
      <div className="container mx-auto mt-10 ">
        <div className="flex shadow-sm my-10">
          <div className="w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h2 className="font-semibold text-2xl">Shopping Cart</h2>
              <h3 className="font-semibold text-2xl">{cart?.length} Items</h3>
            </div>
            <div className="flex mt-10 mb-5">
              <h4 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                Product Details
              </h4>
              <h4 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                Quantity
              </h4>
              <h4 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                Price
              </h4>
              <h4 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                Total
              </h4>
            </div>
            {cart?.map((item) => {
              return (
                <>
                  <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                    <div className="flex w-2/5">
                      <div className="w-20">
                        <img
                          className="object-cover object-center w-full h-full"
                          src={item?.image_url}
                          alt={item?.name}
                        />
                      </div>
                      <div className="flex flex-col justify-between ml-4 flex-grow">
                        <span className="font-bold text-sm">{item?.name}</span>
                        <span className="text-yellow-700 text-xs">{item?.region}</span>
                        <div
                          className="font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer"
                          onClick={() => removeProd(item?.id)}
                        >
                          Remove
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center w-1/5">
                      <svg
                        className="fill-current text-gray-600 w-3 cursor-pointer"
                        viewBox="0 0 448 512"
                        onClick={() => handleDec(item?.id)}
                      >
                        <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z "></path>
                      </svg>
                      <input
                        className="mx-2 border text-center w-8"
                        type="text"
                        value={item?.quantity}
                      />
                      <svg
                        className="fill-current text-gray-600 w-3 cursor-pointer"
                        viewBox="0 0 448 512"
                        onClick={() => handleInc(item?.id)}
                      >
                        <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                      </svg>
                    </div>
                    <span className="text-center w-1/5 font-semibold text-sm">
                      ${item?.price}
                    </span>
                    <span className="text-center w-1/5 font-semibold text-sm">
                      ${item?.price * item?.quantity}
                    </span>
                  </div>
                </>
              );
            })}

            <Link
              to={"/allProducts"}
              className="flex font-semibold text-yellow-600 text-sm mt-10"
            >
              <svg
                className="fill-current mr-2 text-yellow-600 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </Link>
          </div>
          <div id="summary" className="w-1/4 px-8 py-10">
            <h1 className="font-semibold text-2xl border-b pb-8">
              Order Summary
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">Items</span>
              <span className="font-semibold text-sm">${total?.toFixed(2)}</span>
            </div>
            <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase">
                Shipping
              </label>
              <select className="block p-2 text-gray-600 w-full  text-sm rounded-lg border border-gray-900">
                <option>International shipping - $50.00</option>
                <option>Standard shipping - $10.00</option>
                <option>Local shipping - $5.00</option>
              </select>
            </div>
            <div className="py-10">
              <label
                for="promo"
                className="font-semibold inline-block mb-3 text-sm uppercase"
              >
                Promo Code
              </label>
              <input
                type="text"
                id="promo"
                placeholder="Enter your code"
                className="p-2 text-sm w-full border rounded-lg  border-gray-900"
              />
            </div>
            <button className="bg-yellow-600 hover:bg-yellow-700 rounded-lg px-5 py-2 text-sm text-white uppercase">
              Apply
            </button>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>${(total + 10).toFixed(2)}</span>
              </div>
              <button className="bg-yellow-600 font-semibold hover:bg-yellow-700 py-3 text-sm rounded-lg  text-white uppercase w-full">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
