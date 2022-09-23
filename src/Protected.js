import Header from "./Header"
import React,{useEffect} from "react"
import {useNavigate} from "react-router-dom";
function Product()
{
    let navigate = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('admin_info')){
            navigate("/addProduct")
        }
    },[])
    return(
        <div>
            <Header />
            <h1>Login page</h1>
        </div>
    )
}
export default Product