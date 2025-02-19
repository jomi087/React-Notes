
import Header from './header'
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Header/>
      <Outlet />   {/* This will render the current page based on the route */}
    </div>
  )
}

export default Layout;

