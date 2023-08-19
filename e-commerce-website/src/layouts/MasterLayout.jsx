import AppHeader from './../components/AppHeader/AppHeader'
import AppFooter from "./../components/AppFooter/AppFooter";
import { Outlet } from 'react-router-dom';

const MasterLayout=()=>{
return (
  <>
    <AppHeader />
    <Outlet/>
    <AppFooter />
  </>
);
}
export default MasterLayout;