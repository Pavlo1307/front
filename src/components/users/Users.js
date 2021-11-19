import {useEffect, useState} from "react";
import {getUsers} from "../../servises/API";
import User from "./user/User";
import './Users.css'
import {Route, useHistory, Switch} from "react-router-dom";
import Registration from "../registration/Registration";
import {useDispatch, useSelector} from "react-redux";
import {addTodo} from "../../redux/actionsCreators";
import UpdateUser from "../updateUser/UpdateUser";

export default function Users() {
    const history = useHistory();
    const { users } = useSelector(({ todosReducer }) => todosReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchTodos()
    }, [])

    const fetchTodos = async () => {
        try {

            const response = await getUsers();
            dispatch(addTodo(response.data))

        } catch (e) {
            console.log(e)
        }

    }

    const showRegistration = () => {
        try {
            history.push(`/users/registration`);
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div>
            <div className="page">
                <div className="container">
                    <h3>Username</h3>
                    <h3>Email</h3>
                    <h3>First name</h3>
                    <h3>Last Name</h3>
                </div>

                <div className="second-container">
                    <button onClick={showRegistration}>create</button>
                    <Switch>
                        <Route path={'/users/registration'} render={() => <Registration/>}/>
                        <Route path={'/users/:id'} render={() => <UpdateUser/>}/>
                    </Switch>

                </div>
            </div>
            {
                users.map(value => <User key={value.id} user={value}/>)

            }


        </div>
    )
}
