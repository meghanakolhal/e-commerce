
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const RedirectToLogin =()=>{
    const navigate=useNavigate();
    
return (
  <div style={{display:'flex',justifyContent:'center'}}>
    <main
      style={{
        textAlign: "center",
        border: "0px solid grey",
        margin: "1em 4em",
        padding: "0.5em",
        background: "#dee9f7",
        width: "30em",
     
      }}
    >
      <img src="/images/shopping-cart.jpg" width="250px" />
      <div style={{ textAlign: "center" }}>
        <p style={{padding:'1em',fontSize:'20px'}}>Kindly Login in to add items to the Cart.</p>
        <Button variant="secondary" style={{marginBottom:'1em'}} onClick={() => navigate("/login")}>
          Login
        </Button>
      </div>
    </main>
  </div>
);
}
export default RedirectToLogin;