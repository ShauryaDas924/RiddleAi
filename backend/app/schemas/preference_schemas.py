# =========================================================
# Purpose
# =========================================================
# This file will eventually describe preference request and response shapes.
# Preferences guide riddle difficulty and category choices.
#
# =========================================================
# What to build later
# =========================================================
# Step 1: Define allowed difficulty values.
# Step 2: Define allowed category values or category ids.
# Step 3: Define the request shape for saving preferences.
# Step 4: Define the response shape for loaded preferences.
#
# =========================================================
# Data in and data out
# =========================================================
# Data in: Difficulty and category selections.
# Data out: Validated preferences and defaults.
#
# =========================================================
# Connects to
# =========================================================
# - backend/app/routes/user_routes.py
# - backend/app/services/user_preference_service.py
# - frontend/my-react-app/src/components/user/PreferenceForm.jsx
#
# =========================================================
# Avoid
# =========================================================
# Do not let random difficulty strings spread through the app.
# Do not store preferences without validation later.
#
# =========================================================
# Beginner checklist
# =========================================================
# [ ] Are preference values limited and clear?
# [ ] Are defaults handled?
# [ ] Can the frontend understand the response?
