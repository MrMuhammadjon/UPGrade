import React from 'react'
import { Promotional } from '../Components/PageComponents/Promotional'
import { Carusel } from '../Components/PageComponents/Carusel'
import ProductPage from '../Components/ProductPage';



const Home = () => {
  return (
    <>
    <Carusel/>
    <Promotional/>
    <ProductPage/>
    </>
  )
}


export default Home