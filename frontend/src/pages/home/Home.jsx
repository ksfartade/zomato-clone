import React, { useState } from 'react';
import './home.css';
import Header from '../../components/header/Header';
import ExploreMenu from '../../components/exploremenu/ExploreMenu';
import FoodDisplay from "../../components/foodDisplay/FoodDisplay";
import AppDownload from '../../components/appdownload/AppDownload';
import Footer from '../../components/footer/Footer';


const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div className='home-page'>
      <div id="home">
        <Header />
      </div>

      {/* ID should match the href="#menu" */}
      <div id="menu">
        <ExploreMenu category={category} setCategory={setCategory} />
      </div>

      <FoodDisplay selectedCategory={category} />

      {/* ID should match the href="#mobile-app" */}
      <div id="mobile-app">
        <AppDownload />
      </div>


    </div>
  );
};

export default Home