# =========================================================
# Purpose
# =========================================================
# This file will eventually contain authentication-ready routes.
# Auth can be added after the basic riddle flow works.
#
# =========================================================
# What to build later
# =========================================================
# Step 1: Decide how Supabase auth will be used.
# Step 2: Add routes only when the app needs login/signup.
# Step 3: Keep auth responses small and safe.
# Step 4: Protect user-specific routes later.
#
# =========================================================
# Data in and data out
# =========================================================
# Data in: Login/signup data or auth tokens later.
# Data out: Auth status, user identity, or safe error messages.
#
# =========================================================
# Connects to
# =========================================================
# - frontend/my-react-app/src/pages/LoginPage.jsx
# - backend/app/services/supabase_service.py
# - Supabase auth later
#
# =========================================================
# Avoid
# =========================================================
# Do not build auth before the core play flow.
# Do not log passwords or secret tokens.
# Do not send service role keys to the frontend.
#
# =========================================================
# Beginner checklist
# =========================================================
# [ ] Is auth added only when needed?
# [ ] Are secrets protected?
# [ ] Are auth errors safe and understandable?
