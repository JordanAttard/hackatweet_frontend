import { useEffect, useState } from "react";

export default function Trends() {
    const [trends, setTrends]= useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/tweet/trends')
            .then(res => res.json())
            .then(data => {
            const formatted = data.map(t => ({
                tag: t._id,
                num: t.count
            }));

            setTrends(formatted);
            });
    }, []);

    return (
        <div className="trends">
            <h3>Trends</h3>

            {trends.map((t, i) => (
                <div key={i} className="trend">
                <strong>{t.tag}</strong>
                <p>{t.num} Tweet{t.num > 1 && "s"}</p>
                </div>
            ))}
        </div>
    );
}
