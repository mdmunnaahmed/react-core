import { useState, useEffect } from "react";

const App = () => {
  let [data, setData] = useState(null);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json(); // Await the JSON response
        setData(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    })();
  }, []); // Add an empty dependency array to only run once when the component mounts

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div style={{ maxWidth: "500px", margin: "100px auto" }}>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

export default App;
