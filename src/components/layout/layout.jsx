import { Outlet } from "react-router-dom"
import { Sidebar } from "./sidebar/sidebar.jsx"

export const Layout =() => {
    return(
        <div className="d-flex">
          <Sidebar />
          <div>
            <Outlet />
          </div>
        </div>
 
    );

};