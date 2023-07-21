import { useContext } from "react";
import UserContext from "../contex/UserContext";

function Profile() {
  const { user, setUser } = useContext(UserContext);
  console.log(user);

  const handleLogin = () => {
    setTimeout(() => {
      setUser({ id: 1, username: "b.busra", bio: "lorem ipseum" });
    }, 1500);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <code>{JSON.stringify(user)}</code>
    </div>
  );
}

export default Profile;
