import {useReducer} from "react";
import {useParams} from "react-router-dom"
import {registrationUser} from "../servises/API";
import '../registration/Registration.css'
import {useDispatch, useSelector} from "react-redux";
import {todosReducer, } from "../../redux/reducers/todos";

const reducer = (state, action) => {
    switch (action.type){
        case 'FIRST_NAME':
            return {...state, first_name: action.payload}
        case 'LAST_NAME':
            return {...state, last_name: action.payload}
        case 'EMAIL':
            return {...state, email: action.payload}
        case 'PHONE':
            return {...state, phone: action.payload}
        case 'PASSWORD':
            return {...state, password: action.payload}
        default:
            return state
    }
}

export default function UpdateUser() {
    const {id} = useParams();
    const { users } = useSelector(({ todosReducer }) => todosReducer)

    const dispatchRedux = useDispatch();

    const userForUpdate = users.find(user => user._id === id)
    console.log(userForUpdate.first_name, 'sssss');

    const [{ first_name, last_name, email, phone, password}, dispatch] = useReducer(reducer, {
        first_name: '',
        last_name: '',
        email: '',
        phone:'',
        password: ''
    })



    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const resp = await registrationUser({first_name, last_name, email, phone, password});

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='pageStyle'>
            <form className='formRegistration' onSubmit={handleSubmit}>
                <h2>{userForUpdate.first_name}</h2>
                <input type="text"
                       placeholder={userForUpdate.first_name}
                       value={first_name}
                       onChange={({ target: { value } }) => dispatch({ type: 'FIRST_NAME', payload: value })}
                />
                <input type="text"
                       placeholder={userForUpdate.last_name}
                       value={last_name}
                       onChange={({target: {value}}) => dispatch({ type:'LAST_NAME', payload: value })}
                />
                <input type="email"
                       placeholder={userForUpdate.email}
                       value={email}
                       onChange={({target: {value}}) => dispatch({type:'EMAIL', payload: value})}
                />
                <input type="text"
                       placeholder={userForUpdate.phone}
                       value={phone}
                       onChange={({target: {value}}) => dispatch({type:'PHONE', payload: value})}
                />
                <input type="password"
                       placeholder={'Password'}
                       value={password}
                       onChange={({target:{value}}) => dispatch({type:'PASSWORD', payload: value})}
                />
                <button className='down-button'>Update</button>
            </form>
        </div>

    );
}
