import React, { useRef, useState,useContext } from 'react'
import "./filter.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import ProductCard from './ProductCard';
import ProductContext from '../../Context/ProductContext';

const FruitFilter = () => {

  const {items,addToCart} = useContext(ProductContext)

  const dataCard = [
    { id: 1,
     url:"https://img.icons8.com/external-flaticons-flat-flat-icons/100/external-fruits-farm-flaticons-flat-flat-icons-2.png"  , name: "Fruits"  },
    { id: 2, 
     url:"https://img.icons8.com/external-icongeek26-flat-icongeek26/100/external-headphone-home-appliances-icongeek26-flat-icongeek26.png"  , name: "Headphones" },
    { id: 3,
      url:"https://img.icons8.com/color/100/bracelet.png"  , name: "Accessories" },
    { id: 4,
     url:"https://img.icons8.com/external-smashingstocks-flat-smashing-stocks/100/external-Watches-business-smashingstocks-flat-smashing-stocks.png"   , name: "Watches" },
    { id: 5, 
    url:"https://img.icons8.com/color/100/hamburger.png"   , name: "Snackes" },
    { id: 6, 
    url:"https://img.icons8.com/fluency/100/shoes.png"   , name: "Shoes" },
    { id: 7, 
     url:"https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/100/external-mobilephone-marketing-xnimrodx-lineal-color-xnimrodx-3.png"  , name: "Computers" },
    { id: 8, 
     url:"https://img.icons8.com/color/100/traffic-jam.png"  , name: "Cars" },
     { id: 9, 
     url:"https://img.icons8.com/fluency/48/laptop.png"  , name: "Laptop" },
     { id: 10, 
     url:"https://img.icons8.com/cotton/100/iphone-x--v1.png"  , name: "CellPhones" },
    
  ];

  const [scroll, setscroll] = useState(0);


  const [selectedCategory, setSelectedCategory] = useState('Fruits'); 
  const taget_area = useRef(null);
  // scroll function
  const handleSCroll = (amount) => {
    const newScrollPosition = scroll + amount;
    setscroll(newScrollPosition);
    taget_area.current.scrollLeft = newScrollPosition;
 
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
        
        onClick={()=>handleSCroll(-250)}> <IoIosArrowBack className='l-arrow' /></button>
        <button 
      
        onClick={()=>handleSCroll(250)}> <IoIosArrowForward className='r-arrow' /> </button>
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
          <ProductCard 
           key={item.id}
            name={item.name}
             source={item.src} 
             price={item.price} 
             categ={item.category}
             quantity={item.qty} 
             itemid={item.id}/>
        ))}

</div>

    </div>
  );
};

export default FruitFilter;
