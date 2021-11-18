import {useReducer, useState} from "react";
import {registrationUser} from "../../servises/API";
import './Registration.css'
import {pushNewTodo} from "../../redux/actionsCreators";
import {useDispatch, useSelector} from "react-redux";

const reducer = (state, action) => {
    switch (action.type) {
        case 'FIRST_NAME':
            return { ...state, first_name: action.payload }
        case 'LAST_NAME':
            return { ...state, last_name: action.payload }
        case 'EMAIL':
            return { ...state, email: action.payload }
        case 'PHONE':
            return { ...state, phone: action.payload }
        case 'PASSWORD':
            return { ...state, password: action.payload }
        default:
            return state
    }
}

export default function Registration() {

    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('')
    const [error, setError] = useState('');
    const dispatch = useDispatch();


    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            console.log(role)
            const resp = await registrationUser({ username, first_name, last_name, email, password, role });

            dispatch(pushNewTodo(resp.data));

        } catch (err) {
            setError(err.response.data.message)
        }
    }

    return (
        <div className='pageStyle'>

            <form className='formRegistration' onSubmit={handleSubmit}>
                <h2>Register</h2>
                {
                   error && <div className='div-error'> {error }</div>
                }
                <input type="text"
                       placeholder={'User name'}
                       value={username}
                       onChange={({ target: { value } }) => setUserName(value)}
                />
                <input type="text"
                       name={'username'}
                       placeholder={'First name'}
                       value={first_name}
                       onChange={({ target: { value } }) => setFirstName(value)}
                />
                <input type="text"
                       placeholder={'Last name'}
                       value={last_name}
                       onChange={({ target: { value } }) => setLastName(value)}
                />
                <input type="email"
                       placeholder={'Email'}
                       value={email}
                       onChange={({ target: { value } }) => setEmail(value)}
                />
                <input type="password"
                       placeholder={'Password'}
                       value={password}
                       onChange={({ target: { value } }) => setPassword(value)}
                />
                <div onChange={({ target: { value } }) => setRole(value)}>
                    <input type="radio" value="driver" name="role" /> driver
                    <input type="radio" value="admin" name="role" /> admin
                </div>

                <button className='down-button'>Registration</button>
            </form>
        </div>

    );
}
