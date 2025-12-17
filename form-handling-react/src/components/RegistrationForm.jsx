
import { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [error, setErrors] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic Validation
    if (!username || email || !password) {
      setErrors('All fields are required!');
      return;
    }
    setErrors('');
    console.log('Form Submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <h2>Manual Controlled Form</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      <input name="username" placeholder="Username" value={username} onChange={handleChange} />
      <input name="email" type="email" placeholder="Email" value={email} onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" value={password} onChange={handleChange} />
      
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;