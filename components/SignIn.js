import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../reducers/user";
import { Input } from "antd";
import styles from "../styles/SignUp.module.css";

function SignIn() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    fetch("http://localhost:3000/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(
            login({
              token: data.token,
              username: data.username,
              firstname: data.firstname,
            }),
          );
          window.location.href = "/home";
        }
      });
  };

  return (
    <div className={styles.container}>
      <img src="/logo-twitter.png" alt="Logo" className={styles.logo} />
      <h3 className={styles.title}>Connect to Hackatweet</h3>
      <Input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        className={styles.input}
      />
      <Input.Password
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        className={styles.inputPassword}
      />
      <button className={styles.btn} onClick={() => handleSignIn()}>
        Sign in
      </button>
    </div>
  );
}

export default SignIn;
