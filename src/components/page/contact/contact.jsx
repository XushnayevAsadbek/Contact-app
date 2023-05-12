import { useParams,useNavigate } from "react-router-dom"
import PropTypes from 'prop-types'


 export const Contact =({users}) =>{
    const params = useParams();
    console.log( params);
    const navigate = useNavigate();
    const foundUser = users.find((user) => user.id === params.id)

    if(!foundUser){
        return <>Error user not found </>
    }

    const onEdit = () =>{
        navigate('/edit')
    }
    
    return(
        <>
       <img src={foundUser.img}  
       width={350}
       height={350}
       style={{
        objectFit: 'contain',
       }}
       />

       <button onClick={onEdit}>Edit</button>
       <button>Delete</button>

        </>
    );

    
};

Contact .propTypes ={
    users:PropTypes.array,
};