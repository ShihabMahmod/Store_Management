import Header from "./Header"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Table from 'react-bootstrap/Table';
import {Link} from 'react-router-dom'
function Productlist() {

  const [data,setData] = useState([]);
  const [info, setInfo] = useState([]);
  const [searchData,setSearchData] = useState("");

  useEffect(()=>{
    fetch("http://localhost:8000/api/productList/").then((result)=>{
      result.json().then((resp)=>{
        // console.warn(resp)
        setData(resp)
      })
    })
  },[])

     
  async function deleteOperation(id)
  {
    let result = await fetch("http://localhost:8000/api/deleteProduct/"+id,{
      method:'DELETE'
    });
    result = result.json();
  }  
  async function singleProduct(id)
  {
    let result = await fetch("http://localhost:8000/api/updateProduct/"+id).then((result)=>{
      result.json().then((resp)=>{
        setInfo(resp)
      })
    })
  }   
  async function search(key)
  {
    let result = await fetch("http://localhost:8000/api/search/"+key)
    result = await result.json();
    setSearchData(result)
    console.warn(result)
    
  }
   return(
    <div className="container">
         <Header />
         <input type="text" placeholder="Search Key" onChange={(e)=>search(e.target.value)} />
        {
         !searchData ?
          <>
           <Table striped bordered hover> 
      <thead>
        <tr>
          <th>S.N</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Description</th>
          <th>Image</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
       {
         data.map((item,i)=>
         <tr key={i}>
           <td>{i+1}</td>
           <td>{item.name}</td>
           <td>{item.price}</td>
           <td>{item.description}</td>
           <td><img style={{width:300,height:200}} src={"http://localhost:8000/"+item.image} /></td>
           <td><button className="btn btn-danger" onClick={()=>{deleteOperation(item.id)}}>Delete</button></td>
           <td><Link to={"/update/"+item.id}><span className="btn btn-info" >Update</span></Link></td>
         </tr>
         )
       }
      </tbody>
    </Table>
    </>
    :
    <>
         <Table striped bordered hover> 
      <thead>
        <tr>
          <th>S.N</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Description</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
       {
         searchData.map((item,i)=>
         <tr key={i}>
           <td>{i+1}</td>
           <td>{item.name}</td>
           <td>{item.price}</td>
           <td>{item.description}</td>
           <td><img style={{width:300,height:200}} src={"http://localhost:8000/"+item.image} /></td>
         </tr>
         )
       }
      </tbody>
    </Table>
    </>
    }
    </div>
   );
}
export default Productlist