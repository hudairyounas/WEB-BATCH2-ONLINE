import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(email, password);
      toast.success('Successfully logged in!');
      navigate('/');
    } catch (error) {
      toast.error(error.message);
    }
    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      toast.success('Successfully logged in with Google!');
      navigate('/');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-base-100 shadow-sm border border-base-200 rounded-3xl">
      <h2 className="text-3xl font-bold text-center mb-8">Welcome Back</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="form-control">
          <label className="label"><span className="label-text">Email</span></label>
          <input 
            type="email" 
            className="input input-bordered w-full" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>
        <div className="form-control">
          <label className="label"><span className="label-text">Password</span></label>
          <input 
            type="password" 
            className="input input-bordered w-full" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </div>
        <button type="submit" className="btn btn-primary w-full rounded-full" disabled={loading}>
          {loading ? 'Loading...' : 'Login'}
        </button>
      </form>
      
      <div className="divider my-8">OR</div>
      
      <button onClick={handleGoogleLogin} className="btn btn-outline w-full rounded-full">
        Continue with Google
      </button>
      
      <p className="text-center mt-6 text-sm">
        Don't have an account? <Link to="/register" className="text-primary hover:underline">Register here</Link>
      </p>
    </div>
  );
};

export default Login;