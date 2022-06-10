import LoginForm from '../../components/LoginForm';
import {useState} from "react";

export default function LoginPage({setUser}) {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <main>
            <h1>Login Page</h1>
            <LoginForm setUser={setUser}/>
        </main>
    );
}