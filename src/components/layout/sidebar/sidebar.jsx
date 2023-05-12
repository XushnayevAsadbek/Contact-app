import { Link } from "react-router-dom"
import  PropTypes  from 'prop-types';

export const Sidebar = ({ users }) => {
    return (
        <div className="p-3 border-end vh-100 ">
            <div className="mb-3 d-flex">
                <input className=" form-control " type="text" mt-3 />
                <Link to="/add" className="btn  btn-outline-success ms-2 ">New</Link>
            </div>

          {users.lenght > 0 ? (<ul>
                {
                    users.map((user)=>(
                         <li  key={user.id}> 
                    <Link to={`contact/${user.id}`}>{user.FullName} </Link>
                    </li>
                    ))}
            </ul>
            ) :(<>Users Not fond</>
            )}
        </div>
    );

    
};

Sidebar.PropTypes ={
        users:PropTypes.array,
    };