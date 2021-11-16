import {Link, useHistory} from "react-router-dom";
import {useState} from "react";
import '../registration/Registration.css'
import './LoginPage.css'
import {loginUser} from "../servises/API";

export default function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            console.log( email, password)
           const response = await loginUser({email, password})

            history.push(`/users${response.data.user._id}`)
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='pageStyle'>
            <form className='loginForm' onSubmit={handleSubmit}>
                <h2>Login</h2>

                <input type="email"
                       placeholder={'Email'}
                       value={email}
                       onChange={({target: {value}}) => setEmail(value)}
                />

                <input type="password"
                       placeholder={'Password'}
                       value={password}
                       onChange={({target:{value}}) => setPassword(value)}
                />
                <button type="submit" className='down-button'>Login</button>
            </form>
            <div className='link-div'>
                <p>Do you have account? </p>
                <Link to={'/registration'}> Registration</Link>
            </div>
        </div>
    )
}
