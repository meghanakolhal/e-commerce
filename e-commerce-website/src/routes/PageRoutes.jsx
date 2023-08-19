import { Route, Routes } from "react-router-dom"
import MasterLayout from "../layouts/MasterLayout"
import Home from "../pages/Home"
import ProductDetails from "../pages/ProductDetails"
import Cart from "../pages/Cart"
import UserLogin from "../pages/UserLogin"
import Error from "../pages/Error"
import RedirectToLogin from "../pages/redirectToLoginPage"

const PageRoutes=()=>{
return (
<Routes>
<Route path="/" element={<MasterLayout/>}>
<Route index element={<Home/>}/>
<Route path="ProductDetails/:id" element={<ProductDetails/>} />
<Route path="/cart/:pid" element={<Cart/>} />
<Route path="/login" element={<UserLogin/>}/>
<Route path="/redirect" element={<RedirectToLogin/>}/>
</Route>
<Route path="*" element={<Error/>}
/>
</Routes>)
}
export default PageRoutes