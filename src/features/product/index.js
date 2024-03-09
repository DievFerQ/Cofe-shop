import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { ToastContainer, toast } from "react-toastify";
//import { ToastContainer } from "react-toastr";


const Product = () => {

  
  const { id } = useParams();
  const navigate = useNavigate()
  const [product, setProduct] = useState({})
  
  


  useEffect(() => {
    fetch(`https://fake-coffee-api.vercel.app/api/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setProduct(data[0]);
        }
      });
  }, [id]);

  const handleCart  = (product, redirect) => {
    console.log(product)
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const isProductExist = cart.find(item => item.id === product.id)
    if (isProductExist){
      const updatedCart = cart.map(item => {
        if(item.id === product.id ){
          return {
            ...item, 
            quantity: item.quantity + 1
          }
        }
        return item
      })
      localStorage.setItem('cart', JSON.stringify(updatedCart))
    } else {
      localStorage.setItem('cart', JSON.stringify([...cart, {...product, quantity:1}]))
    }
    
    if(redirect) {
      navigate('/cart')
    }
  }

  const notify = () => {
    toast.success("Product added!");
  }

  const handleAddToCartAndNotify = () => {
    notify();
    handleCart(product);
  };

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      {!Object.keys(product).length > 0 && <div className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center"><ClipLoader color={'#e9a125'} size={100} /></div>}
      {product && (
        <div className="container px-5 py-16 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 text-center">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {product?.region}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                {product?.name}
              </h1>
              <div className="flex mb-4">
                <a href="#" className="flex-grow text-yellow-800 border-b-2 border-yellow-800 py-2 text-lg px-1">
                  Description
                </a>
              </div>
              <p className="leading-relaxed mb-4">{product?.description}</p>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Weight</span>
                <span className="ml-auto text-gray-900">{product?.weight}gm</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Flavor Profile</span>
                <span className="ml-auto text-gray-900">{product?.flavor_profile}</span>
              </div>
              <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                <span className="text-gray-500">Roast Level</span>
                <span className="ml-auto text-gray-900">{product?.roast_level}</span>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${product?.price}
                </span>
                
                <ToastContainer />
                <button className="flex ml-auto text-white bg-yellow-600 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-700 rounded" onClick={handleAddToCartAndNotify}>
                  Add to cart
                </button>
                <Link to={'/allProducts'} className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={product?.image_url}
            />
          </div>
        </div>
      )}
      
    </section>
  );
};

export default Product;




