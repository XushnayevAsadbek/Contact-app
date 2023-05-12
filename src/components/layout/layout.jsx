import { Sidebar } from "./sidebar/sidebar.jsx"

export const Layout =({children , users}) => {
    return(
        <div className="d-flex">
          <Sidebar users={users} />
          <div>
            {children }
          </div>
        </div>
 
    );

   
}; 
