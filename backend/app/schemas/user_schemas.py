# =========================================================
# Purpose
# =========================================================
# This file will eventually describe user-related data shapes.
# It may include safe user profile data and progress responses.
#
# =========================================================
# What to build later
# =========================================================
# Step 1: Define a safe user summary shape.
# Step 2: Define a progress summary response shape.
# Step 3: Add auth-related shapes only when auth is ready.
#
# =========================================================
# Data in and data out
# =========================================================
# Data in: User id or safe profile fields.
# Data out: Safe user data and progress data.
#
# =========================================================
# Connects to
# =========================================================
# - backend/app/routes/user_routes.py
# - backend/app/routes/auth_routes.py
# - frontend/my-react-app/src/api/userApi.js
#
# =========================================================
# Avoid
# =========================================================
# Do not include passwords or secret tokens in response schemas.
# Do not expose Supabase service role information.
#
# =========================================================
# Beginner checklist
# =========================================================
# [ ] Is only safe user data returned?
# [ ] Are auth fields added carefully later?
# [ ] Are progress shapes easy for DashboardPage to use?
