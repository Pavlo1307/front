import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Registration from "../registration/Registration";

export default function Routers() {
    return (
        <div>
            <Router>
                <div>
                    <Switch>

                        <Route path={'/registration'} render={()=><Registration/>}/>
                        <Redirect to='/registration' />
                    </Switch>


                </div>
            </Router>
        </div>
    );
}
