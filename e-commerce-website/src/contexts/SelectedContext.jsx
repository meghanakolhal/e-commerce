import { createContext, useEffect, useState } from "react";

export const SelectedContext = createContext();
// eslint-disable-next-line react/prop-types
const SelectedProvider = ({ children }) => {
  const [isSelected, setIsSelected] = useState(false);
  const isSelectedHandler = (data) => {
    return setIsSelected(data);
  };
  const selectedSessionData =
  JSON.parse(sessionStorage.getItem("productID")) || null;
  
  const [productID, setProductId] = useState(selectedSessionData);
  const idChangeHandler = (data) => {
    return setProductId(data);
  };
  useEffect(() => {
    sessionStorage.setItem("productID", JSON.stringify(productID));
   
        fetch(`https://fakestoreapi.com/carts/${productID}`, {
          method: "PUT",
          body: JSON.stringify({
            userId: 3,
            date: 2019 - 12 - 10,
            products: [{ productId: 1, quantity: 3 }],
          }),
        })
          .then((res) => res.json())
          .then((json) => console.log(json));
    
  }, [productID]);
  return (
    <SelectedContext.Provider
      value={{ isSelected, isSelectedHandler, idChangeHandler, productID }}
    >
      {children}
    </SelectedContext.Provider>
  );
};
export default SelectedProvider;
