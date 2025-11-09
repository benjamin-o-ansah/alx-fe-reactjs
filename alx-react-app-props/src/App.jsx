import UserContext from './components/userContext';
import ProfilePage from './components/ProfilePage';
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';

function App() {
 const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
 const userProfileInformation = {name:"Alice", age:"25", bio:"Loves hiking and photography"};
  return (
    <>
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>

    <Header />
    <Counter /> 
    <UserContext.Provider value={userProfileInformation}>
      <UserProfile  />
    </UserContext.Provider>
    
    <MainContent />
    <Footer /> 
    </>
  )
}

export default App
