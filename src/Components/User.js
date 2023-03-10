import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function User() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([{}]);
  const { id } = useParams();

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUser(res.data))
      .finally(() => setLoading(false))
  }, [id]);

  return (
    <div>

      {loading && <div>Loading...</div>}
      <code>
        {!loading && <ul>
          <li>
            <strong>ID:</strong>  {user.id}
          </li>
          <li>
            <strong>Name:</strong>  {user.name}
          </li>
          <li>
            <strong>User Name:</strong>  {user.username}
          </li>
          <li>
            <strong>Mail:</strong>  {user.email}
          </li>
          <li><strong>Phone Number:</strong></li> {user.phone}
          <li>
            <strong>Address:</strong>
            <br />
            {user.address.street}
            {user.address.suite}<br />
            {user.address.city} <br />
            {user.address.zipcode}
          </li>
        </ul>}
      </code>
      <br /><br />
      {parseInt(id) > 1 && <Link className="footer-button" to={`/users/${parseInt(id) - 1}`}>Previous User ({parseInt(id) - 1})</Link>}

      {parseInt(id) < 10 && <Link className="footer-button" to={`/users/${parseInt(id) + 1}`}>Next User ({parseInt(id) + 1})</Link>}
    </div>
  );
}

export default User;
