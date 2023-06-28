import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";

function UserDetail() {
  const { id } = useParams();
  const location = useLocation();
  const [user, setUser] = useState(location.state);

  console.log(location);

  useEffect(() => {
    if (!user.id) {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => res.json())
        .then((data) => setUser(data));
    }
  }, [id, user]);
  return (
    <div>
      UserDetail
      <h2>Kullanıcı Detayları </h2>
      {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
      {user && <pre>{JSON.stringify(user, null, 2)}</pre>}
      <Link to={`/users/${Number(id) + 1}`}> Sonraki Kullanıcı</Link>
    </div>
  );
}

export default UserDetail;
