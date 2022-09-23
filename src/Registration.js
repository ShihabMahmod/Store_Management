import React,{useState,useEffect} from 'react'
import {Navigate, useNavigate} from "react-router-dom";
import Header from './Header';
function Registration()
{
    const [name,setName]         = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail]       = useState("");
    let navigate = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem('admin_info')){
            navigate("/addProduct")
        }
    },[])

    async function signup()
    {
        let item = {name,password,email};
       
        let result = await fetch("http://localhost:8000/api/reg",{
            method : 'POST',
            headers:{
                "Content-Type" : "application/json",
                "Accept" : "application/json"
            },
            body:JSON.stringify(item)
        });
        result = await result.json();
        localStorage.setItem("admin_info",JSON.stringify(result));
        navigate("/addProduct");
    }
    return(
        
        <div>
            <Header />
            <h1>Admin Registration</h1>
            <div>
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" />
                    <br></br>
                    <br></br>
                    <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" />
                    <br></br>
                    <br></br>
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" />
                    <br></br>
                    <br></br>
                    <button onClick={signup} className= "btn btn-primary">Add Info</button>
            </div>
        </div>
    )
}

export default Registration