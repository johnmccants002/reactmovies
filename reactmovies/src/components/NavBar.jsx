import {Link} from "react-router-dom";

export default function NavBar(props) {

    function handleLogOut() {
        // userService.logOut();
        // props.setUser(null);
    }

    return (<nav>
        <Link to="/movies">Movies</Link>
        &nbsp; | &nbsp;
        <Link to="/actors">Actors</Link>
        &nbsp; | &nbsp;
        <span>Welcome {props.user.username}</span>
        &nbsp; | &nbsp;
        <Link to="" onClick={handleLogOut}>Logout</Link>
    </nav>);
}