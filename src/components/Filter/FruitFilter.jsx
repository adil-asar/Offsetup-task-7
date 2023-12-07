import React, { useRef, useState } from 'react'
import "./filter.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import items from './items.js'
import ProductCard from './ProductCard';
const FruitFilter = () => {

  const dataCard = [
    { id: "01",
     url:"https://img.icons8.com/external-flaticons-flat-flat-icons/100/external-fruits-farm-flaticons-flat-flat-icons-2.png"  , name: "Fruits"  },
    { id: "02", 
     url:"https://img.icons8.com/external-icongeek26-flat-icongeek26/100/external-headphone-home-appliances-icongeek26-flat-icongeek26.png"  , name: "Headphones" },
    { id: "03",
      url:"https://img.icons8.com/color/100/bracelet.png"  , name: "Accessories" },
    { id: "04",
     url:"https://img.icons8.com/external-smashingstocks-flat-smashing-stocks/100/external-Watches-business-smashingstocks-flat-smashing-stocks.png"   , name: "Watches" },
    { id: "05", 
    url:"https://img.icons8.com/color/100/hamburger.png"   , name: "Snackes" },
    { id: "06", 
    url:"https://img.icons8.com/fluency/100/shoes.png"   , name: "Shoes" },
    { id: "07", 
     url:"https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/100/external-mobilephone-marketing-xnimrodx-lineal-color-xnimrodx-3.png"  , name: "Computers" },
    { id: "08", 
     url:"https://img.icons8.com/avantgarde/100/bicycle.png"  , name: "Cycles" },
     { id: "09", 
     url:"https://img.icons8.com/fluency/100/shoes.png"   , name: "Shoes" },
     { id: "10",
      url:"https://img.icons8.com/color/100/bracelet.png"  , name: "Accessories" },
  ];

  const [scroll, setscroll] = useState(0);
  const [activeButton, setActiveButton] = useState('left');

  const [selectedCategory, setSelectedCategory] = useState('Fruits'); 
  const taget_area = useRef(null);
  // scroll function
  const handleSCroll = (amount) => {
    const newScrollPosition = scroll + amount;
    setscroll(newScrollPosition);
    taget_area.current.scrollLeft = newScrollPosition;
    setActiveButton(scroll > 0 ? "left" : "right")
  }

  // filtering fuction
  const filterItems = (category) => {
    setSelectedCategory(category);
  };
  const filteredItems = items.filter(item => item.category === selectedCategory);

  return (
    <div className="filter_css">
      {/* categories head */}
      <div className="categories">
        <h2>Categories</h2>
        <p>Manage your purchases</p>
      </div>
      {/* categories tab and filter */}
      <div className="scroll_button">
      <button 
        disabled={activeButton === "left"}
        onClick={()=>handleSCroll(-370)}> <IoIosArrowBack className='l-arrow' /></button>
        <button 
        disabled={activeButton === "right"}
        onClick={()=>handleSCroll(370)}> <IoIosArrowForward className='r-arrow' /> </button>
      </div>
      {/* Tabs */}
      <div className="tabs" ref={taget_area}>
      { 
    dataCard.map((item) => (
      <div className={`tab_card ${selectedCategory === item.name ? 'active' : ''}`} 
       onClick={() => filterItems(item.name)} key={item.id}>
        <img className="img-css" src={item.url} alt="" />
        <p className={` ${selectedCategory === item.name ? 'active' : ''}`}  >{item.name}</p>
      </div>
    ))
  }
      </div>

      {/* tabs data  */}

<div className='tabs_items'>
{filteredItems.map((item) => (
          <ProductCard key={item.id} name={item.name} source={item.src} price={item.price} categ={item.category} />
        ))}

</div>

    </div>
  );
};

export default FruitFilter;
