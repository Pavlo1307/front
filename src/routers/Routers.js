import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Registration from "../components/registration/Registration";
import Users from "../components/users/Users";
import User from "../components/users/user/User";

export default function Routers() {
    return (
        <div>
            <Router>
                <div>
                    <Switch>

                        <Route path={'/users'} render={()=><Users/>}/>
                        <Route path={'/users:id'} component={User}/>
                        <Redirect to='/users/'/>

                    </Switch>
                </div>
            </Router>
        </div>
    );
}
