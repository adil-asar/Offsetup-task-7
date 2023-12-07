import React from 'react'


const ProductCard = ({name,source,categ,price}) => {
  return (
    <div className='product_card'>
      <img src={source} alt="" />
      <p style={{fontSize:"15px",marginBottom:'5px',letterSpacing:'1px'}}>{categ}</p>
      <strong style={{letterSpacing:'2px'}}>{name}</strong>
      <p style={{color:'red',marginBottom:'15px',marginTop:'20px'}}>{price}</p>
    </div>
  )
}

export default ProductCard
