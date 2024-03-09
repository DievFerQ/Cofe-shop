// import React from "react";
// import { Link } from "react-router-dom";
// import cafe from "../../images/cafeImg/cafeteria.png";

// const Header = () => {


//   const tabs = [
//     {
//       name: "Home",
//       path: "/",
//     },
//     {
//       name: "Products",
//       path: "/allProducts",
//     },
//     {
//       name: "About",
//       path: "/about",
//     },
//     {
//       name: "Contact",
//       path: "/contact",
//     },
//   ];

//   return (
//     <>
//       <header className="text-gray-600 body-font shadow-lg">
//         <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">
//           <Link
//             to={"/"}
//             className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
//           >
//             <img
//               src={cafe}
//               alt="Cafe_logo"
//               className="w-20 h-20 text-white p-2 rounded-full"
//             />
//             <span className="ml-3 text-xl">Misas cup</span>
//           </Link>

//           <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
//             {tabs.map((tab) => {
//               return (
//                 <Link to={tab.path} className="mr-5 hover:text-gray-900">
//                   {tab.name}
//                 </Link>
//               );
//             })}
//           </nav>
//           {/* <Link to={'/cart'} className="inline-flex items-center  border border-gray-900 py-1 px-3  hover:bg-gray-100 rounded text-base mt-4 md:mt-0">
//             Cart
//             <svg
//               fill="none"
//               stroke="currentColor"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               stroke-width="2"
//               className="w-4 h-4 ml-1"
//               viewBox="0 0 24 24"
//             >
//               <path d="M5 12h14M12 5l7 7-7 7"></path>
//             </svg>
//           </Link> */}
//           <div class="ml-4 flow-root lg:ml-6">
//             <a href="#" class="group -m-2 flex items-center p-2">
//               <svg
//                 class="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke-width="1.5"
//                 stroke="currentColor"
//                 aria-hidden="true"
//               >
//                 <path
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
//                 />
//               </svg>
//               <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
//                 0
//               </span>
//               <span class="sr-only">items in cart, view bag</span>
//             </a>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;

import React from "react";
import { Link } from "react-router-dom";
import cafe from "../../images/cafeImg/cafeteria.png";

const Header = () => {


  const tabs = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Products",
      path: "/allProducts",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contactUs",
    },
  ];

  return (
    <>
      <header className="text-gray-600 body-font shadow-lg">
        <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">
          <Link
            to={"/"}
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <img
              src={cafe}
              alt="Cafe_logo"
              className="w-20 h-20 text-white p-2 rounded-full"
            />
            <span className="ml-3 text-xl">Misas cup</span>
          </Link>

          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            {tabs.map((tab) => {
              return (
                <Link to={tab.path} className="mr-5 font-semibold leading-6 text-gray-500 hover:text-gray-900">
                  {tab.name}
                </Link>
              );
            })}
          </nav>
          <Link to={'/cart'} className="inline-flex items-center  border border-gray-900 py-1 px-3  hover:bg-gray-100 rounded-full text-base mt-4 md:mt-0">
            Cart
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
          
        </div>
      </header>
    </>
  );
};

export default Header;
