import React, { useContext , useState} from 'react';
import ProductContext from '../../Context/ProductContext';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { ToastContainer, toast ,Zoom,} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductCard = ({name,source,categ,price,quantity,itemid}) => {
  const {addToCart, unSelect} = useContext(ProductContext);
  const [isActive, setIsActive] = useState(false);
  const handleAddToCart = () => {

    addToCart({
      id:itemid,
      name:name ,
      qty: quantity,
      price:price,
      code: categ,
      image:source,
    });
    toast.success("Product Added To Cart");
  };
  return (
    <div    className={`product_card ${isActive ? '' : ''}`} >

<div className='image_container'>
<img src={source} className='product_img' alt="" />
</div>

{/* {isActive && <CheckBoxIcon className='icon_css' fontSize='small' />} */}
      <p style={{fontSize:"15px",marginTop:'15px',letterSpacing:'1px',marginBottom:'10px',}}>{categ}</p>
      <strong style={{letterSpacing:'2px',}}>{name}</strong>
      <p style={{color:'red',marginBottom:'15px',marginTop:'5px'}}>{price} $</p>
<button
 onClick={handleAddToCart}
 className='add_to_cart'>
   <img src="https://img.icons8.com/arcade/64/add-shopping-cart.png" className='img_icon' alt="" />
    </button>
    <ToastContainer  autoClose={1000} transition={Zoom} />
    </div>
  )
}

export default ProductCard
