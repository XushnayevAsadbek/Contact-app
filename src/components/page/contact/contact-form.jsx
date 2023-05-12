import { useRef } from "react";
import { useNavigate } from "react-router-dom"
import { v4 } from "uuid";
import PropTypes  from "prop-types";

export const ContactForm = ({ setUsers }) => {
    const navigate = useNavigate();
    const fullName = useRef();
    const phone = useRef();
    const img = useRef();

    const onback =() =>(
        navigate(-1)
    );

    const onAdd =(evt) =>{
        evt.preventDefault();


        const newContact =  {
            id:v4(),
            fullName: fullName.current.value,
            phone: phone.current.value ,
            img: img.current.value,
        };
        setUsers((prev) => [...prev, newContact]);
        navigate(`/contact/${newContact.id}`)
        console.log(setUsers);
        console.log(newContact );
    };

    return (
        <div className="p-3">
            <div className="d-flex align-items-center mb-5">
                <button onClick={onback} className="btn btn-outline-success ">Back</button>
                <h2 className="h4 ms-3 ">New Contact</h2>
            </div>

            <form onSubmit={onAdd}>
                <div className="mb-3 row">
                    <label  className="col-4 col-form-label">Full Name</label>
                    <div className="col-8">
                        <input
                         ref={fullName}
                            type="text"
                            className="form-control"
                            id="staticEmail"
                            placeholder="Full name" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label  className="col-4 col-form-label">Phone</label>
                    <div className="col-8">
                        <input 
                        ref={phone}
                            type="text"
                            className="form-control"
                            id="inputPassword"
                            placeholder="Phone"
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label  className="col-4 col-form-label">Img url</label>
                    <div className="col-8">
                        <input 
                        ref={img}
                            type="url"
                            className="form-control"
                            id="inputPassword"
                            placeholder="Img url"
                        />
                    </div>
                </div>

                <button className="btn btn-outline-success">Add</button>
            </form>
        </div>
    )
}

ContactForm.propTypes ={
    setUsers:PropTypes.func,
}; 