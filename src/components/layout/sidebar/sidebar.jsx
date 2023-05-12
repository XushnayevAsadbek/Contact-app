import { Link } from "react-router-dom"

export const Sidebar = ({ users }) => {
    return (
        <div className="p-3 border-end vh-100 ">
            <div className="mb-3 d-flex">
                <input className=" form-control " type="text" />
                <Link to="/add" className="btn  btn-outline-success ms-2 ">New</Link>
            </div>

          { (<ul>
                {
                    users.map((user)=>(
                         <li  key={user.id}> 
                    <Link to={`contact/${user.id}`}>{user.fullName} </Link>
                    </li>
                    ))}
            </ul>
            ) }
        </div>
    );

    
};

