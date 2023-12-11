import React, { useState } from 'react'
import Dialogbox from './Dialogbox';
import Box from "@mui/system/Box";


const CardShoping = ({name,code,price,image}) => {

        
    const [count, setcount] = useState(0)

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
        '@media screen and (max-width: 400px)': {
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
                      onClick={()=>{setcount(count+1)}}
                    style={{border:'none',cursor:'pointer',
                    backgroundColor:'rgb(223, 230, 233)',
                    borderRadius:'15px',padding:'4px 8px',
                    marginRight:'10px'}} >1</button>
                    <p style={{color:'#000',fontWeight:'bold'}}> {count} </p>
                    <button
                    onClick={()=>{setcount(count-1) }}
                      style={{border:'none',cursor:'pointer',
                      borderRadius:'15px',backgroundColor:'rgb(223, 230, 233)',
                      padding:'4px 8px',marginLeft:'10px'}}>2</button>
                </Box>
            </Box>
            </Box>
        <Box sx={{
          display:'flex',justifyContent:'end',width:'50%',flexWrap:'wrap',alignItems:'center',
          '@media screen and (max-width: 400px)': {
            flexDirection:'column',
            alignItems:'end',
          },
          }}>
          <p style={{
            marginBottom:'0px',
            marginRight:'25px',
            '@media screen and (max-width: 400px)': {
            textAlign:'right',
            '@media screen and (max-width: 400px)': {
                marginBottom:'25px',
              },
            
            },
            }}>{price}</p>
          <Dialogbox/>
        </Box>
    </Box>
  )
}

export default CardShoping
