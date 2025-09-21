// src/components/Search.jsx
import React, { useState } from "react";
import { searchUsers, fetchUserData } from "../services/githubService"; // ✅ include fetchUserData

function Search() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState(0);
  const [results, setResults] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null); // ✅ state for detailed user
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResults([]);
    setError("");
    setSelectedUser(null); // reset details
    setLoading(true);

    try {
      const users = await searchUsers({ query, location, minRepos });
      if (users.length === 0) {
        setError("Looks like we can’t find the user");
      } else {
        setResults(users);
      }
    } catch {
      setError("Looks like we can’t find the user");
    } finally {
      setLoading(false);
    }
  };

  // ✅ fetchUserData when clicking a username
  const handleUserClick = async (username) => {
    setLoading(true);
    setError("");
    try {
      const userData = await fetchUserData(username);
      setSelectedUser(userData);
    } catch {
      setError("Could not fetch user details");
    } finally {
      setLoading(false);
    }
}};

  return (
    <div className="search-container p-4 max-w-xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Search GitHub username..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-2 border rounded"
          required
        />

        <input
          type="text"
          placeholder="Filter by location (e.g. South Africa)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full px-4 py-2 border rounded"
        />

        <input
          type="number"
          placeholder="Minimum number of public repos"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full px-4 py-2 border rounded"
          min={0}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      <div className="result-container mt-6">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-600">{error}</p>}

        {/* Search results */}
        {results.length > 0 && (
          <div className="grid gap-4 mt-4">
            {results.map((user) => (
              <div
                key={user.id}
                onClick={() => handleUserClick(user.login)} // ✅ click fetches details
                className="border rounded p-4 flex items-center space-x-4 cursor-pointer hover:bg-gray-100"
              >
                <img
                  src={user.avatar_url}
                  alt={`${user.login} avatar`}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h2 className="text-lg font-semibold">{user.login}</h2>
                  <p className="text-sm text-gray-500">Click for details</p>
                </div>
              </div>
            ))}
          </div>
        )}</div>

        {/* ✅ Show detailed user info */}
        {selectedUser && (
          <div className="mt-6 border p-4 rounded bg-gray-50">
            <h2 className="text-xl font-bold">{selectedUser.login}</h2>
            <p>{selectedUser.bio || "No bio available"}</p>
            <p>Followers: {selectedUser.followers}</p>
            <p>Public Repos: {selectedUser.public_repos}</p>
            <a
              href={selectedUser.html_url}
              target="_blank"
              rel="no"></a>
              </div>)
              }
</div>)


