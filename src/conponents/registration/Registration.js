import {useReducer} from "react";
import {registrationUser} from "../servises/API";
import './Registration.css'
import {Link} from "react-router-dom";

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

export default function Registration() {

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
            console.log(first_name, last_name, phone, email, password)
            await registrationUser({first_name, last_name, email, phone, password})
                .then(resp =>console.log(resp))
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='pageStyle'>
            <form className='formRegistration' onSubmit={handleSubmit}>
                <h2>Register</h2>
                <input type="text"
                       placeholder={'First name'}
                       value={first_name}
                       onChange={({ target: { value } }) => dispatch({ type: 'FIRST_NAME', payload: value })}
                />
                <input type="text"
                       placeholder={'Last name'}
                       value={last_name}
                       onChange={({target: {value}}) => dispatch({ type:'LAST_NAME', payload: value })}
                />
                <input type="email"
                       placeholder={'Email'}
                       value={email}
                       onChange={({target: {value}}) => dispatch({type:'EMAIL', payload: value})}
                />
                <input type="text"
                       placeholder={'Phone'}
                       value={phone}
                       onChange={({target: {value}}) => dispatch({type:'PHONE', payload: value})}
                />
                <input type="password"
                       placeholder={'Password'}
                       value={password}
                       onChange={({target:{value}}) => dispatch({type:'PASSWORD', payload: value})}
                />
                <button className='down-button'>Registration</button>
            </form>
            <div className='link-div'>
                <p>Do you have account? </p>
                <Link to={'/login'}> Log in</Link>
            </div>
        </div>

    );
}
