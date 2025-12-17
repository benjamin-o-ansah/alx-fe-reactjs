import { Routes, Route, Link } from 'react-router-dom';

// Simple sub-components
const ProfileDetails = () => <div><h3>Profile Details</h3><p>User info...</p></div>;
const ProfileSettings = () => <div><h3>Profile Settings</h3><p>Manage account...</p></div>;

const Profile = () => {
  return (
    <div style={{ padding: '20px', border: '1px solid #ddd' }}>
      <h2>User Profile Dashboard</h2>
      
      <nav style={{ marginBottom: '20px' }}>
        <Link to="details">Details</Link> | <Link to="settings">Settings</Link>
      </nav>

      <hr />

      {/* Internal Routing Logic */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
        {/* Optional: Default view when at /profile/ */}
        <Route path="/" element={<div>Please select a sub-section.</div>} />
      </Routes>
    </div>
  );
};

export default Profile;