import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const style ={
    marginRight:'10px'
  };
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);

    try {
      const data = await fetchUserData({ username, location, minRepos });
      setUsers(data);
    } catch (err) {
      setError("Looks like we can't find users with the given criteria");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-6">
        <input
      
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border rounded px-3 py-2 mr-1"
        />
        <input
     
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border rounded px-3 py-2 mr-1"
        />
        <input
   
          type="number"
          placeholder="Min Repos"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border rounded px-3 py-2"
        />
        <button
          type="submit"
          className="bg-[#50d71e] text-black rounded px-4 py-2 hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div key={user.id} className="border rounded p-4 flex flex-col items-center">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-24 h-24 rounded-full mb-2"
            />
            <h3 className="font-bold text-lg">{user.login}</h3>
            {user.location && <p className="text-gray-500">{user.location}</p>}
            <p className="text-gray-600">Repos: {user.public_repos}</p>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 mt-2 hover:underline"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
