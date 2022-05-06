import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState({});
  const { userId } = useParams();
  useEffect(() => {
    axios
      .get(" https://jsonplaceholder.typicode.com/users/?id=" + userId)
      .then((res) => setUser(res.data[0]))
      .catch((err) => console.log(err));
  }, [userId]);
  return (
    <div>
      <h1>{user && user.name}</h1>
      <h3>{user && user.email}</h3>
      <h3>{user.address && user.address.city}</h3>
    </div>
  );
};
export default Profile;
