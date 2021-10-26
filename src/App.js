import {useEffect, useState} from "react";
import {getUsers} from "./conponents/servises/API";

function App() {
  let [users, setUsers] = useState([]);

  useEffect(()=>{
    getUsers().then(value => setUsers(value.data));

  },[])
  console.log(users)
  return (
    <div>

    </div>
  );
}

export default App;
