import { useParams } from "react-router-dom"

 export const Contact =() =>{

    const params = useParams();

    console.log( params);
    return(
        <>
        Contact {params.id}
        </>
    )

    
}