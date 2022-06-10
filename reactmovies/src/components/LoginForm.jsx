import {useState} from 'react';
// import * as usersService from '../../utilities/users-service';

export default function LoginForm({setUser}) {
    const [credentials, setCredentials] = useState({
        username: '',
    });
    const [error, setError] = useState('');

    function handleChange(evt) {
        setCredentials({...credentials, [evt.target.name]: evt.target.value});
        setError('');
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        setUser(credentials);

    }

    return (
        <div>
            <div className="form-container" onSubmit={handleSubmit}>
                <form autoComplete="off">
                    <label>Username</label>
                    <input type="text" name="username" value={credentials.username} onChange={handleChange} required/>
                    <button type="submit">LOG IN</button>
                </form>
            </div>
            <p className="error-message">&nbsp;{error}</p>
        </div>
    );
}