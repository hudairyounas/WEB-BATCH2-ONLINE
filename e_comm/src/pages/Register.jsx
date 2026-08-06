import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return toast.error('Passwords do not match');
    }
    setLoading(true);
    try {
      await register(email, password);
      toast.success('Account created successfully!');
      navigate('/');
    } catch (error) {
      toast.error(error.message);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-base-100 shadow-sm border border-base-200 rounded-3xl">
      <h2 className="text-3xl font-bold text-center mb-8">Create Account</h2>
      
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
        <div className="form-control">
          <label className="label"><span className="label-text">Confirm Password</span></label>
          <input 
            type="password" 
            className="input input-bordered w-full" 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required 
          />
        </div>
        <button type="submit" className="btn btn-primary w-full rounded-full" disabled={loading}>
          {loading ? 'Loading...' : 'Register'}
        </button>
      </form>
      
      <p className="text-center mt-6 text-sm">
        Already have an account? <Link to="/login" className="text-primary hover:underline">Login here</Link>
      </p>
    </div>
  );
};

export default Register;