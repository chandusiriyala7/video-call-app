import React ,{useState} from "react";
import {useNavigate} from 'react-router-dom';
 
const HomePage = () =>{
    const [input,setInput] = useState("");
    const navigate = useNavigate();

    const HandleSubmit = () =>{
        navigate(`/room/${input}`)
    }
   return(
    <div>
        <div>
            <input type = "text" name = "name" value = {input} placeholder="Enter Your Name ......" onChange={(e) =>{setInput(e.target.value)}}/>
            <button onClick={HandleSubmit}>Submit</button>
        </div>
    </div>
   )
}

export default HomePage;