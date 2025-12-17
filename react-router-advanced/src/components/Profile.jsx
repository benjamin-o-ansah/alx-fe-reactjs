import { Link, Outlet } from 'react-router-dom';

const Profile = () => (
  <div style={{ display: 'flex', gap: '20px' }}>
    <nav style={{ borderRight: '1px solid #ccc', padding: '10px' }}>
      <h3>Profile Menu</h3>
      <ul>
        <li><Link to="details">Details</Link></li>
        <li><Link to="settings">Settings</Link></li>
      </ul>
    </nav>
    <div style={{ flex: 1 }}>
      <h2>User Profile</h2>
      {/* Outlet is where the child routes will render */}
      <Outlet />
    </div>
  </div>
);

const ProfileDetails = () => <div><h3>Profile Details</h3><p>User info goes here...</p></div>;
const ProfileSettings = () => <div><h3>Profile Settings</h3><p>Manage your account...</p></div>;

export { Profile, ProfileDetails, ProfileSettings };