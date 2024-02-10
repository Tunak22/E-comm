import React from 'react'
import Slider from '../../Components/Slider/Slider';
import "./Home.scss"
import FeaturedProduct from '../../Components/FeaturedProducts/FeaturedProduct';
import Categories from '../../Components/Categories/Categories';
import Contacts from '../../Components/Contacts/Contacts';
const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProduct type="featured"/>
      <Categories/>
      <FeaturedProduct type="trending"/>
      <Contacts/>
    </div>
  )
}

export default Home