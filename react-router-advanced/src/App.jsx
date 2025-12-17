// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Profile, ProfileDetails, ProfileSettings } from './components/Profile';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Home = () => <h2>Home Page</h2>;
const Login = () => <h2>Login Page (Public)</h2>;

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <nav>
        <Link to="/profile">Go to Profile</Link>
      </nav>

      {/* <Routes>
        {/* The '*' allows descendant <Routes> inside the Profile component */}
        {/* <Route path="/profile/*" element={<Profile />} /> */}
      {/* </Routes>} */}
  

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        
        {/* Dynamic Route */}
        <Route path="/blog/:postId" element={<BlogPost />} />

        Protected Nested Route
        <Route path="/profile" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }>
          {/* Nested routes are relative to the parent path */}
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
