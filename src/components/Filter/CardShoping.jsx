import React, { useState , useContext } from 'react'
import Dialogbox from './Dialogbox';
import Box from "@mui/system/Box";
import Button from '@mui/material/Button';
import ProductContext from '../../Context/ProductContext';

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
        '@media screen and (maxWidth: 400px)': {
          justifyContent:'center',
        },
        }}>
            <img src={image}
             style={{
              width:'40%',
             borderRadius:'10px',
             marginRight:'15px',
             
            }} 
              alt="" />
            <Box >
                <p style={{background:'',marginBottom:'10px',marginTop:'0px'}}>{name}</p>

                <p style={{background:'#FF9F43',
                marginBottom:'10px',
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
                      style={{border:'none',cursor:'pointer',
                      borderRadius:'15px',
                      width:'25px',height:"25px",
                      backgroundColor:'rgb(223, 230, 233)',
                      padding:'4px 8px',
                      '&:hover': {
                        backgroundColor:"#FF9F43",
                        color:'#fff',
                        border:'1px solid red'
                      }
                      }}>-</button>

                    <p style={{color:'#000',fontWeight:'bold',margin:'0 10px'}}> {quantity} </p>
                      
                    <button 
                     onClick={handleIncrementQuantity}
                    style={{border:'none',cursor:'pointer',
                    backgroundColor:'rgb(223, 230, 233)',
                    borderRadius:'15px',padding:'4px 8px',
                    '&:hover': {
                     
                      color:'#fff'
                    }
                   }} >+</button>

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
            }}>{price}</p>
          <Dialogbox itemid={id}/>
        </Box>
    </Box>
  )
}

export default CardShoping
