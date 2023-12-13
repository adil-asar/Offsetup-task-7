
import snaks1 from "../assets/product47.jpg";
import banana from "../assets/product35.jpg";


const shoppingdata = [ 
  { id:1,name:'Banana',qty:1, price:'3000',code:'Fruits',image:banana},
  { id:2,name:'Sashimi',qty:1, price:'3000',code:'Snackes',image:snaks1},
];


const initial_state = {
 cart_items:shoppingdata,
 subtotal:0,
 tax:0,
 total:0,
 totalItems:0

};



export {initial_state} 





// const singal_Product = {
//    id:'0',
//    title:'name',
//    price:20,
//    qty:'1',
//    category:'fruits',
//    subtotal:0,
//    tax:0,
//    total:0,
  
//   }
