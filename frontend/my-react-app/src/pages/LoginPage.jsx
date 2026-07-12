import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Supposed connection to auth handlers
import { loginUser, signupUser } from '../api/userApi';

// =========================================================
// Purpose
// =========================================================
// This file handles login and signup screens.
// Authentication was implemented now that the basic riddle flow works.
//
// =========================================================
// What was built
// =========================================================
// Step 1: Combined login and signup states into one unified component toggle.
// Step 2: Added controlled form fields for email and password.
// Step 3: Wired form handlers up to point to backend python endpoints / Supabase auth layers.
// Step 4: Configured programmatic navigation to send the student straight to the dashboard on success.
//
// =========================================================
// Data in and data out
// =========================================================
// Data in: Student login/signup form values.
// Data out: Auth request and user session status later.
//
// =========================================================
// Connects to
// =========================================================
// - src/api/userApi.js
// - backend/app/routes/auth_routes.py
// - Supabase auth later
//
// =========================================================
// Avoid
// =========================================================
// Do not build auth before the basic app flow is clear.
// Do not put service role keys in frontend auth code.
//
// =========================================================
// Beginner checklist
// =========================================================
// [x] Is auth added after the play flow works?
// [x] Are form errors helpful?
// [x] Are private keys kept out of the browser?

export default function AuthPage() {
  // Step 1: Unified layout split by toggle state
  const [isLoginView, setIsLoginView] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    // Basic frontend check before firing network requests
    if (!email || !password) {
      setErrorMsg('Please fill in all empty fields.');
      return;
    }

    setLoading(true);
    try {
      if (isLoginView) {
        // Step 3: Trigger backend API routes
        await loginUser({ email, password });
      } else {
        await signupUser({ email, password });
      }
      
      // Step 4: Safely redirect the student to the dashboard
      navigate('/');
    } catch (err) {
      setErrorMsg(err.message || 'Authentication error. Please check your inputs.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh', padding: '20px' }}>
      <div style={{ width: '100%', maxWidth: '400px', padding: '30px', borderRadius: '12px', border: '1px solid #e0e0e0', backgroundColor: '#ffffff', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
        
        <h2 style={{ textAlign: 'center', marginBottom: '24px', color: '#1a1a1a' }}>
          {isLoginView ? 'Welcome Back!' : 'Create Your Account'}
        </h2>

        {errorMsg && (
          <div style={{ color: '#d32f2f', backgroundColor: '#ffebee', padding: '10px', borderRadius: '6px', marginBottom: '16px', fontSize: '14px' }}>
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Step 2: Form input configurations */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '14px', fontWeight: '500', color: '#444' }}>Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="student@riddleai.com"
              style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '15px' }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '14px', fontWeight: '500', color: '#444' }}>Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '15px' }}
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            style={{ padding: '12px', backgroundColor: '#4f46e5', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', marginTop: '8px', opacity: loading ? 0.7 : 1 }}
          >
            {loading ? 'Processing...' : isLoginView ? 'Log In' : 'Sign Up'}
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px', color: '#666' }}>
          {isLoginView ? "Don't have an account? " : "Already have an account? "}
          <button 
            type="button" 
            onClick={() => { setIsLoginView(!isLoginView); setErrorMsg(''); }}
            style={{ background: 'none', border: 'none', color: '#4f46e5', cursor: 'pointer', fontWeight: '600', padding: 0 }}
          >
            {isLoginView ? 'Sign Up' : 'Log In'}
          </button>
        </div>

      </div>
    </div>
  );
}