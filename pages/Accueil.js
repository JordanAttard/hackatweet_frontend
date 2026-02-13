import Trends from "../components/Trends";
import Tweet from "../components/Tweet";
import LastTweet from "../components/LastTweet";
import styles from "../styles/Accueil.module.css";

export default function Accueil() {
    return (
        <div>
            <div className={styles.center}>
                <h2>Home</h2>
                <Tweet />
            </div>

            <div className={styles.center}>
                <LastTweet />
            </div> 

            <div className={styles.right}>
                <Trends />
            </div>
        </div>
    )
}