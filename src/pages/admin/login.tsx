import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface LoginProps {
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const adminUser = 'admin'; 
    const adminPass = 'b4zaar4dm1n'; 

    if (username === adminUser && password === adminPass) {
      setIsAuthenticated(true);
      navigate('/admin');
    } else {
      alert('Incorrect username or password');
    }
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
