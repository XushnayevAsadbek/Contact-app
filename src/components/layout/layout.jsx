import { Sidebar } from "./sidebar/sidebar.jsx"


export const Layout =({children}) => {
    return(
        <div className="d-flex">
          <Sidebar />
          <div>
            {children}
          </div>
        </div>
 
    );

};