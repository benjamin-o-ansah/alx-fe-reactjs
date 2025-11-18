import axios from "axios";
const MINI_URL = "https://api.github.com/";
const BASE_URL = "https://api.github.com/search/users?q=";

export const fetchUserData = async ({ username, location, minRepos }) => {
  // Construct GitHub Search API query
  let query = username ? `${username} in:login` : "";
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const url = `${BASE_URL}${encodeURIComponent(query)}`;

  try {
    const response = await axios.get(url);
    const users = response.data.items;

    // For each user, fetch extra details (like public_repos & location)
    const detailedUsers = await Promise.all(
      users.map(async (user) => {
        const res = await axios.get(`${MINI_URL}users/${user.login}`);
        return res.data;
      })
    );

    return detailedUsers;
  } catch (error) {
    console.error("Error fetching advanced users:", error);
    throw error;
  }
};
