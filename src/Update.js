import Header from "./Header"
import { useParams,useNavigate} from "react-router-dom";
import React,{useEffect,useState} from 'react'
function Update(props)
{
    

    let {id} = useParams();
    const [data,setData] = useState([]);
    const [gdata,getData] = useState([]);
    const navigate = useNavigate();

    const [name,setName]   = useState("");
    const [price,setPrice] = useState("");
    const [description,setDescription] = useState("");
    const [image, setImage] = useState("");

    useEffect(()=>{
        fetch("http://localhost:8000/api/updateProduct/"+id).then((result)=>{
          result.json().then((resp)=>{
           
            setData(resp)
            setName(resp.name)
            setPrice(resp.price)
            setDescription(resp.description)
            setImage(resp.image)
            console.warn(resp)
          })
        })
      },[])
      
    async function updateInfo()
    { 
      
      const formData = new FormData();

      formData.append("name", name);
      formData.append("price", price);
      formData.append("description", description);
      formData.append("image", image);

      let result = await fetch("http://localhost:8000/api/updateData/"+id+"?_method=PUT", {
          method:'POST',
          body:formData
      });
       navigate("/productlist");
    }
    console.warn(id);
    return(
        <div>
            <Header />
            <h1>Update page</h1>
             <br></br>
             <div className="col-sm-6 offset-sm-3">
                <div>
                    <input type="text" defaultValue={data.name} placeholder="Enter Product Name" onChange={(e) => setName(e.target.value)} />
                </div>
                <br></br>
                <div>
                    <input type="text" defaultValue={data.price} placeholder="Enter Product Price" onChange={(e) => setPrice(e.target.value)} />
                </div>
                <br></br>
                <div>
                    <input type="text" defaultValue={data.description} placeholder="Enter Product Description" onChange={(e) => setDescription(e.target.value)} />
                </div>
                <br></br>
                <div>
                    <input type="file"  onChange={(e) => setImage(e.target.files[0])} defaultValue={data.image} />
                    
                </div>
                <td> <img style={{width:100,height:50}} src={"http://localhost:8000/"+data.image}/></td>
                <br></br>
                <div>
                    <button className="btn btn-primary" onClick={updateInfo} >Update Data</button>
                </div>
            </div>
        </div>
    )
}
export default Update