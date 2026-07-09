# =========================================================
# Purpose
# =========================================================
# This file will eventually contain API routes for user preferences and progress.
# It helps keep user-related endpoints separate from riddle endpoints.
#
# =========================================================
# What to build later
# =========================================================
# Step 1: Add a route to load user preferences.
# Step 2: Add a route to save user preferences.
# Step 3: Add a route to load progress or dashboard stats.
# Step 4: Call service files for real work.
#
# =========================================================
# Data in and data out
# =========================================================
# Data in: User id, preference choices, and progress requests.
# Data out: Preferences, saved status, and progress summaries.
#
# =========================================================
# Connects to
# =========================================================
# - backend/app/services/user_preference_service.py
# - backend/app/services/riddle_history_service.py
# - backend/app/schemas/user_schemas.py
# - frontend/my-react-app/src/api/userApi.js
#
# =========================================================
# Avoid
# =========================================================
# Do not handle passwords here.
# Do not expose private Supabase keys through responses.
#
# =========================================================
# Beginner checklist
# =========================================================
# [ ] Are user routes separate from auth routes?
# [ ] Are services doing the main work?
# [ ] Are response shapes clear?
