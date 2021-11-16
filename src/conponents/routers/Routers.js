import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Registration from "../registration/Registration";
import Users from "../users/Users";
import User from "../users/user/User";

export default function Routers() {
    return (
        <div>
            <Router>
                <div>
                    <Switch>


                        <Route path={'/users'} render={()=><Users/>}/>
                        <Route path={'/users:id'} component={User}/>
                        {/*<Redirect to='/registration'/>*/}

                    </Switch>
                </div>
            </Router>
        </div>
    );
}
