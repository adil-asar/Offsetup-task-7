import React, { useContext , useState} from 'react';
import ProductContext from '../../Context/ProductContext';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const ProductCard = ({name,source,categ,price,quantity,itemid}) => {
  const {addToCart} = useContext(ProductContext);
  const [isActive, setIsActive] = useState(false);
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
    setIsActive(true)
  };
  return (
    <div    className={`product_card ${isActive ? 'product_added' : ''}`}  onClick={handleAddToCart}>
{isActive && <CheckBoxIcon className='icon_check' fontSize='large' />}
      <div className="image_container">
      <img src={source} alt="" />
      </div>
      <p style={{fontSize:"15px",marginBottom:'5px',letterSpacing:'1px'}}>{categ}</p>
      <strong style={{letterSpacing:'2px'}}>{name}</strong>
      <p style={{color:'red',marginBottom:'15px',marginTop:'20px'}}>{price} $</p>
    </div>
  )
}

export default ProductCard
