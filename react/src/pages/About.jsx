import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

const About = () => {
  const [data, setData] = useState(null);
//   const {id} = useParams();
  useEffect(() => {
    fetch("https://fakestoreapi.com/users/1")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  if (!data) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>User Info</h1>
      <p><b>Username:</b> {data.username}</p>
      <p><b>First Name:</b> {data.name.firstname}</p>
      <p><b>Last Name:</b> {data.name.lastname}</p>
      <p><b>Email:</b> {data.email}</p>
    </div>
  );
};

export default About;
