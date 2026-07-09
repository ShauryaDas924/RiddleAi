# =========================================================
# Purpose
# =========================================================
# This file will eventually test user preference behavior.
# Preferences include difficulty and category choices.
#
# =========================================================
# What to build later
# =========================================================
# Step 1: Test loading default preferences.
# Step 2: Test saving valid preferences.
# Step 3: Test rejecting invalid preference values.
# Step 4: Mock Supabase calls later so tests do not need real credentials.
#
# =========================================================
# Data in and data out
# =========================================================
# Data in: Test preference values.
# Data out: Passing or failing tests for preference behavior.
#
# =========================================================
# Connects to
# =========================================================
# - backend/app/routes/user_routes.py
# - backend/app/services/user_preference_service.py
# - backend/app/schemas/preference_schemas.py
#
# =========================================================
# Avoid
# =========================================================
# Do not require a real logged-in user for early beginner tests.
# Do not call real Supabase from normal unit tests.
#
# =========================================================
# Beginner checklist
# =========================================================
# [ ] Are defaults tested?
# [ ] Are invalid values tested?
# [ ] Are external services mocked later?
