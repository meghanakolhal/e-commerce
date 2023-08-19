import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Error =()=>{
    const navigate=useNavigate()
    const [countDown , setCountDown]=useState(5)
    useEffect(()=>{
        if(countDown>0){
            
            setTimeout(() => {
                setCountDown(countDown-1)
            }, 1000);
        }
else{
navigate('/')
}
    },[countDown,navigate])
return (
  <div style={{ color: "red", textAlign: "center", marginTop: "4em" }}>
    <h1>404 : Not Found!!!</h1>
    <p>Error: Invalid Page Path, Kindly redirect to Home Page</p>
    <Button variant="secondary" onClick={()=>navigate('/')}>Home</Button>
    <p>You will auto-redirect to Home Page in {countDown} seconds</p>
  </div>
);
}
export default Error;