import './App.css';
import NavBar from "../../components/NavBar";
import {useState} from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import LoginPage from "../Authentication/LoginPage";
import MoviesPage from "../MoviesPage/MoviesPage";
import ActorsPage from "../ActorsPage/ActorsPage";


export default function App() {
  const [user, setUser] = useState(
    null
  );
  return (<main className="App">
          {user ? <>
              <NavBar user={user} setUser={setUser}/>
              <Switch>
                  <Route path="/movies">
                      <MoviesPage user={user}/>
                  </Route>
                  <Route path="/actors">
                      <ActorsPage/>
                  </Route>
                  <Redirect to="/"/>
              </Switch>
          </> : <LoginPage setUser={setUser}/>}
      </main>);
}
