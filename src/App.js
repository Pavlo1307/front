import {BrowserRouter as Router, Link, Route, Switch, Redirect} from "react-router-dom";
import {useEffect, useState} from "react";
import {getUsers} from "./conponents/servises/API";
import Registration from "./conponents/registration/Registration";
import Routers from "./conponents/routers/Routers";

function App() {

  return (
      <div>
          <Routers/>
      </div>
  );
}

export default App;
