import { useContext, useEffect, useState } from "react";
import ControlledCarousel from "../components/ControlledCarousel/ControlledCarousel";
import { ListContext } from "../contexts/ListContext";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

const Home = () => {
  const [isLoading,setIsLoading]=useState(false);
  const navigate=useNavigate()
  const productBox = {
    border: "0px solid grey",
      boxShadow:' 10px 5px 12px grey',
      borderRadius: '4px',
    margin: "1em",
    padding: "1em",
    display: "flex",
    width: "400px",
  };
  const { productsList } = useContext(ListContext);
 useEffect(()=>{
if(productsList.length===0){
  setIsLoading(true);
}else{
  setIsLoading(false);
}
 },[productsList])
  const list = productsList.map((ele, index) => {
    return (
      <div key={index} style={productBox} onClick={()=>{
navigate(`ProductDetails/${ele.id}`);
      }}>
        <img src={ele.image} width="150px" height="200px" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: "2em",
            paddingTop:'2em',
          }}
        >
          <p>Price ${ele.price}</p>
          <br></br>
          <p> Product : {ele.title}</p>
        </div>
      </div>
    );
  });
  return (
    <>
      <div style={{ width: "100%", height: "5em" }}>
        <ControlledCarousel />
        <div style={{ marginTop: "10em" , textAlign:'center'}}>{isLoading && <Loader />}</div>
        {!isLoading && (
          <div
            style={{
              display: "flex",
              justifyContent: " space-around",
              flexWrap: "wrap",
            }}
          >
            {list}
          </div>
        )}
      </div>
    </>
  );
};
export default Home;
