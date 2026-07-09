# =========================================================
# Purpose
# =========================================================
# This file will eventually manage user preferences.
# Preferences help choose difficulty, category, and learning style.
#
# =========================================================
# What to build later
# =========================================================
# Step 1: Define default preferences for new users.
# Step 2: Load saved preferences from Supabase.
# Step 3: Save updated preferences from SettingsPage.
# Step 4: Provide preferences to riddle generation.
#
# =========================================================
# Data in and data out
# =========================================================
# Data in: User id, difficulty choice, and category choices.
# Data out: Saved preferences and defaults when none exist.
#
# =========================================================
# Connects to
# =========================================================
# - backend/app/routes/user_routes.py
# - backend/app/services/supabase_service.py
# - backend/app/schemas/preference_schemas.py
# - frontend/my-react-app/src/hooks/useUserPreferences.js
#
# =========================================================
# Avoid
# =========================================================
# Do not duplicate default preferences in many files.
# Do not trust frontend values without backend validation later.
#
# =========================================================
# Beginner checklist
# =========================================================
# [ ] Are defaults clear?
# [ ] Are preferences saved through Supabase later?
# [ ] Are values validated before saving?
