import React, { useState , useContext } from 'react'
import Dialogbox from './Dialogbox';
import Box from "@mui/system/Box";
import Button from '@mui/material/Button';
import ProductContext from '../../Context/ProductContext';
import "./filter.css";

const CardShoping = ({id,name,code,price,image,quantity}) => {

  const {incrementQuantity,decrementQuantity} = useContext(ProductContext)
  
  const  handleDecrementQuantity = () => {
    decrementQuantity(id);
  };

  const handleIncrementQuantity = () => {
    incrementQuantity(id);
  };

  return (
    <Box sx={{
  padding:'15px',
  display:'flex',
  marginBottom:'10px',
    justifyContent:'space-between', 
    alignItems:'center',
    boxShadow:'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    borderRadius:"7px"
    }}>
        <Box 
        sx={{display:'flex',flexWrap:'wrap',textAlign:'center',
        justifyContent:'start',width:'50%',alignItems:"center",
        '@media screen and (max-width: 450px)': {
          textAlign:'start',
        },
        }}>
            <img src={image}
             style={{
              width:'40%',
             borderRadius:'10px',
             marginRight:'15px',
             '@media screen and (max-width: 450px)': {
              marginBottom:'150px',
             }
            }} 
              alt="" />
            <Box >
                <p style={{marginBottom:'10px', marginTop:"10px",
              '@media screen and (max-width: 450px)': {
           marginTop:"15px",
            
             }}}>{name}</p>

                <p style={{background:'#FF9F43',
                marginBottom:'18px',
                marginTop:'10px',
                padding:'2px 5px',
                borderRadius:'5px',
                color:'#fff',
                fontSize:'14px',
                fontWeight:"bold",
                letterSpacing:'1px'}}>{code}</p>

                <Box  sx={{display:'flex',alignItems:'center'}}>
                  
                <button
                      onClick={handleDecrementQuantity}
                      className='qty_btn_css'
                      >-</button>

                    <p style={{color:'#000',fontWeight:'bold',margin:'0 10px'}}> {quantity} </p>
                      
                    <button 
                     onClick={handleIncrementQuantity}
                     className='qty_btn_css'
                     >+</button>

                </Box>
            </Box>
            </Box>
        <Box sx={{
          display:'flex',justifyContent:'end',width:'50%',flexWrap:'wrap',alignItems:'center',
          '@media screen and (maxWidth: 400px)': {
            flexDirection:'column',
            alignItems:'end',
          },
          }}>
          <p style={{
            marginBottom:'0px',
            marginRight:'25px',
            '@media screen and (maxWidth: 400px)': {
            textAlign:'right',
            '@media screen and (maxWidth: 400px)': {
                marginBottom:'25px',
              },
            
            },
            }}>{price} $</p>
          <Dialogbox itemid={id}/>
        </Box>
    </Box>
  )
}

export default CardShoping
