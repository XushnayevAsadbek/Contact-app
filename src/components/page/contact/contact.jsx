import { useParams, useNavigate } from "react-router-dom"
import PropTypes from 'prop-types'
import './contact.css'

export const Contact = ({ users }) => {
    const params = useParams();
    console.log(params);
    const navigate = useNavigate();
    const foundUser = users.find((user) => user.id === params.id)

    if (!foundUser) {
        return <>Error user not found </>
    }

    const onEdit = () => {
        navigate('/edit')
    }

    return (
        <div className="contact">
            <div>
                <img className="contact-img" src={foundUser.img}
                    width={200}
                    height={200}
                    style={{
                        objectFit: 'contain',
                        marginRight: '15px',
                        borderRadius: '15px'
                    }}
                />
            </div>
            <div className="contact-founduser">
                <div >
                <p className="m-0 contact-name"> <span>Fullname : </span> {foundUser.fullName}</p>
                <p className="contact-phone"><span>Phone : </span> {foundUser.phone}</p>
                </div>


                <button className="contact__btn--edit" onClick={onEdit}>Edit</button>
                <button className="contact__btn--deelet">Delete</button>
            </div>

        </div>
    );


};

Contact.propTypes = {
    users: PropTypes.array,
};