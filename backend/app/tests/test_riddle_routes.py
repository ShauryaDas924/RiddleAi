# =========================================================
# Purpose
# =========================================================
# This file will eventually test riddle-related backend routes.
# It should check the route behavior, not the full AI provider.
#
# =========================================================
# What to build later
# =========================================================
# Step 1: Test that a riddle route accepts valid input.
# Step 2: Test that invalid difficulty or category values are rejected.
# Step 3: Test answer-checking route behavior.
# Step 4: Mock AI calls later so tests do not need real API keys.
#
# =========================================================
# Data in and data out
# =========================================================
# Data in: Test requests with sample riddle data.
# Data out: Passing or failing route tests.
#
# =========================================================
# Connects to
# =========================================================
# - backend/app/routes/riddle_routes.py
# - backend/app/services/ai_riddle_service.py
# - backend/app/schemas/riddle_schemas.py
#
# =========================================================
# Avoid
# =========================================================
# Do not call a real AI provider from normal tests.
# Do not require real Supabase credentials for beginner tests.
#
# =========================================================
# Beginner checklist
# =========================================================
# [ ] Are AI calls mocked later?
# [ ] Are success and error cases tested?
# [ ] Are tests readable?
