import Header from "./Header"
import React,{useEffect,useState} from "react"
import {useNavigate} from "react-router-dom";
import { wait } from "@testing-library/user-event/dist/utils";
function Login()
{
    const [email,setEmail]       = useState("");
    const [password,setPassword] = useState("");
    let navigate = useNavigate();
    
    useEffect(()=>{
        if(localStorage.getItem('admin_info')){
            navigate("/addProduct")
        }
    },[])
    async function signin()
    {
        let item = {email,password};
        let result = await fetch("http://localhost:8000/api/login/",{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(item)
        });
        result = await result.json();
        localStorage.setItem('admin_info',JSON.stringify(result));
        navigate("/addProduct");
    }
    return(
        <div>
            <Header />
            <br></br>
            <div className="col-sm-6 offset-sm-3">
                <div>
                <input type="text"  placeholder="Enter Your Email" onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <br></br>
                <div>
                <input type="text" placeholder="Enter Your Password" onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <br></br>
                <div>
                <button className="btn btn-primary" onClick={signin} >Log in</button>
                </div>
            </div>
        </div>
    )
}
export default Login