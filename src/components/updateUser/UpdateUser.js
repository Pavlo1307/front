import {useReducer, useState} from "react";
import {useParams, useHistory} from "react-router-dom"
import {deleteUserById, updateUserById} from "../../servises/API";
import '../registration/Registration.css'
import {useDispatch, useSelector} from "react-redux";
import {todosReducer,} from "../../redux/reducers/todos";
import {delTodo, updateTodo} from "../../redux/actionsCreators";

export default function UpdateUser() {
    const { id } = useParams();
    const history = useHistory();
    const { users } = useSelector(({ todosReducer }) => todosReducer)

    const dispatch = useDispatch();

    const userForUpdate = users.find(user => user._id === id)

    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUserName] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            if (first_name === '') setFirstName(userForUpdate.first_name)
            if (last_name === '') setLastName(userForUpdate.last_name)
            if (email === '') setEmail(userForUpdate.email)
            if (username === '') setUserName(userForUpdate.username)

            const resp = await updateUserById(userForUpdate._id, { username, first_name, last_name, email});

            dispatch(updateTodo(resp.data))
            history.push('/users')

        } catch (err) {
            console.log(err);
        }
    }

    const deleteUser = async (e) => {
        try {
            e.preventDefault();

            history.push('/users')
            await deleteUserById(userForUpdate._id);
            dispatch(delTodo(userForUpdate._id))

        }catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='pageStyle'>
            <form className='formRegistration'>
                <h2>{userForUpdate.first_name}</h2>
                <input type="text"
                       placeholder={userForUpdate.username}
                       value={username}
                       onChange={({target: {value}}) => setUserName(value)}
                />
                <input type="text"
                       placeholder={userForUpdate.first_name}
                       value={first_name}
                       onChange={({ target: { value } }) => setFirstName(value)}
                />
                <input type="text"
                       placeholder={userForUpdate.last_name}
                       value={last_name}
                       onChange={({ target: { value } }) => setLastName(value)}
                />
                <input type="email"
                       placeholder={userForUpdate.email}
                       value={email}
                       onChange={({ target: { value } }) => setEmail(value)}
                />
                <div className='div-for-delete'>
                    <button className='down-button' onClick={handleSubmit}>Update</button>
                    <button className='down-button' onClick={deleteUser}>Delete</button>
                </div>
            </form>
        </div>

    );
}
