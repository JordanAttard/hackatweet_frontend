import { useEffect, useState } from "react";

export default function LastTweet() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
  const loadTweets = async () => {
    try {
      const res = await fetch("http://localhost:3000/tweet");
      const data = await res.json();

      if (!Array.isArray(data)) throw new Error("Invalid API format");

      setTweets(data);

    } catch (err) {
      console.error(err);
      setTweets([]);
    }
  };

  loadTweets();
    }, []);

  return (
    <div>
      {tweets.map(tweet => (
        <div key={tweet._id} className="tweet">
          <strong>{tweet.username?.[0]?.username || "User"}</strong>

          <p>{tweet.tweet}</p>

          <small>
            {new Date(tweet.date).toLocaleString()}
          </small>
        </div>
      ))}
    </div>
  );
}
