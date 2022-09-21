import React,{useEffect,useState} from 'react'
import {useParams} from "react-router-dom"
import axios from 'axios'
import parse from "html-react-parser"
function ProductDetailpage() {
 const params=useParams()
 const[Detail,setDetail]=useState({});
useEffect(()=>{
axios({
url:"https://nepaligardencms.creatudevelopers.com.np/api/v1/product/get/"+params.productSlug,
method:"GET",

}).then((res)=>{
setDetail(res.data.data.product);
console.log(res.data.data.product);
})
},[])

    return (
  <>
 
  <img src={Detail.image}/>
  <h3>{Detail.name}</h3>
  <h6>RS.{Detail.price}</h6>
  <p>{parse(Detail.detail ? Detail.detail:"")}</p>
  <p>{parse(Detail.ingredeints ? Detail.ingredeints:"")}</p>
  
  </>
  )
}

export default ProductDetailpage;