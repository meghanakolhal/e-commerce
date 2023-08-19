import { useContext, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { SelectedContext } from "../contexts/SelectedContext";
import Loader from "./Loader";

const UserLogin = () => {
  const { setUserDataHandler } = useContext(UserContext);
  const { loginHandler: contextLoginHandler } = useContext(AuthContext);
  const [uname, setUname] = useState("");
  const [pwd, setPwd] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isLoading,setIsLoading]=useState(false);
  const navigate = useNavigate();
  const { isSelected, productID } = useContext(SelectedContext);
  const showError = (msg) => {
    setErrorMsg(msg);
    setTimeout(() => {
      setErrorMsg(" ");
    }, 4000);
  };
  const loginHandler = () => {
    if (!(uname && pwd && uname.length > 3 && pwd.length > 3)) {
      showError("Kindly Enter Valid Details!!!!");
      return;
    }
    if (uname == pwd) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setUserDataHandler(uname);
        contextLoginHandler();
        setUname("");
        setPwd("");
        setSuccessMsg("Login successful");
        if (isSelected){
          navigate(`/productDetails/${productID}`);
        } 
        if(!isSelected) {
          navigate("/");}
      }, 1500);
    }
  };
  return (
    <main style={{ textAlign: "center" }}>
      <h1>Login</h1>
      <div style={{marginTop:'10em'}}>

      {isLoading && <Loader />}
      </div>
      {!isLoading && (
        <div style={{ display: "inline-block" , marginBottom:'3em'}}>
          <Row style={{ marginBottom: "2em" }}>
            <Col>
              {" "}
              <label htmlFor="uname">User Name:</label>{" "}
            </Col>
            <Col>
              {" "}
              <input
                type="text"
                id="uname"
                value={uname}
                placeholder="Enter your name"
                onChange={(e) => setUname(e.target.value.trim())}
              />
            </Col>
          </Row>
          <Row style={{ marginBottom: "2em" }}>
            <Col>
              {" "}
              <label htmlFor="pwd">Password:</label>{" "}
            </Col>
            <Col>
              {" "}
              <input
                type="password"
                id="pwd"
                value={pwd}
                placeholder="Enter your Password"
                onChange={(e) => setPwd(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="secondary" onClick={loginHandler}>
                Login
              </Button>
            </Col>
          </Row>
          <p style={{ marginTop: "10px", color: "red", fontSize: "19px" }}>
            {errorMsg}
          </p>
          <p style={{ color: "green" }}>{successMsg}</p>
        </div>
      )}
    </main>
  );
};
export default UserLogin;
