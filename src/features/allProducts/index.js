import React, { useEffect, useState } from 'react'
import Products from '../../components/products'
import ClipLoader from "react-spinners/ClipLoader";


const AllProducts = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fake-coffee-api.vercel.app/api")
      const data = await response.json()
      console.log(data)
      setProducts(data)
    }
    fetchProducts()
  }, [])

  return (
    <div>
      <div className="flex flex-col text-center w-full mt-20">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">ALL PRODUCTS</h1>
      </div>
      {
        products.length > 0 ?
        <Products products={products}/>
        :
        <div className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center"><ClipLoader color={'#36d7b7'} size={100} /></div>
      }
    </div>
  )
}

export default AllProducts;