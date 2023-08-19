import { useContext, useEffect, useState } from "react";
import { ListContext } from "../contexts/ListContext";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { AuthContext } from "../contexts/AuthContext";
import Loader from "./Loader";
import { SelectedContext } from "../contexts/SelectedContext";

const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { isLoggedIn } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const { productsList} = useContext(ListContext);
  const { isSelectedHandler, idChangeHandler } = useContext(SelectedContext);

  useEffect(() => {
    setIsLoading(true);

    const prdct = productsList?.find((ele) => ele.id == parseInt(id));
    if (prdct) {
      setIsLoading(false);
      setProduct(prdct);
    }
  }, [productsList, id]);
  const cartClickHandler = () => {
  
    idChangeHandler(id);
       isSelectedHandler(true);
    if (isLoggedIn) {
      navigate(`/cart/${id}`);
    }
    if (!isLoggedIn) {
      navigate("/redirect");
    }
  };

  return (
    <>
      {" "}
      {isLoading && <Loader />}
      {!isLoading && (
        <div style={{ padding: "1em 2em 3em 1em" }}>
          <img src={product.image} width="200px" />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "2em",
              paddingTop: "2em",
            }}
          >
            <p>Price : $ {product.price}</p>
            <p> Product : {product.title}</p>
            <p> category : {product.category}</p>
            <p> description : {product.description}</p>

            {product.rating && <p> Rating : {product.rating.rate}</p>}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "250px",
              }}
            >
              <Button
                variant="secondary"
                onClick={() => navigate(`/cart/${id}`)}
              >
                Buy Now
              </Button>

              <Button variant="secondary" onClick={cartClickHandler}>
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default ProductDetails;
