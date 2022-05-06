import { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./UserCard";
import { Container, Row } from "reactstrap";

const ListUsers = () => {
  const [users, setUsers] = useState([]);
  console.log(users, "testttt");

  useEffect(() => {
    axios
      .get(" https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Container>
        <Row>
          {users.map((user, i) => (
            <UserCard user={user} key={i} />
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default ListUsers;
