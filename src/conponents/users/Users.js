import {useEffect, useState} from "react";
import {getUsers} from "../servises/API";
import User from "./user/User";

export default function Users() {

    const [users, setUsers] = useState([]);
    useEffect(()=>{
        getUsers().then(value => setUsers(value.data))
    },[])

    return(
        <div>
            {
                users.map(value => <User key={value.id} user={value}/>)
            }
        </div>
    )
}
