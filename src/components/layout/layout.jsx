import { Sidebar } from "./sidebar/sidebar.jsx"
import  PropTypes  from 'prop-types';

export const Layout =({children}) => {
    return(
        <div className="d-flex">
          <Sidebar />
          <div>
            {children}
          </div>
        </div>
 
    );

    Layout.PropTypes={
      children:PropTypes.any,
    }
};