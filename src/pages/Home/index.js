import React, { useContext } from 'react'
import ProductList from '../../components/ProductList';
import { AuthContext } from '../../context/AuthContext';

const Home = () => {
  return (
    <>
        <section className='home-banner w-full'>
            <div className='flex flex-col items-center justify-center h-full'>
                <h1 className='text-center text-3xl md:text-4xl lg: text-5xl font-semibold text-gray-700'>Os melhores alimentos vocês encontra aqui!</h1>
            </div>
            <ProductList/>
        </section>
    </>
  )
}

export default Home;