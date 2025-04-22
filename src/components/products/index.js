// import React from "react";
// import { Link } from "react-router-dom";

// const Products = ({ products = [] }) => {


  

//   return (
//     <>
//       <section className="text-gray-600 body-font">
//         <div className="container px-5 py-8 mx-auto">
//           <div className="flex flex-wrap -m-4">
//             {products.map((product) => {
//               console.log(product, "product");
//               const { id, title, price, description, image_url, region, name } =
//                 product;
//               return (
//                 <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
//                   <Link to={`/products/${id}`}>
//                     <a
//                       href="#"
//                       className="block relative h-48 rounded overflow-hidden"
//                     >
//                       <img
//                         alt={title}
//                         className="object-cover object-center w-full h-full block"
//                         src={image_url}
//                       />
//                     </a>
//                   </Link>
//                   <div className="mt-4 relative">
//                     <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
//                       {region}
//                     </h3>
//                     <h2 className="text-gray-900 title-font text-lg font-medium">
//                       {name}
//                     </h2>

//                     <div class="absolute inset-y-0 right-0 w-16 ...">
//                       <a href="#" class=" ml-4 flow-root lg:ml-6 ">
//                         <svg
//                           class="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke-width="1.5"
//                           stroke="currentColor"
//                           aria-hidden="true"
//                         >
//                           <path
//                             stroke-linecap="round"
//                             stroke-linejoin="round"
//                             d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
//                           />
//                         </svg>
//                         <span class="sr-only">items in cart, view bag</span>
//                       </a>
//                     </div>
//                     <p className="mt-1 font-semibold">${price}</p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Products;


// =======================================
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Products = ({ products = [] }) => {

  const navigate = useNavigate();
  
  const handleCart  = (products, redirect) => {
    console.log(products)
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const isProductExist = cart.find(item => item.id === products.id)
    if (isProductExist){
      const updatedCart = cart.map(item => {
        if(item.id === products.id ){
          return {
            ...item, 
            quantity: item.quantity + 1
          }
        }
        return item
      })
      localStorage.setItem('cart', JSON.stringify(updatedCart))
    } else {
      localStorage.setItem('cart', JSON.stringify([...cart, {...products, quantity:1}]))
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
    handleCart(products);
  };

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.map((product) => {
              console.log(product, "product");
              const { id, title, price, description, image_url, region, name } =
                product;
              return (
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <Link to={`/products/${id}`}>
                    <a
                      href="#"
                      className="block relative h-48 rounded overflow-hidden"
                    >
                      <img
                        alt={title}
                        className="object-cover object-center w-full h-full block"
                        src={image_url}
                      />
                    </a>
                  </Link>
                  <div className="mt-4 relative">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
                      {region}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {name}
                    </h2>

                    <div class="absolute inset-y-0 right-0 w-16 ...">
                    <ToastContainer />
                      <a href="#" onClick={handleAddToCartAndNotify} class=" ml-4 flow-root lg:ml-6 ">
                        <svg
                          class="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                          />
                        </svg>
                        <span class="sr-only">items in cart, view bag</span>
                      </a>
                    </div>
                    <p className="mt-1 font-semibold">${price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;