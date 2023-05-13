import { Link } from "react-router-dom"
import search from './img/search-outline.svg'
import   './sidebar.css';
export const Sidebar = ({ users }) => {
    return (
        <div className="p-3 border-end vh-100 sidebar ">
            <div className="mb-3 d-flex border-bottom pb-3">
           <div className="d-flex position-relative">
           <img className=" sidebar-icon " src={search}  width={15} height={15}/>
                <input className="search-input " type="search" />
           </div>
                <Link to="/add" className=" btn btn-outline-secondary ms-2  ">New</Link>
            </div>

          { (<ul className="sidebar-item">
                {
                    users.map((user)=>(
                         <li className="sidebar-item--list"  key={user.id}> 
                    <Link className="sidebar-item--link" to={`contact/${user.id}`}>{user.fullName} </Link>
                    </li>
                    ))}
            </ul>
            ) }
        </div>
    );

    
};

