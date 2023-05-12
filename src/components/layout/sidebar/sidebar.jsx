import { Link } from "react-router-dom"

export const Sidebar = () => {
    return (
        <div className="p-3 border-end vh-100 ">
            <div className="mb-3 d-flex">
                <input className=" form-control " type="text" />
                <Link to="/add" className="btn  btn-outline-success ms-2 ">New</Link>
            </div>

            <ul>
                <li > 
                    <Link to="contact/1">An Item </Link>
                    </li>
                <li >
                     <Link to="contact/2">An Item </Link>
                     </li>
            </ul>
        </div>
    )
}