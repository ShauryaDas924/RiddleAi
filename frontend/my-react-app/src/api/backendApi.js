// =========================================================
// Purpose
// =========================================================
// This file holds shared helper code for talking to the FastAPI backend.
//
// =========================================================
// What was built
// =========================================================
// Step 1: Read the backend API URL from Vite environment variables with local fallback.
// Step 2: Created a unified apiRequest helper for standardized JSON requests.
// Step 3: Implemented consistent HTTP error handling and response parsing.
// Step 4: Exported helper functions for feature API modules (riddleApi.js, userApi.js).
//
// =========================================================
// Data in and data out
// =========================================================
// Data in: Endpoint paths, request options, and user input from pages.
// Data out: Parsed response data from the backend.
//
// =========================================================
// Connects to
// =========================================================
// - src/api/riddleApi.js
// - src/api/userApi.js
// - backend/app/routes/*
//
// =========================================================
// Avoid
// =========================================================
// Do not put Supabase service role keys here.
// Do not put AI API keys here.
// Do not hide feature-specific logic in this shared helper.
//
// =========================================================
// Beginner checklist
// =========================================================
// [x] Is the backend URL coming from .env?
// [x] Are errors handled in one predictable way?
// [x] Are secrets kept out of frontend code?

// Step 1: Base URL configured via Vite env variable with fallback for local dev
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

/**
 * Step 2 & 3: Universal wrapper for HTTP requests to the FastAPI backend.
 * Handles JSON parsing, request headers, and normalized error processing.
 */
export async function apiRequest(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;

  const defaultHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };

  // Include user auth token if stored in local session
  const token = localStorage.getItem('authToken');
  if (token) {
    defaultHeaders['Authorization'] = `Bearer ${token}`;
  }

  const config = {
    method: options.method || 'GET',
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
    ...options,
  };

  // Automatically stringify body objects if provided
  if (options.body && typeof options.body === 'object') {
    config.body = JSON.stringify(options.body);
  }

  try {
    const response = await fetch(url, config);

    // Step 3: Predictable error extraction
    if (!response.ok) {
      let errorMessage = `Request failed with status ${response.status}`;
      try {
        const errorData = await response.json();
        errorMessage = errorData.detail || errorData.message || errorMessage;
      } catch {
        // Response body was not JSON, retain default status message
      }
      throw new Error(errorMessage);
    }

    // Handle 204 No Content gracefully
    if (response.status === 204) {
      return null;
    }

    return await response.json();
  } catch (err) {
    // Catch fetch/network errors (e.g. backend offline)
    if (err.name === 'TypeError' && err.message === 'Failed to fetch') {
      throw new Error('Unable to connect to the backend server. Please check if the server is running.', { cause: err });
    }
    throw err;
  }
}