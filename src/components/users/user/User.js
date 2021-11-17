import '../Users.css'
import {Route, useHistory} from "react-router-dom";
import Registration from "../../registration/Registration";

export default function User({ user }) {
    const history = useHistory();

    const updateUser = () => {
        try {
            history.push(`/users/${user._id}`);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <div className="container" onClick={updateUser}>
                <div className="user-container">
                    {user.username}
                </div>
                <div className="user-container">
                    {user.email}
                </div>
                <div className="user-container">
                    {user.first_name}
                </div>
                <div className="user-container">
                    {user.last_name}
                </div>

            </div>




        </>

    )
}
