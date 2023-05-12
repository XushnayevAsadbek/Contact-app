import { Sidebar } from "./sidebar/sidebar.jsx"
import  PropTypes  from 'prop-types';

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
Layout.PropTypes={
      children:PropTypes.any,
      users:PropTypes.array
    }