import React, { useEffect, useState } from "react";
import Hero from "../../components/hero";
import Products from "../../components/products";
import Card from "../../components/card";
import Statics from "../../components/statics";
import ClipLoader from "react-spinners/ClipLoader";


const Home = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async() => {
      const response  = await fetch('https://fake-coffee-api.vercel.app/api?limit=8')
      const data = await response.json()
      console.log(data)
      setProducts(data)
    }

    fetchProducts()
  }, [])

  return (
    <>
      <Hero />
      <div className="flex flex-col text-center py-5 w-full mb-3">
        <h3 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
          Products
        </h3>
        <h2 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          Most popular products
        </h2>
      </div>
      {
        products.length > 0 ? <Products products={products} /> : <div className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center"><ClipLoader color={'#e9a125'} size={100} /></div>
      }
      <Products />
      <Card />
      <Statics />
    </>
  );
};

export default Home;
