import {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import {getUser} from "../../servises/API";

export default function User() {
    const {id} = useParams();
    const [user, setUser] = useState({});

    useEffect(()=>{
        getUser(id).then(value => setUser(value.data))
    },[id])

    return(
        <div>
            {user.first_name} - {user.last_name}
            <br/>
            {user.phone}
        </div>
    )
}
