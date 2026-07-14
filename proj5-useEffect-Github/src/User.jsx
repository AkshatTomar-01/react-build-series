import { useState, useEffect } from "react";

function User({ username }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function fetchUser() {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        if (!res.ok) {
          throw new Error("User not found");
        }
        const data = await res.json();
        if (!ignore) {
          setUser(data);
          setLoading(false);
        }
      } 
      
      catch (err) {
        if (!ignore) {
          setError(err.message);
          setLoading(false);
        }
      }
    }

    fetchUser();

    return () => {
      ignore = true;
    };
  }, [username]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px", maxWidth: "300px" }}>
      <img
        src={user.avatar_url}
        alt={user.login}
        style={{ width: "100px", height: "100px", borderRadius: "50%" }}
      />
      <h2>{user.name || user.login}</h2>
      <p>👥 Followers: {user.followers}</p>
      <p>📦 Repos: {user.public_repos}</p>
    </div>
  );
}

export default User;