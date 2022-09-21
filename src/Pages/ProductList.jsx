import React,{useEffect,useState} from 'react'
import ProductCard from '../Components/ProductCard'
import axios from 'axios'

function ProductList(props) {
    const[allProducts,setallProducts]=useState([]);
useEffect(()=>{
axios({
    url:"https://nepaligardencms.creatudevelopers.com.np/api/v1/product/get",
    method:"GET"
}).then((res)=>{
   setallProducts(res.data.products.data)
})
},[])



  return (
    <>
   <div className='row' >
   {allProducts.map((product,index)=>(
      <div  className='col-3' key={index}>
      <ProductCard data={product}/>
  </div>
   ))}

  
   </div>

  
  
    </>
  )
}

export default ProductList