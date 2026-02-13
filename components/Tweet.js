import { useState } from "react";

export default function Tweet() {
  const [tweet, setTweet] = useState("");
  const [username, setUsername] = useState("");

  const handleTweet = async () => {
    if (!tweet.trim()) return;

    try {
      const res = await fetch("http://localhost:3000/tweet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          tweet: tweet,
          username: username,
          hashtag: tweet.match(/#\w+/g) || []
        })
      });

      const data = await res.json();
      console.log(data);

      setTweet(""); // reset champ

    } catch (err) {
      console.error("POST error:", err);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <textarea
        placeholder="What's happening?"
        value={tweet}
        onChange={(e) => setTweet(e.target.value)}
        maxLength={280}
        style={{
          width: "100%",
          height: 80,
          background: "black",
          color: "white",
          border: "1px solid gray",
          padding: 10,
        }}
      />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>{tweet.length}/280</span>

        <button onClick={handleTweet} disabled={!tweet.trim()}>
          Tweet
        </button>
      </div>
    </div>
  );
}
