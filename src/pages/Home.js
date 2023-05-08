import React from 'react'
import Carsoul from "../components/Carsoul"
import Product from "../components/ProductHome";
import Discount from "../components/Discount";
import Chat from '../components/Chat';
import CardsOnHome from '../components/CardOffers'


function Home() {
  return (
    <div>
        <Carsoul/>
        <Product/>
        <Discount/>
        <CardsOnHome/>
        <Chat/>
    </div>
  )
}

export default Home