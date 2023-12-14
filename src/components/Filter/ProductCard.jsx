import React, { useContext } from 'react';
import ProductContext from '../../Context/ProductContext';

const ProductCard = ({name,source,categ,price,quantity,itemid}) => {
  const {addToCart} = useContext(ProductContext);
  const handleAddToCart = () => {
    // Call the addToCart function from the context and pass the product details.
    addToCart({
      id:itemid,
      name:name ,
      qty: quantity,
      price:price,
      code: categ,
      image:source,
    });
  };
  return (
    <div className='product_card'  onClick={handleAddToCart}>
      <img src={source} alt="" />
      <p style={{fontSize:"15px",marginBottom:'5px',letterSpacing:'1px'}}>{categ}</p>
      <strong style={{letterSpacing:'2px'}}>{name}</strong>
      <p style={{color:'red',marginBottom:'15px',marginTop:'20px'}}>{price} $</p>
    </div>
  )
}

export default ProductCard
