import React, { useState } from 'react';
import useUserPreferences from '../hooks/useUserPreferences';
import PreferenceForm from '../components/user/PreferenceForm';

// =========================================================
// Purpose
// =========================================================
// This file lets students change app preferences.
// Preferences guide which riddles the backend generates or selects.
//
// =========================================================
// What was built
// =========================================================
// Step 1: Integrated useUserPreferences.js to manage state loading and updates.
// Step 2: Rendered PreferenceForm to capture preferred difficulty and settings.
// Step 3: Wired the form submit to pass updated values directly to the backend API.
// Step 4: Implemented explicit loading, success message alerts, and error states.
//
// =========================================================
// Data in and data out
// =========================================================
// Data in: Existing preferences from the backend.
// Data out: Updated difficulty, categories, and settings.
//
// =========================================================
// Connects to
// =========================================================
// - src/hooks/useUserPreferences.js
// - src/components/user/PreferenceForm.jsx
// - src/api/userApi.js
// - backend/app/routes/user_routes.py
//
// =========================================================
// Avoid
// =========================================================
// Do not store sensitive account data here.
// Do not save directly to Supabase from this frontend page.
//
// =========================================================
// Beginner checklist
// =========================================================
// [x] Can the student understand each setting?
// [x] Are saves sent to the backend?
// [x] Are errors shown clearly?

export default function ProfilePage() {
  // Step 1: Load dynamic preference hook state
  const { 
    preferences, 
    loading, 
    error, 
    savePreferences 
  } = useUserPreferences();

  const [saveSuccess, setSaveSuccess] = useState(false);
  const [saveError, setSaveError] = useState(null);
  const [saving, setSaving] = useState(false);

  // Step 3: Handle saving changes upstream
  const handleSavePreferences = async (updatedPreferences) => {
    setSaveSuccess(false);
    setSaveError(null);
    setSaving(true);
    
    try {
      await savePreferences(updatedPreferences);
      setSaveSuccess(true);
    } catch (err) {
      setSaveError(err.message || 'Failed to save updated configuration.');
    } finally {
      setSaving(false);
    }
  };

  // Step 4: Simple global loading state
  if (loading) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <p>Retrieving your learning configurations...</p>
      </div>
    );
  }

  // Step 4: Initial dynamic loading failure catch
  if (error) {
    return (
      <div style={{ padding: '20px', color: '#d32f2f', maxWidth: '600px', margin: '0 auto' }}>
        <h3>Error Loading Settings</h3>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', fontFamily: 'system-ui, sans-serif' }}>
      <header style={{ marginBottom: '24px' }}>
        <h2>Account Preferences</h2>
        <p style={{ color: '#666' }}>Customize how Riddle AI interacts with your session goals.</p>
      </header>

      {/* Step 4: Save Operation Status banners */}
      {saveSuccess && (
        <div style={{ color: '#2e7d32', backgroundColor: '#edf7ed', padding: '12px', borderRadius: '6px', marginBottom: '16px', fontSize: '14px' }}>
          ✓ Preferences saved successfully! Your adjustments will take effect on your next riddle.
        </div>
      )}

      {saveError && (
        <div style={{ color: '#c62828', backgroundColor: '#fdecea', padding: '12px', borderRadius: '6px', marginBottom: '16px', fontSize: '14px' }}>
          ❌ Couldn't save choices: {saveError}
        </div>
      )}

      {/* Step 2: PreferenceForm view instantiation */}
      <div style={{ opacity: saving ? 0.6 : 1, transition: 'opacity 0.2s ease' }}>
        <PreferenceForm 
          initialPreferences={preferences} 
          onSubmit={handleSavePreferences} 
          disabled={saving}
        />
      </div>
    </div>
  );
}