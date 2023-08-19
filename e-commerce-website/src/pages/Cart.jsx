import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ListContext } from "../contexts/ListContext";
import Loader from "./Loader";

const Cart = () => {
  const { pid } = useParams();
  const [product, setProduct] = useState([{id:9}]);
  const [isLoading, setIsLoading] = useState(false);
  const { productsList } = useContext(ListContext);

  useEffect(() => {
    setIsLoading(true);
    const prdct = productsList?.find((ele) => ele.id == parseInt(pid));
    console.log(prdct);
    if (prdct) {
      setIsLoading(false);
      setProduct( prdct);
      // setProduct([ 
      //   ...product,
      //   {
      //     id: prdct.id,
      //     category: prdct.category,
      //     description: prdct.description,
      //     price: prdct.price,
      //     title:prdct.title,
      //     image:prdct.image,
      //   },
      // ]);
    }
  }, [productsList, pid]);
  console.log(product);
  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <div style={{ display: "flex", padding: "1em" }}>
          <div style={{ margin: "1em" }}>
            <img src={product.image} width="200px" />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h4>{product.title} </h4>
            <p style={{ color: "grey", fontSize: "12px" }}>
              {product.description}
            </p>
            <p style={{ fontWeight: "700", fontSize: "24px" }}>
              {" "}
              $ {product.price}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
export default Cart;
