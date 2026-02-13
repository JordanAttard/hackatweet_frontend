import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../reducers/user";
import { Input } from "antd";
import styles from "../styles/SignUp.module.css";

function SignUp() {
  const dispatch = useDispatch();

  const [firstname, setFirstname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstname, username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Backend :", data);
        if (data.result) {
          console.log("Redux:", {
            token: data.token,
            username,
            firstname,
          });
          dispatch(login({ token: data.token, username, firstname }));
          //window.location.href = "/home"; //changer avec la bonne page
        } else {
          console.error("Erreur Backend :", data.error);
          alert(data.error);
        }
      });
  };

  return (
    <div className={styles.container}>
      <img src="/logo-twitter.png" alt="Logo" className={styles.logo} />
      <h2 className={styles.title}>Create your Hackatweet account</h2>

      <Input
        placeholder="Firstname"
        className={styles.input}
        onChange={(e) => setFirstname(e.target.value)}
        value={firstname}
      />
      <Input
        placeholder="Username"
        className={styles.input}
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <Input.Password
        placeholder="Password"
        className={styles.inputPassword}
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button className={styles.btn} onClick={() => handleSignUp()}>
        Sign up
      </button>
    </div>
  );
}

export default SignUp;
