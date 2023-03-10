import { useEffect, useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import axios from "axios";
import User from "./User";

function Users() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);



  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .finally(() => setLoading(false))
  }, []);


  return (
    <div className="abc">
      <br />
      <h1>Users</h1>
      {loading && <div>Loading...</div>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <NavLink to={`${user.id}`}>{user.name}</NavLink>
          </li>
        ))}
      </ul>

      <h3>Please Select a user.</h3>

      <Routes>
        <Route path=':id' element={<User />} />
      </Routes>

    </div>
  );
}

export default Users;
