import Header from "./Header"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
function AddProduct() {
    let navigate = useNavigate();

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    useEffect(() => {
        if (!localStorage.getItem('admin_info')) {
            navigate("/login")
        }
    }, [])

    async function addProduct() {
        
        const formData = new FormData();

        formData.append("name", name);
        formData.append("price", price);
        formData.append("description", description);
        formData.append("image", image);

        const result = await fetch("http://localhost:8000/api/addProduct", {
            method:'POST',
            body:formData
        });

        alert("Data hase been saved")
        navigate("/productlist");
    }
    return (
        <div>
            <Header />
            <br></br>
            <div className="col-sm-6 offset-sm-3">
                <div>
                    <input type="text" placeholder="Enter Product Name" onChange={(e) => setName(e.target.value)} />
                </div>
                <br></br>
                <div>
                    <input type="text" placeholder="Enter Product Price" onChange={(e) => setPrice(e.target.value)} />
                </div>
                <br></br>
                <div>
                    <input type="text" placeholder="Enter Product Description" onChange={(e) => setDescription(e.target.value)} />
                </div>
                <br></br>
                <div>
                    <input type="file" onChange={(e) => setImage(e.target.files[0])} />
                </div>
                <br></br>
                <div>
                    <button className="btn btn-primary" onClick={addProduct} >Log in</button>
                </div>
            </div>
        </div>
    )
}
export default AddProduct