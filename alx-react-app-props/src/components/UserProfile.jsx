import { useContext} from 'react';
import UserContext from './userContext';

function UserProfile() {
    const userProfileInformation = useContext(UserContext);
    return (
        <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
            <h2 style={{ color: 'blue' }}>{userProfileInformation.name}</h2>
            <p>Age: <span style={{ fontWeight: 'bold' }}>{userProfileInformation.age}</span></p>
            <p>Bio: {userProfileInformation.bio}</p>
        </div>
    );
}

export default UserProfile