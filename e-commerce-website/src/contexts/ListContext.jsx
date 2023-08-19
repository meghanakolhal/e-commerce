import { createContext, useEffect, useState } from "react";

export const ListContext = createContext();

// eslint-disable-next-line react/prop-types
const ListProvider = ({ children }) => {
  const [productsList, setProductsList] = useState([]);
  
  // console.log(productsList)
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProductsList(json));
  }, []);
 

  return (
    <ListContext.Provider value={{ productsList}}>
      {children}
    </ListContext.Provider>
  );
};
export default ListProvider;
