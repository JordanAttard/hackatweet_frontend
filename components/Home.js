import styles from "../styles/Home.module.css";
import { useState } from "react";
import { Modal } from "antd";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

function Login() {
  const [isSignUpModalVisible, setIsSignUpModalVisible] = useState(false);
  const [isSignInModalVisible, setIsSignInModalVisible] = useState(false);
  console.log(isSignUpModalVisible);
  console.log(isSignInModalVisible);
  return (
    <div className={styles.container}>
      <div className={styles.gauche}>
        <img src="/logo-twitter.png" alt="Logo" className={styles.bigLogo} />
      </div>

      <div className={styles.droite}>
        <div className={styles.content}>
          <img
            src="/logo-twitter.png"
            alt="Logo"
            className={styles.smallLogo}
          />
          <h1 className={styles.title}>
            See what's <br /> happening
          </h1>
          <h2 className={styles.subtitle}>Join Hackatweet today.</h2>

          <button
            className={styles.signUpBtn}
            onClick={() => setIsSignUpModalVisible(true)}
          >
            Sign up
          </button>
          <p className={styles.text}>Already have an account?</p>
          <button
            className={styles.signInBtn}
            onClick={() => setIsSignInModalVisible(true)}
          >
            Sign in
          </button>
        </div>
      </div>
      <Modal
        open={isSignUpModalVisible}
        onCancel={() => setIsSignUpModalVisible(false)}
        footer={null}
        closable={true}
        centered
        className="custom-modal"
      >
        <SignUp />
      </Modal>

      <Modal
        open={isSignInModalVisible}
        onCancel={() => setIsSignInModalVisible(false)}
        footer={null}
        closable={true}
        centered
        className="custom-modal"
      >
        <SignIn />
      </Modal>
    </div>
  );
}

export default Login;
