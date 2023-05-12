import { useNavigate } from "react-router-dom"

export const ContactForm = () => {
    const navigate = useNavigate();
    const onback =() =>(
        navigate(-1)
    );
    return (
        <div className="p-3">
            <div className="d-flex align-items-center mb-5">
                <button onClick={onback} className="btn btn-outline-success ">Back</button>
                <h2 clasName="h4 ms-3 ">New Contact</h2>
            </div>

            <form>
                <div className="mb-3 row">
                    <label for="staticEmail" className="col-4 col-form-label">Full Name</label>
                    <div className="col-8">
                        <input
                            type="text"
                            className="form-control"
                            id="staticEmail"
                            placeholder="Full name" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="inputPassword" className="col-4 col-form-label">Phone</label>
                    <div className="col-8">
                        <input
                            type="text"
                            className="form-control"
                            id="inputPassword"
                            placeholder="Phone"
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="inputPassword" className="col-4 col-form-label">Img url</label>
                    <div className="col-8">
                        <input
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