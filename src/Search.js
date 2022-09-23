import Header from "./Header"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Table from 'react-bootstrap/Table';
import {Link} from 'react-router-dom'
function Search()
{



    return(
       
        <div>
         <Header />
         <input type="text" placeholder="Search Key" />
        </div>
    )
}
export default Search;